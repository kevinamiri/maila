import React, { useContext, useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import { navigate } from "gatsby";
import { Helmet } from "react-helmet";
import { IntlProvider } from "react-intl";
import "../../../configureAmplify";
import AppContext from "../../contexts/AppContext";
import SignIn from "../../components/SignIn";
import TopBar from "../../components/TopBar";
import DrawerSideBar from "../../components/DrawerSideBar";
import PrivateRoute from "../../components/layout/PrivateRoute";
import ProductDescription from "../../components/editors/ProductDescription";
import AccountManage from "../../components/AccountManage";
import { styled } from "@mui/material/styles";
// @refresh reset
import { Router } from "@reach/router";
import { useLocation } from "@reach/router";
import Box from "@mui/material/Box";
import SearchBox from "../../components/subcomponents/searchBox";
import useSettings from "../../hooks/useSettings";
import { OptionsObject, SnackbarKey, SnackbarMessage, SnackbarProvider, useSnackbar } from 'notistack';
import SetLanguageModal from "../../components/subcomponents/set-language-modal";
import EditorManage from "../../components/editor-manage";
import useToolsProducts from "../../hooks/useToolsProducts";
import DocumentsPage from "../../components/documents-page";
import States from "../../components/app-components/states";
import { Settings } from "contexts/settings-context";

const inputList = 800;
const MarginBox = styled("div")(({ theme }) => ({
  minHeight: 48,
  [theme.breakpoints.down("sm")]: {
    minHeight: 48,
  },
  [theme.breakpoints.up("sm")]: {
    minHeight: 56,
  },
  [theme.breakpoints.up("md")]: {
    minHeight: 56,
  },
  [theme.breakpoints.up("lg")]: {
    minHeight: 56,
  },
}));

const getValues = (settings: Settings) => ({
  direction: settings.direction,
  responsiveFontSizes: settings.responsiveFontSizes,
  theme: settings.theme,
  lang: settings.lang,
});

const isNew = (str, text) => {
  return str.toLowerCase().includes(text.toLowerCase());
};
export default function App() {
  const useTools = useToolsProducts();
  const appContext = useContext(AppContext);
  const [context, setContext] = useState(appContext);
  const { settings, saveSettings } = useSettings();
  const location = useLocation();

  const redirectToList = () => {
    location.pathname === "/app" && navigate("/app/list");
    location.pathname === "/app/" && navigate("/app/list");
  };

  console.log(location.pathname);
  React.useEffect(() => {
    redirectToList();
  }, [location.pathname]);

  // Initialize enqueueSnackbar as a no-op function
  let enqueueSnackbar: (message: SnackbarMessage, options?: OptionsObject) => SnackbarKey = () => "";

  // Check if window is defined (i.e., we're on the client)
  if (typeof window !== 'undefined') {
    // If we're on the client, get enqueueSnackbar from useSnackbar
    ({ enqueueSnackbar } = useSnackbar());
  }
  /**
   * why state? When the component receives updates, the result is displayed immediately, otherwise we can use ref.
   */
  const [values, setValues] = React.useState(getValues(settings));
  const i18nMessages = require(`../../data/messages/${values.lang}`);

  // because product description uses the ProductDescriptionTool template, I filter out the product description
  const allProducts = useTools[`${values.lang}`].edges.map(
    (item: { node: { frontmatter: any; }; }) => item.node.frontmatter
  );

  const products = allProducts;
  const handleChange = (field: any, value: any): void => {
    setValues({
      ...values,
      [field]: value,
    });

    saveSettings({
      ...values,
      [field]: value,
    });
  };

  const changeLanguage = (event: any, newValue: any) => {
    handleChange("lang", newValue ? newValue.LangCode : "en");
    // saveSettings(values);
  };
  // ................ end handle UI lang change ...............

  useEffect(() => {
    checkUser();
  }, []);

  const [user, setUser] = useState(null);
  useEffect(() => {
    Auth.currentAuthenticatedUser().then(setUser);
  }, []);

  async function checkUser() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      setContext({ ...context, userInfo: user });
    } catch (err) {
      setContext({ ...context, userInfo: err });
      isNew(location.search, "error_description") &&
        enqueueSnackbar("User has been successfully registered", {
          variant: "success",
          autoHideDuration: 15000,
        });
      setTimeout(
        () =>
          enqueueSnackbar("To access the app you need to sign in again.", {
            variant: "warning",
            autoHideDuration: 3000,
          }),
        3000
      );

      navigate("/auth/login");
    }
  }
  const logout = async () => {
    const user = await Auth.currentAuthenticatedUser();
    if (user) {
      Auth.signOut();
      navigate("/auth/login");
    }
  };

  const toggleOpen = () => {
    setContext({ ...context, IsOpen: !context.IsOpen });
  };

  const state = {
    ...context,
    toggleOpen: toggleOpen,
    checkUser: checkUser,
    logout: logout,
  };

  if (!user || user == null || user === "The user is not authenticated") {
    return (
      <>
        {isNew(location.search, "?code=") ? (
          <SignIn isRedirecting={true} />
        ) : (
          <SignIn />
        )}
      </>
    );
  } else {
    return (
      <AppContext.Provider value={state}>
        <SnackbarProvider>
          <IntlProvider locale={values.lang} messages={i18nMessages}>
            <Helmet>
              <meta charSet='utf-8' />
              <meta
                name='viewport'
                content='width=device-width, initial-scale=1.0'
              />
              <title>Maila App</title>
            </Helmet>

            <Box
              sx={{
                display: "flex",
              }}
            >
              <TopBar
                icon='MenuRoundedIcon'
                title='maila.ai'
                uilang={<SetLanguageModal changeLanguage={changeLanguage} />}
              />
              <DrawerSideBar />
              <Box
                sx={{
                  flexGrow: 1,
                  height: "100vh",
                  overflow: "auto",
                  backgroundColor: "background.default",
                }}
                component='main'
              >
                <MarginBox />
                <Box
                  sx={{
                    py: 3,
                    px: "1vw",
                  }}
                >
                  <SearchBox />
                  <Router basepath='/app'>
                    <PrivateRoute path='/profile' component={AccountManage} />
                    <PrivateRoute path='/list' component={States} />
                    {products.map((product: { url: string; title: any; usage: any; placeholder: any; editor_height: number; help_hint: any; product_type: string; extraFields: any; tone: boolean; loadFromUrl: boolean; }, index: React.Key) => {
                      const path = product.url.split("/")[2];
                      return (
                        <ProductDescription
                          key={index}
                          label={product.title}
                          headerTitle={product.title}
                          description={product.usage}
                          example={product.placeholder}
                          editorHeight={product.editor_height}
                          instructHelp={product.help_hint}
                          productType={product.product_type}
                          path={path}
                          extraFields={product.extraFields}
                          toneTextField={product.tone}
                          loadFromUrl={product.loadFromUrl}
                        />
                      );
                    })}
                    <EditorManage
                      label={"Advanced Editor"}
                      headerTitle={
                        "This is an advanced editor for special applications and tuning outputs."
                      }
                      description={
                        "This is an advanced editor for special applications and tuning outputs."
                      }
                      example={
                        "This is an advanced editor for special applications and tuning outputs.."
                      }
                      instructHelp={
                        "This is an advanced editor for special applications and tuning outputs."
                      }
                      productType='44'
                      path='/prompt'
                      toneTextField={true}
                      labelsLists={[]}
                      tunningOptions
                    />
                    <ProductDescription
                      label={"suffix"}
                      headerTitle={"suffix"}
                      description={"suffix"}
                      example={"suffix test"}
                      instructHelp={"suffix about product text"}
                      productType='46'
                      path='/suffix'
                      toneTextField={true}
                      labelsLists={[]}
                    />
                    <AccountManage path='/profile' />
                    <DocumentsPage path='/documents' />
                    <EditorManage path='/editor' />
                  </Router>
                </Box>
              </Box>
            </Box>
          </IntlProvider>
        </SnackbarProvider>
      </AppContext.Provider>
    );
  }
}
