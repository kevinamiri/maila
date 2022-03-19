import React from "react";
import { graphql } from "gatsby";
import LayoutTag from "../components/layout/LayoutTag";
import TagRouteTemplate from "../components/homepage/TagRouteTemplate";

const TagRoute = (props) => {
  const data = props.data;
  const pageContext = props.pageContext;
  return (
    <LayoutTag data={data} location={props.location}>
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
