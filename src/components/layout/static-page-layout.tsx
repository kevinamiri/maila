import React from "react";
import Footer from "../landings/Footer";
import TopBar from "../TopBar";
import { getCurrentLangKey, getLangs, getUrlForLang } from "../../langfile";
import { IntlProvider } from "react-intl";
import Box from "@mui/material/Box";
import useSettings from "../../hooks/use-settings"
import { getSrc } from "gatsby-plugin-image";
import { Head as SEOHead } from "../../components/SEO/head";

const getValues = (settings) => ({
  direction: settings.direction,
  responsiveFontSizes: settings.responsiveFontSizes,
  lang: settings.lang,
  theme: settings.theme,
});

const StaticPageLayout = (props) => {
  const data = props.data;
  const location = props.location;
  const isBlogPost = props.isBlogPost;
  const imageSrc =
    props.data.markdownRemark.frontmatter?.image &&
    getSrc(props.data.markdownRemark.frontmatter.image);
  const frontmatter = props.data.markdownRemark.frontmatter;
  const siteTitle = props.data.site.siteMetadata.title;
  const url = location.pathname;
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
  const imageStatus = imageSrc ? true : false;
  return (
    <>
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
          <TopBar title={"maila.ai"} icon={"maila.ai"} />
          {props.children}
          <Footer langKey={langKey} langs={langsMenu} />
        </Box>
      </IntlProvider>
    </>
  );
};

export default StaticPageLayout;

export const Head = (props) => {
  return <SEOHead {...props} />;
};
