import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import LayoutTag from "../components/layout/LayoutTag";
import TagRouteTemplate from "../components/homepage/TagRouteTemplate";
import useSettings from "../hooks/useSettings";

const TagRoute = (props) => {
  const [location, setLocation] = useState({
    pathname: "/en/tags/",
  });

  useEffect(() => {
    setLocation(window.location);
  }, []);

  let data;
  let pageContext;
  if (props.data !== null) {
    data = props.data;
    pageContext = props.pageContext;
  }

  const langKey = data.allMarkdownRemark.edges[0].node.fields.langKey

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
    <LayoutTag data={data} location={location}>
      <TagRouteTemplate
        data={data}
        pageContext={pageContext}
      ></TagRouteTemplate>
    </LayoutTag>
  );
};

export default TagRoute;

export const pageQuery = graphql`
  query TagPage($langKey: String!, $tag: String!) {
    site {
      siteMetadata {
        languages {
          langs
          defaultLangKey
        }
      }
    }
    markdownRemark {
      frontmatter {
        title
        slug
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { templateKey: { ne: "message" }, lang: { eq: $langKey } }
        fields: {
          langKey: { eq: $langKey }
          tagSlugs: { elemMatch: { tag: { eq: $tag } } }
        }
      }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            description
            date
            slug
          }
          fields {
            langKey
            slug
            tagSlugs {
              tag
              link
            }
          }
          excerpt(truncate: true, pruneLength: 100)
        }
      }
    }
  }
`;
