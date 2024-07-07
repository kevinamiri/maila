import React, { useState, useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import { Box } from '@mui/material';

import Footer from '../landings/Footer';
import TopBar from '../TopBar';
import useSettings from '../../hooks/useSettings';
import { getCurrentLangKey, getLangs, getUrlForLang } from '../../langfile';


interface LayoutTagProps {
  data: {
    markdownRemark: {
      frontmatter: {
        description: string;
        title: string;
      };
    };
    site: {
      siteMetadata: {
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
  children: React.ReactNode;
}

const LayoutTag: React.FC<LayoutTagProps> = ({ data, location, children }) => {
  const { description, title } = data.markdownRemark.frontmatter;
  const { langs, defaultLangKey } = data.site.siteMetadata.languages;
  const url = location.pathname;
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  const homeLink = `/${langKey}/`;
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url));

  const { settings, saveSettings } = useSettings();
  const [values, setValues] = useState(settings);


  const handleLanguageChange = (lang: string) => {
    const direction: "rtl" | "ltr" = ["ar", "he", "fa"].includes(lang) ? "rtl" : "ltr";
    const newValues = { ...values, lang, direction };
    setValues(newValues);
    saveSettings(newValues);
  };

  
  useEffect(() => {
    handleLanguageChange(langKey);
  }, [langKey]);

  // 🔄 Load language messages
  const i18nMessages = React.useMemo(() => {
    try {
      return require(`../../data/messages/${values.lang}`);
    } catch (error) {
      console.error(`Failed to load messages for ${values.lang}`, error);
      return require(`../../data/messages/en`); // Fallback to English
    }
  }, [values.lang]);

  return (
    <>
      <IntlProvider
        locale={langKey}
        messages={i18nMessages}
        textComponent={React.Fragment}
      >
        <Box sx={{ backgroundColor: 'background.paper' }}>
          <TopBar title='Home' icon='logo' />
          {children}
          <Footer langKey={langKey} langs={langsMenu} />
        </Box>
      </IntlProvider>
    </>
  );
};

export default LayoutTag;

// 📝 Usage example:
// <LayoutTag data={pageData} location={locationObject}>
//   <YourPageContent />
// </LayoutTag>