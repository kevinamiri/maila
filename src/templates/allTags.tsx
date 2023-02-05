import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import { getCurrentLangKey } from "../langfile";
import LayoutTag from "../components/layout/LayoutTag";
import AllTagsPageTemplate from "../components/homepage/AllTagsPageTemplate";
import { Box } from "@mui/material";

const AllTagsPage = (props) => {
  console.log(props);
  const url = props.location.pathname;
  const { langs, defaultLangKey } = props.data.site.siteMetadata.languages;
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  return (
    <LayoutTag data={props.data} location={props.location}>
      <Box>
        <AllTagsPageTemplate
          allBlogTags={props.data.tags.group}
          langKey={langKey}
        />
      </Box>
    </LayoutTag>
  );
};

AllTagsPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AllTagsPage;

export const pageQuery = graphql`
  query AllTagsPageQuery($id: String!, $lang: String!) {
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
    tags: allMarkdownRemark(
      filter: {
        fields: { langKey: { eq: $lang } }
        frontmatter: { templateKey: { eq: "blog-body" } }
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
