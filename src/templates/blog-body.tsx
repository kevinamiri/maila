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
        {...post.frontmatter}
        content={post.html}
      />
    </Layout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
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
        path
        tags
        lang
        imageAlt
        imageStatus
      }
    }
  }
`;


import { SEO } from "../components/SEO/SEO";


export const Head = (props) => {
  const { data } = props;
  const { markdownRemark: post } = data;
  return (
  <SEO title={post.frontmatter.title} description={post.frontmatter.description} pathname={post.frontmatter.path}>
    <meta name="description" content={post.frontmatter.description} />
  </SEO>
  )
}