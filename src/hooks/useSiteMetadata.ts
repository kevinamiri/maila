import React from "react";
import { useStaticQuery, graphql } from "gatsby";

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            siteUrl
            description
            image
            author { name }
            organization { name url logo }
          }
        }
      }
    `
  );
  return site.siteMetadata;
};

export default useSiteMetadata;


