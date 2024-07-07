import React, { memo } from "react";
import PropTypes from "prop-types";
import TagList from "../components/landings/modules/TagList";
import { graphql } from "gatsby";
import Layout from "../components/layout/Layout";
import Content from "../components/homepage/Content";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ContactMe from "components/homepage/ContactMe";

const AboutPageTemplate = ({ content, contentComponent: PageContent = Content, tags, langKey }) => (
  <Box sx={{ mt: 8 }}>
    <Container sx={{ mt: 5 }}>
      <PageContent content={content} />
      <TagList tags={tags} langKey={langKey} />
    </Container>
  </Box>
);

AboutPageTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  tags: PropTypes.array,
  langKey: PropTypes.string,
};

const AboutPage = ({ data, location }) => {
  const { markdownRemark, allArticlesJson } = data;
  const jsonData = allArticlesJson.edges[0].node.articles;
  const langKey = markdownRemark.frontmatter.lang;

  return (
    <Layout data={data} jsonData={jsonData} location={location}>
      <Container>
        <ContactMe langkey={langKey} />
      </Container>
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
    allArticlesJson: PropTypes.object,
  }).isRequired,
  location: PropTypes.object.isRequired,
};

export default memo(AboutPage);

export const pageQuery = graphql`
  query AboutPageQuery($id: String!) {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
    allArticlesJson(filter: { title: { eq: "home" } }) {
      edges {
        node {
          articles {
            en
            sv
            da
            no
            fi
          }
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        id
        title
        description
        tags
        lang
      }
      fields {
        slug
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