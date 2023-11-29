import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/Layout";
import BlogPostTemplate from "../components/homepage/BlogPostTemplate";

const BlogPost = (props) => {
  const data = props.data;
  const location = props.location;
  const { markdownRemark: post } = data;
  return (
    <Layout data={data} location={location} isBlogPost>
      <BlogPostTemplate
        content={post.html}
        image={post.frontmatter.image}
        description={post.frontmatter.description}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        date={post.frontmatter.date}
        lang={post.frontmatter.lang}
      />
    </Layout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query ProductToolsByID($id: String!) {
    site {
      siteMetadata {
        title
        languages {
          langs
          defaultLangKey
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
