import React from "react";
import Footer from "../landings/Footer";
import TopBar from "../TopBar";
import { Helmet } from "react-helmet";

import { getCurrentLangKey, getLangs, getUrlForLang } from "../../langfile";
import { IntlProvider } from "react-intl";
import { shouldPolyfill } from "@formatjs/intl-relativetimeformat/should-polyfill";
import { startPath, check_path, setLangsMenu } from "../../utils/LangAddon";
import Box from "@mui/material/Box";
import useSettings from "../../hooks/useSettings";

const StaticPageLayout = (props) => {
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
  const i18nMessages = require(`../../data/messages/${langKey}`);

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

  const { settings, saveSettings } = useSettings();
  const handleChange = (field, value) => {
    saveSettings({
      ...settings,
      [field]: value,
    });
    polyfill(value);
  };

  React.useEffect(() => {
    langKey === "sv"
      ? handleChange("lang", "sv")
      : langKey === "no"
        ? handleChange("lang", "no")
        : langKey === "fi"
          ? handleChange("lang", "fi")
          : langKey === "da"
            ? handleChange("lang", "da")
            : handleChange("lang", "en");
  }, []);

  return (
    <>
      <Helmet key='app-head' defaultTitle={title} titleTemplate={`%s | Maila`}>
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
            backgroundColor: (theme) => theme.palette.background.default,
          }}
        >
          <TopBar title={`maila.ai`} icon={`maila.ai`} />
          {props.children}
          <Footer langKey={langKey} langs={langsMenu} />
        </Box>
      </IntlProvider>
    </>
  );
};

export default StaticPageLayout;
