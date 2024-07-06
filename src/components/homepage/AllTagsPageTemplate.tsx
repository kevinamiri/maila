import React from "react";
import PropTypes from "prop-types";
import kebabCase from "lodash/kebabCase";
import { Box, Chip, Typography } from "@mui/material";
import LabelRoundedIcon from "@mui/icons-material/LabelRounded";
import AccessibleLink from "components/Link";


const AllTagsPageTemplate = ({ allBlogTags, langKey }) => {
  return (
    <Box
      sx={{
        pt: 10,
        pb: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          p: 2,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant='h3' color='primary' component='h1'>
          All Tags
        </Typography>
        <Box
          sx={{
            p: 2,
          }}
        >
          {allBlogTags.map((tag, i) => (
            <AccessibleLink
              key={i}
              to={`/${langKey}/tags/${kebabCase(tag.fieldValue)}/`}
              sx={{
                borderBottom: "none",
                textDecoration: "none",
                "&:hover": {
                  borderBottom: "none",
                  textDecoration: "none",
                },
              }}
            >
              <Chip
                sx={{
                  m: 1,
                }}
                icon={<LabelRoundedIcon color='success' />}
                label={tag.fieldValue}
                color='success'
                size='small'
                clickable
              />
            </AccessibleLink>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

AllTagsPageTemplate.propTypes = {
  allBlogTags: PropTypes.arrayOf(
    PropTypes.shape({
      fieldValue: PropTypes.string.isRequired,
    })
  ).isRequired,
  langKey: PropTypes.string.isRequired,
};

export default AllTagsPageTemplate;
