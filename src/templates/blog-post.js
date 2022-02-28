import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import SEO from "../components/SEO/SEO";
import { graphql } from "gatsby";
import Layout from "../components/layout/Layout";
import { HTMLContent } from "../components/homepage/Content";
import BlogPostTemplate from "../components/homepage/BlogPostTemplate";


const BlogPost = ({ data, location }) => {
  const { markdownRemark: post } = data;
  const jsonData = data.allArticlesJson.edges[0].node.articles;
  const langKey = post.frontmatter.lang;

  return (
    <Layout
      data={data}
      jsonData={jsonData}
      location={location}
    >
      <SEO frontmatter={post.frontmatter} isBlogPost />
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate='%s | maila.ai'>
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name='description'
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        dateOfPost={post.frontmatter.date}
        langKey={langKey}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlogPost;

export const pageQuery = graphql`query BlogPostByID($id: String!) {
  site {
    siteMetadata {
      title
      languages {
        langs
        defaultLangKey
      }
    }
  }
  allArticlesJson(filter: {title: {eq: "home"}}) {
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
  markdownRemark(id: {eq: $id}) {
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
