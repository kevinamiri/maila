import React, { useEffect, useState } from "react";
import { IntlProvider } from "react-intl";
import { Box } from "@mui/material";
import { getSrc } from "gatsby-plugin-image";

import Footer from "../landings/Footer";
import TopBar from "../TopBar";
import { getCurrentLangKey, getLangs, getUrlForLang } from "../../langfile";
import useSettings from "../../hooks/use-settings";
import { Head as SEOHead } from "../../components/SEO/head";
import { Settings } from "contexts/settings-context";

// Types
interface StaticPageLayoutProps {
  data: {
    markdownRemark: {
      frontmatter: {
        image?: any;
        [key: string]: any;
      };
    };
    site: {
      siteMetadata: {
        title: string;
        languages: {
          langs: string[];
          defaultLangKey: string;
        };
      };
    };
  };
  location: {
    pathname: string;
  };
  isBlogPost?: boolean;
  children: React.ReactNode;
}

const getValues = (settings: Settings) => ({
  direction: settings.direction,
  responsiveFontSizes: settings.responsiveFontSizes,
  lang: settings.lang,
  theme: settings.theme,
});

const StaticPageLayout: React.FC<StaticPageLayoutProps> = ({
  data,
  location,
  isBlogPost,
  children,
}) => {
  const { settings, saveSettings } = useSettings();
  const [values, setValues] = useState(getValues(settings));

  const {
    site: {
      siteMetadata: {
        languages: { langs, defaultLangKey },
      },
    },
  } = data;

  const url = location.pathname;
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  const homeLink = `/${langKey}/`;
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url));

  const handleLanguageDirection = (lang: string, dir: "ltr" | "rtl") => {
    const newValues = { ...values, lang, direction: dir };
    setValues(newValues);
    saveSettings(newValues);
  };

  const handleChangeLanguage = (lang: string) => {
    const direction = ["ar", "he"].includes(lang) ? "rtl" : "ltr";
    handleLanguageDirection(lang, direction);
  };

  useEffect(() => {
    handleChangeLanguage(langKey);
  }, [langKey]);

  const i18nMessages = require(`../../data/messages/${langKey || settings.lang}`);

  return (
    <IntlProvider
      locale={langKey}
      messages={i18nMessages}
      textComponent={React.Fragment}
    >
      <Box sx={{ backgroundColor: (theme) => theme.palette.background.default }}>
        <TopBar title="maila.ai" icon="maila.ai" />
        {children}
        <Footer langKey={langKey} langs={langsMenu} />
      </Box>
    </IntlProvider>
  );
};

export default StaticPageLayout;

export const Head: React.FC<StaticPageLayoutProps> = (props) => <SEOHead {...props} />;

// Unused code (kept for reference)
/*
const imageSrc = props.data.markdownRemark.frontmatter?.image && getSrc(props.data.markdownRemark.frontmatter.image);
const frontmatter = props.data.markdownRemark.frontmatter;
const siteTitle = props.data.site.siteMetadata.title;
const imageStatus = imageSrc ? true : false;
*/