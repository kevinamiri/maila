import * as React from "react";
import { graphql } from "gatsby";
import StaticPageLayout from "../components/layout/static-page-layout";
import ContactMe from "../components/homepage/ContactMe";
import { getCurrentLangKey } from "../langfile";

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

  return (
    <main>
      <StaticPageLayout
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
      </StaticPageLayout>
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
