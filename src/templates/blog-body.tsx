import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/Layout";
import BlogPostTemplate from "../components/homepage/BlogPostTemplate";

const BlogPost = (props) => {
  const data = props.data;
  const { markdownRemark: post } = data;
  return (
    <Layout data={data} location={location} isBlogPost>
      <BlogPostTemplate
        content={post.html}
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
    allArticlesJson(filter: { title: { eq: "home" } }) {
      edges {
        node {
          articles {
            en
            no
            fi
            sv
            da
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
