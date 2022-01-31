import React, { useState, useEffect } from "react";
import Footer from "../../components/landings/Footer";
import Helmet from "react-helmet";
import TopBar from "../../components/TopBar";
import { getCurrentLangKey, getLangs, getUrlForLang } from "../../langfile";
import { IntlProvider } from "react-intl";
import AppContext from "../../contexts/AppContext";
import GlobalStyles from "../../components/GlobalStyles";
import { shouldPolyfill } from "@formatjs/intl-relativetimeformat/should-polyfill";
import { SettingsButton } from "../../components/SettingsButton";
import {
  getIdJsonUrl,
  startPath,
  check_path,
  setLangsMenu,
} from "../../utils/LangAddon";
import { Box } from "@mui/material";

const Layout = (props) => {
  const { stateLanguage } = React.useContext(AppContext);
  const i18nMessages = require(`../../data/messages/${stateLanguage}`);

  const description = props.data.markdownRemark.frontmatter.description;
  const jsonData = props.jsonData;
  const location = props.location;
  const title = props.data.markdownRemark.frontmatter.title;
  const url = location.pathname;
  const { langs, defaultLangKey } = props.data.site.siteMetadata.languages;
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  const homeLink = `/${langKey}/`;
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url));
  const id_article = props.data.markdownRemark.frontmatter.id;
  const id = Number(id_article) - 1;
  const basename = check_path(langKey, url, id, jsonData);
  var basePath = startPath(langKey, langsMenu, basename[0], url);
  //finally here we set the desired url...
  setLangsMenu(langsMenu, basename[1], basePath, jsonData);
  const [langKeyM, setLangKeyM] = useState(langKey);
  const [theDirection, setTheDirection] = useState(false);

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
        case "fa":
          await import("@formatjs/intl-relativetimeformat/locale-data/fa");
          break;
      }
    }
  }

  useEffect(() => {
    handleLang;
  }, []);

  return (
    <>
      <Helmet
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
      >
        <Box
          sx={{
            backgroundColor: "background.paper",
          }}
        >
          <GlobalStyles />
          {/* <SettingsDrawer /> */}
          <SettingsButton langs={langsMenu} />
          <TopBar title='maila.ai' icon='logo' />
          {props.children}
          <Footer langKey={langKey} langs={langsMenu} />
        </Box>
      </IntlProvider>
    </>
  );
};

export default Layout;
