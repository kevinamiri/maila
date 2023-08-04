import React from "react";
import Footer from "../../components/landings/Footer";
import SEO from "../../components/SEO/SEO";
import TopBar from "../../components/TopBar";
import { getCurrentLangKey, getLangs, getUrlForLang } from "../../langfile";
import { IntlProvider } from "react-intl";
import { getSrc } from "gatsby-plugin-image";
import Box from "@mui/material/Box";
import useSettings from "../../hooks/useSettings";

const Layout = (props) => {
  const data = props.data;
  const location = props.location;
  const isBlogPost = props.isBlogPost;
  const imageSrc =
    props.data.markdownRemark.frontmatter.image &&
    getSrc(props.data.markdownRemark.frontmatter.image);
  const frontmatter = props.data.markdownRemark.frontmatter;
  const siteTitle = props.data.site.siteMetadata.title;
  const url = location.pathname;
  const { langs, defaultLangKey } = props.data.site.siteMetadata.languages;
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  const homeLink = `/${langKey}/`;
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url));

  const { settings, saveSettings } = useSettings();
  const handleChange = (field, value) => {
    saveSettings({
      ...settings,
      [field]: value,
    });
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

  const i18nMessages = require(`../../data/messages/${langKey || settings.lang
    }`);

  const imageStatus = imageSrc ? true : false;

  return (
    <>
      <SEO
        frontmatter={frontmatter}
        postImage={imageStatus && imageSrc}
        langKey={langKey}
        isBlogPost={isBlogPost ? true : false}
      />
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
          <TopBar title='maila.ai' icon='logo' />
          {props.children}
          <Footer langKey={langKey} langs={langsMenu} />
        </Box>
      </IntlProvider>
    </>
  );
};

export default Layout;
