import React from "react";
import Footer from "../landings/Footer";
import Helmet from "react-helmet";
import TopBar from "../TopBar";
import { getCurrentLangKey, getLangs, getUrlForLang } from "../../langfile";
import { IntlProvider } from "react-intl";
import Box from "@mui/material/Box";
import useSettings from "../../hooks/useSettings";




const getValues = (settings) => ({
  direction: settings.direction,
  responsiveFontSizes: settings.responsiveFontSizes,
  lang: settings.lang,
  theme: settings.theme,
});


const LayoutTag = (props) => {
  const data = props.data;
  const description = props.data.markdownRemark.frontmatter.description;
  const title = props.data.markdownRemark.frontmatter.title;
  const url = props.location.pathname;
  const { langs, defaultLangKey } = props.data.site.siteMetadata.languages;
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  const homeLink = `/${langKey}/`;
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url));
  const { settings, saveSettings } = useSettings();
  const [values, setValues] = React.useState(getValues(settings));

  const handleLanguageDirection = (lang, dir) => {
    setValues({
      ...values,
      lang: lang,
      direction: dir,
    });
    saveSettings({
      ...values,
      lang: lang,
      direction: dir,
    });
  };


  const handleChangeLanguage = (lang): void => {
    switch (lang) {
      case "sv":
        handleLanguageDirection("sv", "ltr");
        break;
      case "no":
        handleLanguageDirection("no", "ltr");
        break;
      case "fi":
        handleLanguageDirection("ar", "ltr");
        break;
      case "dk":
        handleLanguageDirection("tr", "ltr");
        break;
      case "en":
        handleLanguageDirection("en", "ltr");
        break;
      default:
        handleLanguageDirection("en", "ltr");
    }
  };

  React.useEffect(() => {
    handleChangeLanguage(langKey);
  }, [langKey]);

  const i18nMessages = require(`../../data/messages/${langKey || settings.lang
    }`);

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
          <TopBar title='Home' icon='logo' />
          {props.children}
          <Footer langKey={langKey} langs={langsMenu} />
        </Box>
      </IntlProvider>
    </>
  );
};

export default LayoutTag;
