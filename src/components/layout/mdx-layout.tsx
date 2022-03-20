import React from "react";
import Footer from "../landings/Footer";
import SEO from "../SEO/SEO";
import TopBar from "../TopBar";
import { getCurrentLangKey, getLangs, getUrlForLang } from "../../langfile";
import { IntlProvider } from "react-intl";
import GlobalStyles from "../GlobalStyles";
import { getSrc } from "gatsby-plugin-image";
import useSettings from "../../hooks/useSettings";
import TagList from "../landings/modules/TagList";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import { StaticQuery, graphql } from "gatsby";
import Time from "../../components/homepage/Time";

const Layout = (props) => {
  const frontmatter = props.pageContext.frontmatter;
  console.log(props);
  const location = props.location;
  const isBlogPost = props.isBlogPost;
  const imageSrc =
    props.pageContext.frontmatter.image &&
    getSrc(props.pageContext.frontmatter.image);

  const url = props.location.pathname;
  const langKey = props.pageContext.langKey;

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
      <IntlProvider
        locale={langKey}
        messages={i18nMessages}
        textComponent={React.Fragment}
      >
        <StaticQuery
          query={graphql`
            query MyQuery {
              allMdx {
                edges {
                  node {
                    excerpt
                    id
                    tableOfContents
                  }
                }
              }
              site {
                siteMetadata {
                  languages {
                    defaultLangKey
                    langs
                  }
                  title
                  description
                }
              }
            }
          `}
          render={(data) => {
            console.log(data);

            const { langs, defaultLangKey } = data.site.siteMetadata.languages;
            const langKey = getCurrentLangKey(langs, defaultLangKey, url);
            const homeLink = `/${langKey}/`;
            const langsMenu = getLangs(
              langs,
              langKey,
              getUrlForLang(homeLink, url)
            );
            return (
              <>
                <SEO
                  frontmatter={frontmatter}
                  postImage={imageStatus && imageSrc}
                  langKey={langKey}
                  isBlogPost={isBlogPost ? true : false}
                />

                <Box
                  sx={{
                    backgroundColor: "background.paper",
                  }}
                >
                  <GlobalStyles />
                  <TopBar title='maila.ai' icon='logo' />
                  <Container
                    sx={{
                      minHeight: "100%",
                      mt: 8,
                    }}
                    maxWidth='lg'
                    component='section'
                  >
                    <Grid container spacing={3}>
                      <Grid item xs={12} sx={{ my: 4 }}>
                        <Time date={frontmatter.date} />
                        <Typography
                          variant='body1'
                          component='div'
                          sx={{
                            backgroundColor: "background.paper",
                            borderRadius: 8,
                            my: 4,
                            p: 5,
                          }}
                        />
                        {props.children}
                      </Grid>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItem: "flex-start",
                          flexWrap: "wrap",
                          mb: 5,
                        }}
                      >
                        <TagList
                          tags={frontmatter.tags}
                          langKey={frontmatter.lang}
                        />
                      </Box>
                    </Grid>
                  </Container>

                  <Footer langKey={langKey} langs={langsMenu} />
                </Box>
              </>
            );
          }}
        />
      </IntlProvider>
    </>
  );
};

export default Layout;
