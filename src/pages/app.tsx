import React, { useContext, useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import { navigate } from "gatsby";
import { Helmet } from "react-helmet";
import { FormattedMessage, IntlProvider } from "react-intl";
import "../../configureAmplify";
import {
  ProductDescriptionTool,
  ProductTaglineTool,
  AdsGoogleTool,
} from "../components/ProductTools";
import AppContext from "../contexts/AppContext";
import SignIn from "../components/SignIn";
import TopBar from "../components/TopBar";
import DrawerSideBar from "../components/DrawerSideBar";
import Container from "@mui/material/Container";
import PrivateRoute from "../components/layout/PrivateRoute";
import ProductDescription from "../components/editors/ProductDescription";
import AccountManage from "../components/AccountManage";
import { styled } from "@mui/material/styles";
// @refresh reset
import { Router } from "@reach/router";
import { useLocation } from "@reach/router";
import Box from "@mui/material/Box";
import SearchBox from "../components/subcomponents/searchBox";
import useSettings from "../hooks/useSettings";
import { useSnackbar } from "notistack";
// import CssBaseline from "@mui/material/CssBaseline";
// import { QuickStats } from "../components/QuickStats";
import LangSettingsDials from "../components/subcomponents/LangSettingsDials";

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

const getValues = (settings) => ({
  direction: settings.direction,
  responsiveFontSizes: settings.responsiveFontSizes,
  theme: settings.theme,
  lang: settings.lang,
});

const isNew = (str, text) => {
  return str.toLowerCase().includes(text.toLowerCase());
};
export default function App() {
  const appContext = useContext(AppContext);
  const [context, setContext] = useState(appContext);
  const { settings, saveSettings } = useSettings();
  const location = useLocation();
  const { enqueueSnackbar } = useSnackbar();
  /**
   * why state? When the component receives updates, the result is displayed immediately, otherwise we can use ref.
   */
  const [values, setValues] = React.useState(getValues(settings));
  const i18nMessages = require(`../data/messages/${values.lang}`);

  // ................ handle UI lang change ...............
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
  // ################### Handling User auth contexts #########

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
              uilang={<LangSettingsDials changeLanguage={changeLanguage} />}
            />
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
                <Router basepath='/app'>
                  <PrivateRoute path='/profile' component={AccountManage} />
                  {/* <PrivateRoute
                      path='/productdescription'
                      component={ProductDescriptionApp}
                      /> */}
                  <ProductDescriptionTool
                    label={<FormattedMessage id='L12319' />}
                    headerTitle={<FormattedMessage id='T09819' />}
                    description={<FormattedMessage id='D76519' />}
                    example={<FormattedMessage id='E56719' />}
                    instructHelp={<FormattedMessage id='H43219' />}
                    generateButtonName={<FormattedMessage id='N78919' />}
                    inputLimitation={inputList}
                    productType='4'
                    productUrl='generate'
                    toneTextField={true}
                    path='/productdescription'
                  />
                  <AdsGoogleTool
                    message01=''
                    label={<FormattedMessage id='L12330' />}
                    headerTitle={<FormattedMessage id='T09830' />}
                    description={<FormattedMessage id='D76530' />}
                    example={<FormattedMessage id='E56730' />}
                    instructHelp={<FormattedMessage id='H43230' />}
                    generateButtonName={<FormattedMessage id='N78930' />}
                    inputLimitation={inputList}
                    productType='6'
                    productUrl='generate'
                    toneTextField={true}
                    path='/g-ad-title'
                  />
                  <AdsGoogleTool
                    message01=''
                    label={<FormattedMessage id='L12331' />}
                    headerTitle={<FormattedMessage id='T09831' />}
                    description={<FormattedMessage id='D76531' />}
                    example={<FormattedMessage id='E56731' />}
                    instructHelp={<FormattedMessage id='H43231' />}
                    generateButtonName={<FormattedMessage id='N78931' />}
                    inputLimitation={inputList}
                    productType='9'
                    productUrl='generate'
                    toneTextField={true}
                    path='/g-ad-description'
                  />
                  <ProductTaglineTool
                    message01=''
                    mainPlaceholder={<FormattedMessage id='TG03' />}
                    inputLimitation={inputList}
                    productType='10'
                    productUrl='generate'
                    generateButtonName={<FormattedMessage id='TG03' />}
                    toneTextField={true}
                    headerTitle='Tagline'
                    path='/tagline'
                  />

                  <ProductDescription
                    label={<FormattedMessage id='L1230' />}
                    headerTitle={<FormattedMessage id='T0980' />}
                    description={<FormattedMessage id='D7650' />}
                    example={<FormattedMessage id='E5670' />}
                    instructHelp={<FormattedMessage id='H4320' />}
                    generateButtonName={<FormattedMessage id='N7890' />}
                    productType='24'
                    path='/blog-post-intro'
                    toneTextField={true}
                    labelsLists={[]}
                  />
                  <ProductDescription
                    label={<FormattedMessage id='L1231' />}
                    headerTitle={<FormattedMessage id='T0981' />}
                    description={<FormattedMessage id='D7651' />}
                    example={<FormattedMessage id='E5671' />}
                    instructHelp={<FormattedMessage id='H4321' />}
                    generateButtonName={<FormattedMessage id='N7891' />}
                    productType='27'
                    path='/blog-post-conclusion'
                    toneTextField={true}
                    labelsLists={[]}
                  />
                  <ProductDescription
                    label={<FormattedMessage id='L1233' />}
                    headerTitle={<FormattedMessage id='T0983' />}
                    description={<FormattedMessage id='D7653' />}
                    example={<FormattedMessage id='E5673' />}
                    instructHelp={<FormattedMessage id='H4323' />}
                    generateButtonName={<FormattedMessage id='N7893' />}
                    productType='39'
                    path='/blog-post-ideas'
                    toneTextField={true}
                    labelsLists={[]}
                  />
                  <ProductDescription
                    label={<FormattedMessage id='L1234' />}
                    headerTitle={<FormattedMessage id='T0984' />}
                    description={<FormattedMessage id='D7654' />}
                    example={<FormattedMessage id='E5674' />}
                    instructHelp={<FormattedMessage id='H4324' />}
                    generateButtonName={<FormattedMessage id='N7894' />}
                    productType='28'
                    path='/blog-post-headline'
                    toneTextField={true}
                    labelsLists={[]}
                  />
                  <ProductDescription
                    label={<FormattedMessage id='L1235' />}
                    headerTitle={<FormattedMessage id='T0985' />}
                    description={<FormattedMessage id='D7655' />}
                    example={<FormattedMessage id='E5675' />}
                    instructHelp={<FormattedMessage id='H4325' />}
                    generateButtonName={<FormattedMessage id='N7895' />}
                    productType='27'
                    path='/blog-post-summary'
                    toneTextField={true}
                    labelsLists={[]}
                  />
                  <ProductDescription
                    label={<FormattedMessage id='L12324' />}
                    headerTitle={<FormattedMessage id='T09824' />}
                    description={<FormattedMessage id='D76524' />}
                    example={<FormattedMessage id='E56724' />}
                    instructHelp={<FormattedMessage id='H43224' />}
                    generateButtonName={<FormattedMessage id='N78924' />}
                    productType='17'
                    path='/paraphrase'
                    toneTextField={true}
                    labelsLists={[]}
                  />
                  <ProductDescription
                    label={<FormattedMessage id='L1237' />}
                    headerTitle={<FormattedMessage id='T0987' />}
                    description={<FormattedMessage id='D7657' />}
                    example={<FormattedMessage id='E5677' />}
                    instructHelp={<FormattedMessage id='H4327' />}
                    generateButtonName={<FormattedMessage id='N7897' />}
                    productType='11'
                    path='/mission-statement'
                    toneTextField={true}
                    labelsLists={[]}
                  />
                  <ProductDescription
                    label={<FormattedMessage id='L1238' />}
                    headerTitle={<FormattedMessage id='T0988' />}
                    description={<FormattedMessage id='D7658' />}
                    example={<FormattedMessage id='E5678' />}
                    instructHelp={<FormattedMessage id='H4328' />}
                    generateButtonName={<FormattedMessage id='N7898' />}
                    productType='12'
                    path='/vision-statement'
                    toneTextField={true}
                    labelsLists={[]}
                  />
                  <ProductDescription
                    label={<FormattedMessage id='L1239' />}
                    headerTitle={<FormattedMessage id='T0989' />}
                    description={<FormattedMessage id='D7659' />}
                    example={<FormattedMessage id='E5679' />}
                    instructHelp={<FormattedMessage id='H4329' />}
                    generateButtonName={<FormattedMessage id='N7899' />}
                    productType='20'
                    path='/value-proposition'
                    toneTextField={true}
                    labelsLists={[]}
                  />
                  <ProductDescription
                    label={<FormattedMessage id='L12310' />}
                    headerTitle={<FormattedMessage id='T09810' />}
                    description={<FormattedMessage id='D76510' />}
                    example={<FormattedMessage id='E56710' />}
                    instructHelp={<FormattedMessage id='H43210' />}
                    generateButtonName={<FormattedMessage id='N78910' />}
                    productType='19'
                    path='/adjust-tone-rewriting'
                    toneTextField={true}
                    labelsLists={[]}
                  />
                  <ProductDescription
                    label={<FormattedMessage id='L12311' />}
                    headerTitle={<FormattedMessage id='T09811' />}
                    description={<FormattedMessage id='D76511' />}
                    example={<FormattedMessage id='E56711' />}
                    instructHelp={<FormattedMessage id='H43211' />}
                    generateButtonName={<FormattedMessage id='N78911' />}
                    productType='41'
                    path='/write-business-friendly-email'
                    toneTextField={true}
                    labelsLists={[]}
                  />
                  <ProductDescription
                    label={<FormattedMessage id='L12312' />}
                    headerTitle={<FormattedMessage id='T09812' />}
                    description={<FormattedMessage id='D76512' />}
                    example={<FormattedMessage id='E56712' />}
                    instructHelp={<FormattedMessage id='H43212' />}
                    generateButtonName={<FormattedMessage id='N78912' />}
                    productType='37'
                    path='/followup-email'
                    toneTextField={true}
                    labelsLists={[]}
                  />
                  <ProductDescription
                    label={<FormattedMessage id='L12313' />}
                    headerTitle={<FormattedMessage id='T09813' />}
                    description={<FormattedMessage id='D76513' />}
                    example={<FormattedMessage id='E56713' />}
                    instructHelp={<FormattedMessage id='H43213' />}
                    generateButtonName={<FormattedMessage id='N78913' />}
                    productType='21'
                    path='/cold-email'
                    toneTextField={true}
                    labelsLists={[]}
                  />
                  <ProductDescription
                    label={<FormattedMessage id='L12314' />}
                    headerTitle={<FormattedMessage id='T09814' />}
                    description={<FormattedMessage id='D76514' />}
                    example={<FormattedMessage id='E56714' />}
                    instructHelp={<FormattedMessage id='H43214' />}
                    generateButtonName={<FormattedMessage id='N78914' />}
                    productType='22'
                    path='/thanks-you-email'
                    toneTextField={true}
                    labelsLists={[]}
                  />
                  <ProductDescription
                    label={<FormattedMessage id='L12315' />}
                    headerTitle={<FormattedMessage id='T09815' />}
                    description={<FormattedMessage id='D76515' />}
                    example={<FormattedMessage id='E56715' />}
                    instructHelp={<FormattedMessage id='H43215' />}
                    generateButtonName={<FormattedMessage id='N78915' />}
                    productType='23'
                    path='/prospecting-email'
                    toneTextField={true}
                    labelsLists={[]}
                  />
                  <ProductDescription
                    label={<FormattedMessage id='L12316' />}
                    headerTitle={<FormattedMessage id='T09816' />}
                    description={<FormattedMessage id='D76516' />}
                    example={<FormattedMessage id='E56716' />}
                    instructHelp={<FormattedMessage id='H43216' />}
                    generateButtonName={<FormattedMessage id='N78916' />}
                    productType='35'
                    path='/grammar'
                    toneTextField={true}
                    labelsLists={[]}
                  />
                  <ProductDescription
                    label={<FormattedMessage id='L12317' />}
                    headerTitle={<FormattedMessage id='T09817' />}
                    description={<FormattedMessage id='D76517' />}
                    example={<FormattedMessage id='E56717' />}
                    instructHelp={<FormattedMessage id='H43217' />}
                    generateButtonName={<FormattedMessage id='N78917' />}
                    productType='14'
                    path='/subject-suggestion'
                    toneTextField={true}
                    labelsLists={[]}
                  />
                  <ProductDescription
                    label={<FormattedMessage id='L12318' />}
                    headerTitle={<FormattedMessage id='T09818' />}
                    description={<FormattedMessage id='D76518' />}
                    example={<FormattedMessage id='E56718' />}
                    instructHelp={<FormattedMessage id='H43218' />}
                    generateButtonName={<FormattedMessage id='N78918' />}
                    productType='31'
                    path='/meta-descriptions'
                    toneTextField={true}
                    labelsLists={[]}
                  />
                  <ProductDescription
                    label={<FormattedMessage id='L12320' />}
                    headerTitle={<FormattedMessage id='T09820' />}
                    description={<FormattedMessage id='D76520' />}
                    example={<FormattedMessage id='E56720' />}
                    instructHelp={<FormattedMessage id='H43220' />}
                    generateButtonName={<FormattedMessage id='N78920' />}
                    productType='4'
                    path='/productdescriptionamazon'
                    toneTextField={true}
                    labelsLists={[]}
                  />
                  <ProductDescription
                    label={<FormattedMessage id='L12321' />}
                    headerTitle={<FormattedMessage id='T09821' />}
                    description={<FormattedMessage id='D76521' />}
                    example={<FormattedMessage id='E56721' />}
                    instructHelp={<FormattedMessage id='H43221' />}
                    generateButtonName={<FormattedMessage id='N78921' />}
                    productType='42'
                    path='/create-outline'
                    toneTextField={true}
                    labelsLists={[]}
                  />
                  <ProductDescription
                    label={<FormattedMessage id='L12322' />}
                    headerTitle={<FormattedMessage id='T09822' />}
                    description={<FormattedMessage id='D76522' />}
                    example={<FormattedMessage id='E56722' />}
                    instructHelp={<FormattedMessage id='H43222' />}
                    generateButtonName={<FormattedMessage id='N78922' />}
                    productType='43'
                    path='/expand'
                    toneTextField={true}
                    labelsLists={[]}
                  />
                  <ProductDescription
                    label={<FormattedMessage id='L12323' />}
                    headerTitle={<FormattedMessage id='T09823' />}
                    description={<FormattedMessage id='D76523' />}
                    example={<FormattedMessage id='E56723' />}
                    instructHelp={<FormattedMessage id='H43223' />}
                    generateButtonName={<FormattedMessage id='N78923' />}
                    productType='34'
                    path='/keyword-finder'
                    toneTextField={true}
                    labelsLists={[]}
                  />
                  <ProductDescription
                    label={<FormattedMessage id='L12325' />}
                    headerTitle={<FormattedMessage id='T09825' />}
                    description={<FormattedMessage id='D76525' />}
                    example={<FormattedMessage id='E56725' />}
                    instructHelp={<FormattedMessage id='H43225' />}
                    generateButtonName={<FormattedMessage id='N78925' />}
                    productType='32'
                    path='/question-generator'
                    toneTextField={true}
                    labelsLists={[]}
                  />
                  <ProductDescription
                    label={<FormattedMessage id='L12326' />}
                    headerTitle={<FormattedMessage id='T09826' />}
                    description={<FormattedMessage id='D76526' />}
                    example={<FormattedMessage id='E56726' />}
                    instructHelp={<FormattedMessage id='H43226' />}
                    generateButtonName={<FormattedMessage id='N78926' />}
                    productType='36'
                    path='/sub-headers'
                    toneTextField={true}
                    labelsLists={[]}
                  />
                  <ProductDescription
                    label={<FormattedMessage id='L12327' />}
                    headerTitle={<FormattedMessage id='T09827' />}
                    description={<FormattedMessage id='D76527' />}
                    example={<FormattedMessage id='E56727' />}
                    instructHelp={<FormattedMessage id='H43227' />}
                    generateButtonName={<FormattedMessage id='N78927' />}
                    productType='29'
                    path='/landing-page-headline-description'
                    toneTextField={true}
                    labelsLists={[]}
                  />
                  <ProductDescription
                    label={<FormattedMessage id='L12328' />}
                    headerTitle={<FormattedMessage id='T09828' />}
                    description={<FormattedMessage id='D76528' />}
                    example={<FormattedMessage id='E56728' />}
                    instructHelp={<FormattedMessage id='H43228' />}
                    generateButtonName={<FormattedMessage id='N78928' />}
                    productType='30'
                    path='/landing-page-headline'
                    toneTextField={true}
                    labelsLists={[]}
                  />
                  <ProductDescription
                    label={<FormattedMessage id='L1232' />}
                    headerTitle={<FormattedMessage id='T0982' />}
                    description={<FormattedMessage id='D7652' />}
                    example={<FormattedMessage id='E5672' />}
                    instructHelp={<FormattedMessage id='H4322' />}
                    generateButtonName={<FormattedMessage id='N7892' />}
                    productType='16'
                    path='/blog-post-aida'
                    toneTextField={true}
                    labelsLists={[]}
                  />
                  <ProductDescription
                    label={<FormattedMessage id='L12330' />}
                    headerTitle={<FormattedMessage id='T09830' />}
                    description={<FormattedMessage id='D76530' />}
                    example={<FormattedMessage id='E56730' />}
                    instructHelp={<FormattedMessage id='H43230' />}
                    generateButtonName={<FormattedMessage id='N78930' />}
                    productType='38'
                    path='/blog-post-pas'
                    toneTextField={true}
                    labelsLists={[]}
                  />
                  <ProductDescription
                    label={"questions and answers"}
                    headerTitle={
                      "The fastest way to get probable answers and factual verification to questions that come up when you write."
                    }
                    description={
                      "It can be used to find answers for questions or fact-check content."
                    }
                    example={
                      "AI to brainstorm blog posts meta descriptions tag and be more productive."
                    }
                    instructHelp={
                      "Write a few paragraphs; we'll take it from there to the fact-check or answer to the questions that arise from your text."
                    }
                    generateButtonName={"compose"}
                    productType='44'
                    path='/questions-answers'
                    toneTextField={true}
                    labelsLists={[]}
                  />
                  <ProductDescription
                    label={"suffix"}
                    headerTitle={"suffix"}
                    description={"suffix"}
                    example={"suffix test"}
                    instructHelp={"suffix about product text"}
                    generateButtonName={"suffix about product text"}
                    productType='46'
                    path='/suffix'
                    toneTextField={true}
                    labelsLists={[]}
                  />
                  <AccountManage path='/profile' />
                </Router>
              </Container>
            </Box>
          </Box>
        </IntlProvider>
      </AppContext.Provider>
    );
  }
}
