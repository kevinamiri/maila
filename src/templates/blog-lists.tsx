import React from "react";
import Layout from "../components/layout/Layout";
import BlogLists from "../components/homepage/blog-lists";
import { graphql } from "gatsby";
import PropTypes from "prop-types";

const BlogListsPage = ({ data, location }) => (
  <Layout data={data} location={location}>
    <BlogLists data={data} />
  </Layout>
);

BlogListsPage.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default BlogListsPage;

export const pageQuery = graphql`
  query BlogRollQuery($id: String, $lang: String) {
    site {
      siteMetadata {
        title
        languages {
          langs
          defaultLangKey
        }
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: {
        frontmatter: { templateKey: { eq: "blog-body" } }
        fields: { langKey: { eq: $lang } }
      }
    ) {
      edges {
        node {
          excerpt(pruneLength: 300)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date
            lang
            image {
              childImageSharp {
                gatsbyImageData(width: 500, layout: CONSTRAINED)
              }
            }
            tags
          }
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        id
        title
        image {
          childImageSharp {
            gatsbyImageData(width: 800, layout: CONSTRAINED)
          }
        }
        description
        date
        tags
        lang
      }
    }
  }
`;
