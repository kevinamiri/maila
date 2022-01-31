import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/layout/Layout";
import BlogRoll from "../components/homepage/BlogRoll";
import SEO from "../components/SEO/SEO";
import { FormattedMessage } from "react-intl";
import { graphql } from "gatsby";
import { Box, Grid } from '@mui/material'

const BlogIndexPage = (props) => {
  const data = props.data;
  const location = props.location;
  const jsonData = data.allArticlesJson.edges[0].node.articles;
  return (
    <Layout data={data} jsonData={jsonData} location={location}>
      <SEO frontmatter={data.markdownRemark.frontmatter} />
      <Box >
        <Grid container
          direction='row'
          justifyContent='center'
          alignItems='center' >
          <Grid item xs={11}>
            <Box sx={{
              mt: 3,
            }}>
              <FormattedMessage id='B01' />
            </Box>
            <BlogRoll />
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}

export default BlogIndexPage

BlogIndexPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export const pageQuery = graphql`
  query BlogIndex($id: String!) {
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
            fa
            zh
            sv
            de
          }
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        id
        date
        title
        description
        tags
        lang
      }
    }
  }
`;
