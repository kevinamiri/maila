import React from "react";
import { useStaticQuery, graphql } from "gatsby";

export const useToolsProducts = () => {
  const lang = useStaticQuery(
    graphql`
      query UseProducts {
        en: allMarkdownRemark(
          filter: {
            frontmatter: {
              templateKey: { eq: "tools-body" }
              lang: { eq: "en" }
            }
          }
        ) {
          edges {
            node {
              frontmatter {
                title
                description
                header
                usage
                id
                placeholder
                help_hint
                tags
                date
                slug
                lang
                product_type
                url
                jsonId
                icon
              }
            }
          }
        }
        sv: allMarkdownRemark(
          filter: {
            frontmatter: {
              templateKey: { eq: "tools-body" }
              lang: { eq: "sv" }
            }
          }
        ) {
          edges {
            node {
              frontmatter {
                title
                description
                header
                usage
                id
                placeholder
                help_hint
                tags
                date
                slug
                lang
                product_type
                url
                jsonId
                icon
              }
            }
          }
        }
        da: allMarkdownRemark(
          filter: {
            frontmatter: {
              templateKey: { eq: "tools-body" }
              lang: { eq: "da" }
            }
          }
        ) {
          edges {
            node {
              frontmatter {
                title
                description
                header
                usage
                id
                placeholder
                help_hint
                tags
                date
                slug
                lang
                product_type
                url
                jsonId
                icon
              }
            }
          }
        }
        fi: allMarkdownRemark(
          filter: {
            frontmatter: {
              templateKey: { eq: "tools-body" }
              lang: { eq: "fi" }
            }
          }
        ) {
          edges {
            node {
              frontmatter {
                title
                description
                header
                usage
                id
                placeholder
                help_hint
                tags
                date
                slug
                lang
                product_type
                url
                jsonId
                icon
              }
            }
          }
        }
      }
    `
  );
  return lang;
};

export default useToolsProducts;
