import React, { useContext, useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import { navigate } from "gatsby";
import { Helmet } from "react-helmet";
import { Suspense } from "react";
import "../../configureAmplify";
// import Dashboard from "../components/Dashboard";
import AppContext from "../contexts/AppContext";
import { IntlProvider } from "react-intl";
import SignIn from "../components/SignIn";
import { SnackbarProvider } from "notistack";
import TopBar from "../components/TopBar";
import DrawerSideBar from "../components/DrawerSideBar";
import Container from "@mui/material/Container";
import PrivateRoute from "../components/layout/PrivateRoute";
// import CopyEditing from "../components/editors/CopyEditing";
// import Translation from "../components/editors/Translation";
import ProductDescription from "../components/editors/ProductDescription";
import ProductDescriptionApp from "../components/products/ProductDescriptionApp";
// import VoiceCompatible from "../components/editors/voiceCompatible";
import AccountManage from "../components/AccountManage";
import { styled } from "@mui/material/styles";

import { Router } from "@reach/router";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

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
// @refresh reset
export default function App() {
  const appContext = useContext(AppContext);
  const [context, setContext] = useState(appContext);
  const { stateLanguage } = useContext(AppContext);
  const i18nMessages = require(`../data/messages/${stateLanguage}`);

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
      navigate("/login");
    }
  }
  const logout = async () => {
    const user = await Auth.currentAuthenticatedUser();
    if (user) {
      Auth.signOut();
      navigate("/login");
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

  if (
    !user ||
    user == null ||
    user == null ||
    user === "The user is not authenticated"
  ) {
    return (
      <>
        <SignIn />
      </>
    );
  } else {
    return (
      <>
        <AppContext.Provider value={state}>
          <IntlProvider locale={stateLanguage} messages={i18nMessages}>
            {/* <CacheProvider value={cache}> */}
            <SnackbarProvider maxSnack={3}>
              <Helmet>
                <meta charSet='utf-8' />
                <meta
                  name='viewport'
                  content='width=device-width, initial-scale=1.0'
                />
                <title>Dashboard</title>
              </Helmet>
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <TopBar icon='MenuRoundedIcon' title='Home' />
                <DrawerSideBar />
                <Box
                  sx={{
                    flexGrow: 1,
                    height: "100vh",
                    overflow: "auto",
                  }}
                  component='main'
                >
                  <MarginBox />
                  <Container
                    maxWidth='lg'
                    sx={{
                      paddingTop: (theme) => theme.spacing(4),
                      paddingBottom: (theme) => theme.spacing(4),
                    }}
                  >
                    {/* <Router basepath='/app'>
                      <AdsGoogle path='/ads' /> */}
                    {/* <CopyEditing path='/pro' /> */}
                    {/* <VoiceCompatible path='/brandvoice' /> */}
                    {/* <PrivateRoute path='/profile' component={AccountManage} />
                      <PrivateRoute
                        path='/productdescription'
                        component={ProductDescriptionApp}
                      /> */}

                    <ProductDescription
                      message01='Please select the text you would like to modify'
                      mainPlaceholder="Let's get started with a product description, shall we?"
                      inputLimitation={201}
                      productType='4'
                      generateButtonName='Generate description'
                      toneTextField={true}
                      headerTitle='Product Benefits'
                      LabelsLists={[
                        {
                          label: "Brand name",
                          placeholder: "Brand/Business name",
                        },
                        {
                          label: "Audience",
                          placeholder:
                            "Audience: e.g., those who love coffee, or public",
                        },
                        {
                          label: "keywords",
                          placeholder: "keywords are separated by commas",
                        },
                        {
                          label: "Features",
                          placeholder: "Features are separated by commas",
                        },
                      ]}
                      path='/productbenefits'
                    />
                    {/* <ProductDescription
                        message01='Please select the text you would like to modify'
                        mainPlaceholder="Let's get started with a product description, shall we?"
                        inputLimitation={201}
                        productType='4'
                        generateButtonName='Generate description'
                        toneTextField={true}
                        headerTitle='Product Features'
                        LabelsLists={[
                          {
                            label: "Brand name",
                            placeholder: "Brand/Business name",
                          },
                          {
                            label: "Audience",
                            placeholder:
                              "Audience: e.g., those who love coffee, or public",
                          },
                          {
                            label: "keywords",
                            placeholder: "keywords are separated by commas",
                          },
                          {
                            label: "Features",
                            placeholder: "Features are separated by commas",
                          },
                        ]}
                        path='/productfeatures'
                      />
                      <ProductDescription
                        message01='A Writer Helps You Deliver Your Message the Same Way Every Time'
                        mainPlaceholder='A user-friendly application that allows brand teams and marketing managers to keep all content consistent, organized, and up-to-date.'
                        inputLimitation={201}
                        productType='7'
                        generateButtonName='Apply voice'
                        toneTextField={true}
                        headerTitle='Brand Vision Statement'
                        LabelsLists={[]}
                        path='/brandvisionstatement'
                      /> */}
                    {/* <Translation path='/translation' /> */}
                    {/* <AccountManage path='/profile' /> */}
                    {/* </Router> */}
                  </Container>
                </Box>
              </Box>
            </SnackbarProvider>
            {/* </CacheProvider> */}
          </IntlProvider>
        </AppContext.Provider>
      </>
    );
  }
}
