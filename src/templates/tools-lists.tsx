import React from "react";
import Layout from "../components/layout/Layout";
import BlogLists from "../components/homepage/blog-lists";
import { graphql } from "gatsby";

const BlogListsPage = (props) => {
  const data = props.data;
  const location = props.location;
  return (
    <Layout data={data} location={location}>
      <BlogLists data={data} />
    </Layout>
  );
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
        frontmatter: { templateKey: { eq: "tools-body" } }
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
        description
        date
        tags
        lang
      }
    }
  }
`;
