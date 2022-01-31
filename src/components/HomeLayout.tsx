import React from "react";
import Footer from "./landings/Footer";
import TopBar from "../components/TopBar";
import { Helmet } from "react-helmet";

import { getCurrentLangKey, getLangs, getUrlForLang } from "../langfile";
import { IntlProvider } from "react-intl";
// import GlobalStyles from "../../components/GlobalStyles";
import { shouldPolyfill } from "@formatjs/intl-relativetimeformat/should-polyfill";
import {
  getIdJsonUrl,
  startPath,
  check_path,
  setLangsMenu,
} from "../utils/LangAddon";
import { Box } from "@mui/material";

// interface HomeLayoutProps {
//   children?: React.ReactNode;
//   description?: string;
//   title?: string;
//   footerLabels?: FooterLabelsobject;
// }

const HomeLayout = (props) => {
  const description = props.description;
  const jsonData = props.jsonData;
  const location = props.location;
  const title = props.title;
  const url = location.pathname;
  const { langs, defaultLangKey } = props.languages;
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  const homeLink = `/${langKey}/`;
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url));
  const idArticle = props.id;
  const id = Number(idArticle) - 1;
  const basename = check_path(langKey, url, id, jsonData);
  var basePath = startPath(langKey, langsMenu, basename[0], url);
  //finally here we set the desired url...
  setLangsMenu(langsMenu, basename[1], basePath, jsonData);
  const [langKeyM, setLangKeyM] = React.useState(langKey);
  const i18nMessages = require(`../data/messages/${langKey}`);
  // const [theDirection, setTheDirection] = React.useState(false);
  const handleLang = (langKey) => {
    if (langKey != langKeyM) {
      setLangKeyM(langKey);
      polyfill(langKey);
    }
  };

  async function polyfill(locale) {
    if (shouldPolyfill()) {
      // Load the polyfill 1st BEFORE loading data
      await import("@formatjs/intl-relativetimeformat/polyfill");
    }

    if (Intl.RelativeTimeFormat.polyfilled) {
      switch (locale) {
        default:
          await import("@formatjs/intl-relativetimeformat/locale-data/en");
          break;
        case "zh":
          await import("@formatjs/intl-relativetimeformat/locale-data/zh");
          break;
      }
    }
  }

  React.useEffect(() => {
    handleLang(langKey);
  }, []);
  return (
    <>
      <Helmet
        key='app-head'
        defaultTitle={title}
        titleTemplate={`%s | QuoteWikia`}
      >
        {/* General tags */}
        <title>{title}</title>
        <meta name='description' content={description} />
        <html lang='en' />
      </Helmet>
      <IntlProvider
        locale={langKey}
        messages={i18nMessages}
        textComponent={React.Fragment}
      >
        <Box
          sx={{
            backgroundColor: "background.default",
          }}
        >
          <TopBar
            // langKey={langKey}
            langs={langsMenu}
            title={`maila.ai`}
            icon={`maila.ai`}
          />
          {props.children}
          {/* <Footer footerLabels={footerLabels} /> */}
          <Footer langKey={langKey} langs={langsMenu} />
        </Box>
      </IntlProvider>
    </>
  );
};

export default HomeLayout;
