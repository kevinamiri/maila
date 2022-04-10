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
                tags
                title
                url
                productType
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
                id
                slug
                tags
                title
                url
                productType
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
