import React from "react";
import { useStaticQuery, graphql } from "gatsby";

export const useToolsPathes = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query UseToolPaths {
        allMarkdownRemark(
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
                url
              }
            }
          }
        }
      }
    `
  );
  return allMarkdownRemark.edges;
};

export default useToolsPathes;
