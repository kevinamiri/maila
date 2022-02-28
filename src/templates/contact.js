import * as React from "react";
import { graphql } from "gatsby";
import HomeLayout from "../components/HomeLayout";
import ContactMe from "../components/homepage/ContactMe";
import { getCurrentLangKey } from "../langfile";
import useSettings from "../hooks/useSettings";

// markup
const IndexPage = (props) => {
  const data = props.data;
  const jsonData = data.articles.edges[0].node.articles;
  const location = props.location;
  const url = location.pathname;
  const { langs, defaultLangKey } = data.site.siteMetadata.languages;
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  const languages = data.site.siteMetadata.languages;
  const id = data.markdownRemark.frontmatter.id;
  const description = data.markdownRemark.frontmatter.description;
  const title = data.markdownRemark.frontmatter.title;
  const date = data.markdownRemark.frontmatter.date;
  const { settings, saveSettings } = useSettings();
  const handleChange = (field, value) => {

    saveSettings({
      ...settings,
      [field]: value,
    });
  };

  React.useEffect(() => {
    (langKey === "sv") ? handleChange("lang", "sv") :
      (langKey === "no") ? handleChange("lang", "no") :
        (langKey === "fi") ? handleChange("lang", "fi") :
          (langKey === "da") ? handleChange("lang", "da") :
            handleChange("lang", "en")
  }, [])
  return (
    <main>
      <HomeLayout
        title={title}
        jsonData={jsonData}
        languages={languages}
        location={location}
        id={id}
        description={description}
      >
        {date}
        <title>{title}</title>
        <ContactMe langkey={langKey} />
      </HomeLayout>
    </main>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query contactPageQuery($id: String!) {
    site {
      siteMetadata {
        title
        siteUrl
        description
        languages {
          defaultLangKey
          langs
        }
      }
    }
    articles: allArticlesJson(filter: { title: { eq: "home" } }) {
      edges {
        node {
          articles {
            en
            sv
          }
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        date
        description
        id
        lang
        slug
        tags
        title
      }
      html
    }
  }
`;
