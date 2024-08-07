import React, { useEffect } from "react";
import { IntlProvider } from "react-intl";
import { Box } from "@mui/material";
import Footer from "../../components/landings/Footer";
import TopBar from "../../components/TopBar";
import useSettings from "../../hooks/useSettings";
import { getCurrentLangKey, getLangConfig, getLangs, getUrlForLang } from "../../langfile";

// Types
type LayoutProps = {
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
  jsonData?: any;
  isBlogPost?: boolean;
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ data, jsonData, location, children }) => {

  const { settings, saveSettings } = useSettings();
  const { langs, defaultLangKey } = data.site.siteMetadata.languages;



  const langKey = getCurrentLangKey(langs, defaultLangKey, location.pathname);

  useEffect(() => {
    const { lang, direction } = getLangConfig(langKey);
    saveSettings({ ...settings, lang, direction });
  }, [langKey]);


  const i18nMessages = require(`../../data/messages/${settings.lang}`);
  const langsMenu = getLangs(langs, langKey, getUrlForLang(`/${langKey}/`, location.pathname));




  return (
    <IntlProvider locale={langKey} messages={i18nMessages}>
      <Box sx={{ backgroundColor: (theme) => theme.palette.background.default }}>
        <TopBar title="maila.ai" icon="logo" langKey={langKey} langs={langsMenu} />
        {children}
        <Footer langKey={langKey} langs={langsMenu} />
      </Box>
    </IntlProvider>
  );
};

export default Layout;

// SEO component (kept for potential future use)
// import SEO from "../../components/SEO/SEO";
