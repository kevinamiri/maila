import React from "react";
import { useStaticQuery, graphql } from "gatsby";

export const useToolsPathes = () => {
  const { allMdx } = useStaticQuery(
    graphql`
      query UseToolPaths {
        allMdx {
          totalCount
          edges {
            node {
              frontmatter {
                url
                title
              }
            }
          }
        }
      }
    `
  );
  return allMdx.edges;
};

export default useToolsPathes;
