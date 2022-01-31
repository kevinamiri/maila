import React from "react";
import { Box, Card, CardContent } from "@mui/material";
import Container from "@mui/material/Container";
import "../../../configureAmplify";
// import PasswordResetAmplify from "../../components/authentication/password-reset/PasswordResetAmplify";
// import PasswordRecoveryAmplify from "../../components/authentication/password-recovery/PasswordRecoveryAmplify";
// import RegisterAmplify from "../../components/authentication/register/RegisterAmplify";
// import LoginAmplify from "../../components/authentication/login/LoginAmplify";
// import VerifyCodeAmplify from "../../components/authentication/verify-code/VerifyCodeAmplify";
import Helmet from "react-helmet";
import { getCurrentLangKey, getLangs, getUrlForLang } from "../../langfile";
import { IntlProvider } from "react-intl";
import AppContext from "../../contexts/AppContext";
import { shouldPolyfill } from "@formatjs/intl-relativetimeformat/should-polyfill";
import {
  getIdJsonUrl,
  startPath,
  check_path,
  setLangsMenu,
} from "../../utils/LangAddon";
import { SnackbarProvider } from "notistack";

const AuthenticationLayout = (props) => {
  // const { stateLanguage } = React.useContext(AppContext);
  // const i18nMessages = require(`../../data/messages/${stateLanguage}`);

  // const description = props.data.markdownRemark.frontmatter.description;
  // const jsonData = props.jsonData;
  // const location = props.location;
  // const title = props.data.markdownRemark.frontmatter.title;
  // const url = location.pathname;
  // const { langs, defaultLangKey } = props.data.site.siteMetadata.languages;
  // const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  // const homeLink = `/${langKey}/`;
  // const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url));
  // const id_article = props.data.markdownRemark.frontmatter.id;
  // const id = Number(id_article) - 1;
  // const basename = check_path(langKey, url, id, jsonData);
  // var basePath = startPath(langKey, langsMenu, basename[0], url);
  // //finally here we set the desired url...
  // setLangsMenu(langsMenu, basename[1], basePath, jsonData);
  // const [langKeyM, setLangKeyM] = React.useState(langKey);
  // const [theDirection, setTheDirection] = React.useState(false);

  // const handleLang = (langKey) => {
  //   if (langKey != langKeyM) {
  //     setLangKeyM(langKey);
  //     polyfill(langKey);
  //   }
  // };

  // async function polyfill(locale) {
  //   if (shouldPolyfill()) {
  //     // Load the polyfill 1st BEFORE loading data
  //     await import("@formatjs/intl-relativetimeformat/polyfill");
  //   }

  //   if (Intl.RelativeTimeFormat.polyfilled) {
  //     switch (locale) {
  //       default:
  //         await import("@formatjs/intl-relativetimeformat/locale-data/en");
  //         break;
  //       case "fa":
  //         await import("@formatjs/intl-relativetimeformat/locale-data/fa");
  //         break;
  //     }
  //   }
  // }

  // React.useEffect(() => {
  //   handleLang;
  // });

  return (
    <>
      {/* <Helmet
        key='app-head'
        defaultTitle={title}
        titleTemplate={`%s | ${title}`}
      >
        <html lang={langKey} />
        <meta name='description' content={description} />
      </Helmet>
      <IntlProvider
        locale={langKey}
        messages={i18nMessages}
        textComponent={React.Fragment}
      > */}
      <SnackbarProvider maxSnack={3}>
        <Box
          sx={{
            backgroundColor: "background.default",
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Container maxWidth='sm' sx={{ py: "80px" }}>
            <Card>
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  p: 4,
                }}
              >
                {props.children}
              </CardContent>
            </Card>
          </Container>
        </Box>
      </SnackbarProvider>
    </>
  );
};

export default AuthenticationLayout;
