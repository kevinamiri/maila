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
// import VoiceCompatible from "../components/editors/voiceCompatible";
import AccountManage from "../components/AccountManage";
import { styled } from "@mui/material/styles";

import {
  updateAudienceValue,
  updateBusinessNameValue,
  updateKeywordValue,
  updateFeatureValue,
} from "../slices/fieldsValue";
import { Router } from "@reach/router";
import Box from "@mui/material/Box";
import SearchBox from "../components/subcomponents/searchBox";
import LanguageAutocompleteApp from "../components/subcomponents/languageAutocompleteApp";
// import CssBaseline from "@mui/material/CssBaseline";
// import { QuickStats } from "../components/QuickStats";

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
  const i18nMessages = require(`../data/messages/${context.stateLanguage}`);
  const inputList = 800;

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
      navigate("/auth/login");
    }
  };

  const toggleOpen = () => {
    setContext({ ...context, IsOpen: !context.IsOpen });
  };

  const changeLanguage = (event: any, newValue: any) => {
    setContext({
      ...context,
      stateLanguage: newValue ? newValue.LangCode : "en",
    });
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
        <SignIn />
      </>
    );
  } else {
    return (
      <AppContext.Provider value={state}>
        <IntlProvider locale={context.stateLanguage} messages={i18nMessages}>
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
              <TopBar icon='MenuRoundedIcon' title='maila.ai' />
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
                  <SearchBox />
                  {/* <LanguageAutocompleteApp handleChange={changeLanguage} /> */}
                  <Router basepath='/app'>
                    {/* <CopyEditing path='/pro' /> */}
                    {/* <VoiceCompatible path='/brandvoice' /> */}
                    <PrivateRoute path='/profile' component={AccountManage} />
                    {/* <PrivateRoute
                        path='/productdescription'
                        component={ProductDescriptionApp}
                      /> */}
                    <ProductDescription
                      message01=''
                      mainPlaceholder="Let's get started with a product description, shall we?"
                      inputLimitation={inputList}
                      productType='4'
                      productUrl='generate'
                      generateButtonName='Generate description'
                      toneTextField={true}
                      headerTitle='Product description'
                      labelsLists={[
                        {
                          label: "Brand name",
                          placeholder: "Brand/Business name",
                          dispatcher: updateBusinessNameValue,
                        },
                        {
                          label: "Audience",
                          placeholder:
                            "Audience: e.g., those who love coffee, or public",
                          dispatcher: updateAudienceValue,
                        },
                        {
                          label: "keywords",
                          placeholder: "keywords are separated by commas",
                          dispatcher: updateKeywordValue,
                        },
                        {
                          label: "Features",
                          placeholder: "Features are separated by commas",
                          dispatcher: updateFeatureValue,
                        },
                      ]}
                      path='/productdescription'
                    />
                    <ProductDescription
                      message01=''
                      mainPlaceholder="Let's get started with a product description, shall we?"
                      inputLimitation={inputList}
                      productType='4'
                      productUrl='generate'
                      generateButtonName='Generate description'
                      toneTextField={true}
                      headerTitle='Product Features'
                      labelsLists={[
                        {
                          label: "Brand name",
                          placeholder: "Brand/Business name",
                          dispatcher: updateBusinessNameValue,
                        },
                        {
                          label: "Audience",
                          placeholder:
                            "Audience: e.g., those who love coffee, or public",
                          dispatcher: updateAudienceValue,
                        },
                        {
                          label: "keywords",
                          placeholder: "keywords are separated by commas",
                          dispatcher: updateKeywordValue,
                        },
                        {
                          label: "Features",
                          placeholder: "Features are separated by commas",
                          dispatcher: updateFeatureValue,
                        },
                      ]}
                      path='/productfeatures'
                    />
                    <ProductDescription
                      message01=''
                      mainPlaceholder='prompt'
                      inputLimitation={inputList}
                      productType='8'
                      productUrl='generate'
                      generateButtonName='Generate'
                      toneTextField={false}
                      headerTitle='prompt'
                      labelsLists={[]}
                      path='/pro'
                    />
                    <ProductDescription
                      message01=''
                      mainPlaceholder='Grammar Correction'
                      inputLimitation={inputList}
                      productType='9'
                      productUrl='generate'
                      generateButtonName='check'
                      toneTextField={false}
                      headerTitle='Grammar Correction'
                      labelsLists={[]}
                      path='/grammar'
                    />
                    <ProductDescription
                      message01='A Writer Helps You Deliver Your Message the Same Way Every Time'
                      mainPlaceholder='A user-friendly application that allows brand teams and marketing managers to keep all content consistent, organized, and up-to-date.'
                      inputLimitation={inputList}
                      productType='translation'
                      productUrl='generate'
                      generateButtonName='Apply voice'
                      toneTextField={true}
                      headerTitle='Brand Vision Statement'
                      labelsLists={[]}
                      path='/brandvisionstatement'
                    />
                    <ProductDescription
                      message01='A Writer Helps You Deliver Your Message the Same Way Every Time'
                      mainPlaceholder='A user-friendly'
                      inputLimitation={inputList}
                      productType='7'
                      productUrl='generate'
                      generateButtonName='Apply voice'
                      toneTextField={true}
                      headerTitle='Making sure your text sounds consistent with your brand voice.'
                      labelsLists={[
                        {
                          label: "Brand name",
                          placeholder: "Brand/Business name",
                          dispatcher: updateBusinessNameValue,
                        },
                      ]}
                      path='/brandvoice'
                    />
                    <ProductDescription
                      message01=''
                      mainPlaceholder='Tagline Generator'
                      inputLimitation={inputList}
                      productType='10'
                      productUrl='generate'
                      generateButtonName='Tagline Generator'
                      toneTextField={true}
                      headerTitle='Tagline'
                      labelsLists={[
                        {
                          label: "keywords",
                          placeholder: "keywords are separated by commas",
                          dispatcher: updateKeywordValue,
                        },
                      ]}
                      path='/tagline'
                    />
                    <ProductDescription
                      message01=''
                      mainPlaceholder='Describe what your company does.'
                      inputLimitation={inputList}
                      productType='11'
                      productUrl='generate'
                      generateButtonName='Generate Statement'
                      toneTextField={false}
                      headerTitle='Brand Mission Statement'
                      labelsLists={[]}
                      path='/mission-statement'
                    />
                    <ProductDescription
                      message01=''
                      mainPlaceholder='Describe what your company does.'
                      inputLimitation={inputList}
                      productType='12'
                      productUrl='generate'
                      generateButtonName='Generate Statement'
                      toneTextField={false}
                      headerTitle='Brand Vision Statement'
                      labelsLists={[]}
                      path='/vision-statement'
                    />
                    <ProductDescription
                      message01=''
                      mainPlaceholder="Describe your product, and we'll create a value proposition based on your product description."
                      inputLimitation={inputList}
                      productType='20'
                      productUrl='generate'
                      generateButtonName='Generate Statement'
                      toneTextField={false}
                      headerTitle='Value proposition'
                      labelsLists={[]}
                      path='/value-proposition'
                    />
                    <ProductDescription
                      message01=''
                      mainPlaceholder="customize your content based on your company's tone and voice"
                      inputLimitation={inputList}
                      productType='19'
                      productUrl='generate'
                      generateButtonName='Rewrite a passage'
                      toneTextField={true}
                      headerTitle='Rewrite'
                      labelsLists={[]}
                      path='/adjust-tone'
                    />
                    <ProductDescription
                      message01=''
                      mainPlaceholder='Write an Email'
                      inputLimitation={inputList}
                      productType='13'
                      productUrl='generate'
                      generateButtonName='Generate Email'
                      toneTextField={true}
                      headerTitle='Write an Email'
                      labelsLists={[]}
                      path='/write-email'
                    />
                    <ProductDescription
                      message01=''
                      mainPlaceholder='Paraphrase a passage'
                      inputLimitation={inputList}
                      productType='17'
                      productUrl='generate'
                      generateButtonName='Paraphrase'
                      toneTextField={true}
                      headerTitle='Paraphrase'
                      labelsLists={[]}
                      path='/paraphrase'
                    />
                    <ProductDescription
                      message01=''
                      mainPlaceholder='Paraphrase a passage'
                      inputLimitation={inputList}
                      productType='18'
                      productUrl='generate'
                      generateButtonName='Summary and Paraphrase'
                      toneTextField={true}
                      headerTitle='Summary and Paraphrase'
                      labelsLists={[]}
                      path='/repherase'
                    />
                    <ProductDescription
                      message01=''
                      mainPlaceholder='Cold Email'
                      inputLimitation={inputList}
                      productType='21'
                      productUrl='generate'
                      generateButtonName='Compose'
                      toneTextField={true}
                      headerTitle='Cold Email Template'
                      labelsLists={[]}
                      path='/cold-email'
                    />
                    <ProductDescription
                      message01=''
                      mainPlaceholder='Thank You Email'
                      inputLimitation={inputList}
                      productType='22'
                      productUrl='generate'
                      generateButtonName='Compose'
                      toneTextField={true}
                      headerTitle='Thank You Email'
                      labelsLists={[]}
                      path='/thanks-you-email'
                    />
                    <ProductDescription
                      message01=''
                      mainPlaceholder='Thank You Email'
                      inputLimitation={inputList}
                      productType='22'
                      productUrl='generate'
                      generateButtonName='Compose'
                      toneTextField={true}
                      headerTitle='Thank You Email'
                      labelsLists={[]}
                      path='/thanks-you-email'
                    />
                    <ProductDescription
                      message01='Describe the reasons why you want to reach out and how the customer can contact you.'
                      mainPlaceholder='Describe the reasons why you want to reach out and how the customer can contact you.'
                      inputLimitation={inputList}
                      productType='23'
                      productUrl='generate'
                      generateButtonName='Compose'
                      toneTextField={true}
                      headerTitle='Prospecting email'
                      labelsLists={[]}
                      path='/prospecting-email'
                    />
                    <ProductDescription
                      message01=''
                      mainPlaceholder='Followup Email'
                      inputLimitation={inputList}
                      productType='37'
                      productUrl='generate'
                      generateButtonName='Compose'
                      toneTextField={true}
                      headerTitle='Followup Email'
                      labelsLists={[]}
                      path='/followup-email'
                    />
                    <ProductDescription
                      message01=''
                      mainPlaceholder='Blog Post Intro'
                      inputLimitation={inputList}
                      productType='24'
                      productUrl='generate'
                      generateButtonName='Compose'
                      toneTextField={true}
                      headerTitle='Blog Post Intro'
                      labelsLists={[]}
                      path='/blog-post-intro'
                    />
                    <ProductDescription
                      message01=''
                      mainPlaceholder='Blog Post Ideas'
                      inputLimitation={inputList}
                      productType='39'
                      productUrl='generate'
                      generateButtonName='Compose'
                      toneTextField={true}
                      headerTitle='Blog Post Ideas'
                      labelsLists={[]}
                      path='/blog-post-ideas'
                    />

                    <ProductDescription
                      message01=''
                      mainPlaceholder='Blog Post Conclusion'
                      inputLimitation={inputList}
                      productType='27'
                      productUrl='generate'
                      generateButtonName='Compose'
                      toneTextField={true}
                      headerTitle='Blog Post Conclusion'
                      labelsLists={[]}
                      path='/blog-post-conclusion'
                    />
                    <ProductDescription
                      message01=''
                      mainPlaceholder='Blog Post Summary'
                      inputLimitation={inputList}
                      productType='26'
                      productUrl='generate'
                      generateButtonName='Compose'
                      toneTextField={true}
                      headerTitle='Blog Post Summary'
                      labelsLists={[]}
                      path='/blog-post-summary'
                    />
                    <ProductDescription
                      message01=''
                      mainPlaceholder='Blog Post AIDA'
                      inputLimitation={inputList}
                      productType='25'
                      productUrl='generate'
                      generateButtonName='Compose'
                      toneTextField={true}
                      headerTitle='Blog Post AIDA'
                      labelsLists={[]}
                      path='/blog-post-aida'
                    />
                    <ProductDescription
                      message01=''
                      mainPlaceholder='Blog Post PAS'
                      inputLimitation={inputList}
                      productType='38'
                      productUrl='generate'
                      generateButtonName='Compose'
                      toneTextField={true}
                      headerTitle='Blog Post PAS'
                      labelsLists={[]}
                      path='/blog-post-pas'
                    />
                    <ProductDescription
                      message01=''
                      mainPlaceholder='Blog Post Headline'
                      inputLimitation={inputList}
                      productType='28'
                      productUrl='generate'
                      generateButtonName='Compose'
                      toneTextField={true}
                      headerTitle='Blog Post Headline'
                      labelsLists={[]}
                      path='/blog-post-headline'
                    />
                    <ProductDescription
                      message01=''
                      mainPlaceholder='Landing Page Headline Description'
                      inputLimitation={inputList}
                      productType='29'
                      productUrl='generate'
                      generateButtonName='Compose'
                      toneTextField={true}
                      headerTitle='Landing Page Headline & Headline Description'
                      labelsLists={[]}
                      path='/landing-page-headline-description'
                    />
                    <ProductDescription
                      message01=''
                      mainPlaceholder='landing-page-headline'
                      inputLimitation={inputList}
                      productType='30'
                      productUrl='generate'
                      generateButtonName='Compose'
                      toneTextField={true}
                      headerTitle='landing-page-headline'
                      labelsLists={[]}
                      path='/landing-page-headline'
                    />
                    <ProductDescription
                      message01=''
                      mainPlaceholder='meta-descriptions'
                      inputLimitation={inputList}
                      productType='31'
                      productUrl='generate'
                      generateButtonName='Compose'
                      toneTextField={true}
                      headerTitle='meta-descriptions'
                      labelsLists={[]}
                      path='/meta-descriptions'
                    />
                    <ProductDescription
                      message01=''
                      mainPlaceholder='question-generator'
                      inputLimitation={inputList}
                      productType='32'
                      productUrl='generate'
                      generateButtonName='Compose'
                      toneTextField={false}
                      headerTitle='question-generator'
                      labelsLists={[]}
                      path='/question-generator'
                    />
                    <ProductDescription
                      message01=''
                      mainPlaceholder='subject-finder'
                      inputLimitation={inputList}
                      productType='33'
                      productUrl='generate'
                      generateButtonName='Compose'
                      toneTextField={false}
                      headerTitle='subject-finder'
                      labelsLists={[]}
                      path='/subject-finder'
                    />
                    <ProductDescription
                      message01=''
                      mainPlaceholder='subject-finder'
                      inputLimitation={inputList}
                      productType='34'
                      productUrl='generate'
                      generateButtonName='Compose'
                      toneTextField={false}
                      headerTitle='keyword-related'
                      labelsLists={[]}
                      path='/keyword-finder'
                    />
                    <ProductDescription
                      message01=''
                      mainPlaceholder='Good English'
                      inputLimitation={inputList}
                      productType='35'
                      productUrl='generate'
                      generateButtonName='Compose'
                      toneTextField={false}
                      headerTitle='Good English'
                      labelsLists={[]}
                      path='/grammar'
                    />
                    <ProductDescription
                      message01=''
                      mainPlaceholder='sub-headers'
                      inputLimitation={inputList}
                      productType='36'
                      productUrl='generate'
                      generateButtonName='Compose'
                      toneTextField={false}
                      headerTitle='sub-headers'
                      labelsLists={[]}
                      path='/sub-headers'
                    />
                    <AccountManage path='/profile' />
                  </Router>
                </Container>
              </Box>
            </Box>
          </SnackbarProvider>
          {/* </CacheProvider> */}
        </IntlProvider>
      </AppContext.Provider>
    );
  }
}
