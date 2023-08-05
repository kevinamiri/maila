Rewrite the given code in best practice design patterns, clean code

```tsx
import React, { useContext, useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import { navigate } from "gatsby";
import { Helmet } from "react-helmet";
import { FormattedMessage, IntlProvider } from "react-intl";
import "../../../configureAmplify";
import AppContext from "../../contexts/AppContext";
import SignIn from "../../components/SignIn";
import TopBar from "../../components/TopBar";
import DrawerSideBar from "../../components/DrawerSideBar";
import PrivateRoute from "../../components/layout/PrivateRoute";
import ProductDescription from "../../components/editors/ProductDescription";
import AccountManage from "../../components/AccountManage";
import { styled } from "@mui/material/styles";
import { Router, useLocation } from "@reach/router";
import Box from "@mui/material/Box";
import SearchBox from "../../components/subcomponents/searchBox";
import useSettings from "../../hooks/useSettings";
import { useSnackbar } from "notistack";
import LangSettingsDials from "../../components/subcomponents/LangSettingsDials";
import EditorManage from "../../components/editor-manage";
import useToolsProducts from "../../hooks/useToolsProducts";
import DocumentsPage from "../../components/documents-page";
import States from "../../components/app-components/states";

const MarginBox = styled("div")(({ theme }) => ({
  minHeight: 56,
  [theme.breakpoints.down("sm")]: {
    minHeight: 48,
  },
}));

const getValues = (settings) => ({
  direction: settings.direction,
  responsiveFontSizes: settings.responsiveFontSizes,
  theme: settings.theme,
  lang: settings.lang,
});

const isNew = (str, text) => str.toLowerCase().includes(text.toLowerCase());

const App = () => {
  const { settings, saveSettings } = useSettings();
  const location = useLocation();
  const { enqueueSnackbar } = useSnackbar();
  const [values, setValues] = useState(getValues(settings));
  const [user, setUser] = useState(null);
  const [context, setContext] = useState(useContext(AppContext));
  const useTools = useToolsProducts();
  const i18nMessages = require(`../../data/messages/${values.lang}`);
  const allProducts = useTools[`${values.lang}`].edges.map(
    (item) => item.node.frontmatter
  );

  const handleChange = (field, value) => {
    const newValues = { ...values, [field]: value };
    setValues(newValues);
    saveSettings(newValues);
  };

  const changeLanguage = (event, newValue) => {
    handleChange("lang", newValue ? newValue.LangCode : "en");
  };

  const checkUser = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      setContext({ ...context, userInfo: user });
    } catch (err) {
      setContext({ ...context, userInfo: err });
      if (isNew(location.search, "error_description")) {
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
      }
      navigate("/auth/login");
    }
  };

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
    toggleOpen,
    checkUser,
    logout,
  };

  useEffect(() => {
    if (location.pathname === "/app" || location.pathname === "/app/") {
      navigate("/app/list");
    }
    checkUser();
    Auth.currentAuthenticatedUser().then(setUser);
  }, []);

  if (!user || user === "The user is not authenticated") {
    return isNew(location.search, "?code=") ? (
      <SignIn isRedirecting={true} />
    ) : (
      <SignIn />
    );
  }

  return (
    <AppContext.Provider value={state}>
      <IntlProvider locale={values.lang} messages={i18nMessages}>
        <Helmet>
          <meta charSet='utf-8' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
          <title>Maila App</title>
        </Helmet>
        <Box sx={{ display: "flex" }}>
          <TopBar
            icon='MenuRoundedIcon'
            title='maila.ai'
            uilang={<LangSettingsDials changeLanguage={changeLanguage} />}
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
            <Box sx={{ py: 3, px: "1vw" }}>
              <SearchBox />
              <Router basepath='/app'>
                <PrivateRoute path='/profile' component={AccountManage} />
                <PrivateRoute path='/list' component={States} />
                {allProducts.map((product, index) => {
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
                <AccountManage path='/profile' />
                <DocumentsPage path='/documents' />
                <EditorManage path='/editor' />
              </Router>
            </Box>
          </Box>
        </Box>
      </IntlProvider>
    </AppContext.Provider>
  );
};

export default App;

```