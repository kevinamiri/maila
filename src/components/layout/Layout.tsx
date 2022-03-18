import React, { useState, useEffect } from "react";
import Footer from "../../components/landings/Footer";
import SEO from "../../components/SEO/SEO";
import Helmet from "react-helmet";
import TopBar from "../../components/TopBar";
import { getCurrentLangKey, getLangs, getUrlForLang } from "../../langfile";
import { IntlProvider } from "react-intl";
import GlobalStyles from "../../components/GlobalStyles";
// import { shouldPolyfill } from "@formatjs/intl-relativetimeformat/should-polyfill";
import { getSrc } from "gatsby-plugin-image";
import { Box } from "@mui/material";
import useSettings from "../../hooks/useSettings";

const Layout = (props) => {
  const data = props.data;
  const location = props.location;
  const imageSrc =
    props.data.markdownRemark.frontmatter.image &&
    getSrc(props.data.markdownRemark.frontmatter.image);
  const frontmatter = props.data.markdownRemark.frontmatter;
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
    // polyfill(value);
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

  const i18nMessages = require(`../../data/messages/${
    langKey || settings.lang
  }`);

  const imageStatus = imageSrc ? true : false;

  return (
    <>
      <Helmet
        key='app-head'
        defaultTitle={frontmatter.title}
        titleTemplate={`%s | ${frontmatter.title}`}
      >
        <html lang={langKey} />
        <meta name='description' content={frontmatter.description} />
      </Helmet>
      <SEO
        postData={data}
        postImage={imageStatus && imageSrc}
        langKey={langKey}
      />
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
          <TopBar title='maila.ai' icon='logo' />
          {props.children}
          <Footer langKey={langKey} langs={langsMenu} />
        </Box>
      </IntlProvider>
    </>
  );
};

export default Layout;
