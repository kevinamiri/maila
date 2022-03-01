import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import { getCurrentLangKey } from "ptz-i18n";
import Layout from "../components/layout/LayoutTag";
import AllTagsPageTemplate from "../components/homepage/AllTagsPageTemplate";
import { Box } from '@mui/material'

const AllTagsPage = (props) => {
  const url = props.location.pathname;
  const { langs, defaultLangKey } = props.data.site.siteMetadata.languages;
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  if (langKey === "en") {
    return (
      <Layout data={props.data} location={props.location}>
        <Box>
          <AllTagsPageTemplate
            allBlogTags={props.data.blogen.group}
            langKey={langKey}
          />
        </Box>
      </Layout>
    );
  } else {
    return (
      <Layout data={props.data} location={props.location}>
        <Box>
          <AllTagsPageTemplate
            allBlogTags={props.data.blogfa.group}
            langKey={langKey}
          />
        </Box>
      </Layout>
    );
  }
};

AllTagsPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AllTagsPage;

export const pageQuery = graphql`
  query AllTagsPageQuery($id: String!) {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        slug
        path
      }
    }
    blogen: allMarkdownRemark(
      filter: {
        fields: { langKey: { eq: "en" } }
        frontmatter: { templateKey: { eq: "blog-post" } }
      }
      limit: 2000
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }

    blogfa: allMarkdownRemark(
      filter: {
        fields: { langKey: { eq: "fa" } }
        frontmatter: { templateKey: { eq: "blog-post" } }
      }
      limit: 2000
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
