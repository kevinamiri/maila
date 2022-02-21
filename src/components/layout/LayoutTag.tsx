import React, { useState, useEffect } from "react";
import Footer from "../landings/Footer";
import Helmet from "react-helmet";
import TopBar from "../TopBar";
import { getCurrentLangKey, getLangs, getUrlForLang } from "../../langfile";
import { IntlProvider } from "react-intl";
import AppContext from "../../contexts/AppContext";
import { shouldPolyfill } from "@formatjs/intl-relativetimeformat/should-polyfill";
import { Box } from "@mui/material";
import { SettingsButton } from "../../components/SettingsButton";

const LayoutTag = (props) => {
  const { stateLanguage } = React.useContext(AppContext);
  const data = props.data;
  const description = props.data.markdownRemark.frontmatter.description;
  const title = props.data.markdownRemark.frontmatter.title;
  const url = props.location.pathname;
  const { langs, defaultLangKey } = props.data.site.siteMetadata.languages;
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  const homeLink = `/${langKey}/`;
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url));
  const i18nMessages = require(`../../data/messages/${
    langKey || stateLanguage
  }`);
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
        case "sv":
          await import("@formatjs/intl-relativetimeformat/locale-data/sv");
          break;
      }
    }
  }

  useEffect(() => {
    handleLang;
    if (langKey === "en") {
      setTheDirection(false);
    } else if (langKey === "sv") {
      setTheDirection(true);
    } else if (langKey === "zh") {
      setTheDirection(false);
    }
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
          <SettingsButton langs={langsMenu} />
          <TopBar langs={langsMenu} title='Home' icon='logo' />
          {props.children}
          <Footer langKey={langKey} langs={langsMenu} />
        </Box>
      </IntlProvider>
    </>
  );
};

export default LayoutTag;
