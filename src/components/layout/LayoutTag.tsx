import React, { useState, useEffect } from "react";
import Footer from "../landings/Footer";
import Helmet from "react-helmet";
import TopBar from "../TopBar";
import { getCurrentLangKey, getLangs, getUrlForLang } from "../../langfile";
import { IntlProvider } from "react-intl";
import { Box } from "@mui/material";
import useSettings from "../../hooks/useSettings";

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
