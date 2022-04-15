import React from "react";
import { useStaticQuery, graphql } from "gatsby";

export const useToolsProducts = () => {
  const lang = useStaticQuery(
    graphql`
      query UseProducts {
        en: allMdx(filter: { frontmatter: { lang: { eq: "en" } } }) {
          edges {
            node {
              frontmatter {
                description
                header
                help_hint
                placeholder
                usage
                id
                slug
                icon
                tags
                title
                url
                product_type
                jsonId
              }
            }
          }
        }
        sv: allMdx(filter: { frontmatter: { lang: { eq: "sv" } } }) {
          edges {
            node {
              frontmatter {
                description
                header
                help_hint
                placeholder
                usage
                id
                slug
                icon
                tags
                title
                url
                product_type
                jsonId
              }
            }
          }
        }
        da: allMdx(filter: { frontmatter: { lang: { eq: "da" } } }) {
          edges {
            node {
              frontmatter {
                description
                header
                help_hint
                placeholder
                usage
                id
                slug
                icon
                tags
                title
                url
                product_type
                jsonId
              }
            }
          }
        }
        fi: allMdx(filter: { frontmatter: { lang: { eq: "fi" } } }) {
          edges {
            node {
              frontmatter {
                description
                header
                help_hint
                placeholder
                usage
                id
                slug
                icon
                tags
                title
                url
                product_type
                jsonId
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
