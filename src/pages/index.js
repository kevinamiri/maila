import React from "react";
import { graphql, navigate, withPrefix } from "gatsby";
import getUserLangKey from "../langfile/getUserLangKey";
import useSettings from "../hooks/useSettings";


const RedirectIndex = ({ data }) => {
  const { settings, saveSettings } = useSettings();
  const handleChange = (field, value) => {
    saveSettings({
      ...settings,
      [field]: value,
    });
  };
  // Skip build, Browsers only
  if (typeof window !== "undefined") {
    const { langs, defaultLangKey } = data.site.siteMetadata.languages;
    const langKey = getUserLangKey(langs, defaultLangKey);
    if (settings.lang === langKey) {
      const homeUrl = withPrefix(`/${langKey}/`);
      navigate(homeUrl);
    }
    else {
      const homeLanguage = withPrefix(`/${settings.lang}/`);
      navigate(homeLanguage);
    }

  }
  return <div />;
};


export default RedirectIndex;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
  }
`;
