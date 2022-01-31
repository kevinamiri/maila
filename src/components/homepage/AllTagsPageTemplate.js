import React from "react";
import PropTypes from "prop-types";
import kebabCase from "lodash/kebabCase";
import { FormattedMessage } from "react-intl";
import Helmet from "react-helmet";
import { Box, Chip, Badge, Typography } from '@mui/material'
import LabelRoundedIcon from '@mui/icons-material/LabelRounded';


const AllTagsPageTemplate = ({ allBlogTags, langKey }) => {
  return (
    <Box sx={{
      pt: 10,
      pb: 2,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: "center",
    }}>
      <Box sx={{
        display: 'flex',
        p: 2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: "center",
      }}>
        <FormattedMessage id='tags'>
          {(txt, index) => (
            <>
              <Helmet key={Math.random + index}
                title={txt[0]}
                meta={[{ name: "description", content: txt }]}
              />
              <Chip sx={{
                m: 1,
                alignSelf: 'center'
              }} size="small" key={Math.random + index + index} label={txt[0]} color="primary" />
            </>
          )}
        </FormattedMessage>
        <Typography variant="subtitle1" color="primary" component="p">
          <FormattedMessage id='tags.blog.intro'></FormattedMessage>
        </Typography>
      </Box>
      <Box sx={{
        p: 2
      }}>
        {allBlogTags.map((tag, i) => (
          <Badge key={Math.random + i + 23} badgeContent={tag.totalCount} color="info">
            <Chip sx={{
              m: 1,
            }} size="small" key={Math.random + i + i} icon={<LabelRoundedIcon />} label={tag.fieldValue} color="primary" component="a" href={`/${langKey}/tags/${kebabCase(tag.fieldValue)}/`} clickable />
          </Badge>
        ))}
      </Box>
    </Box>
  );
};

AllTagsPageTemplate.propTypes = {
  data: PropTypes.object,
};

export default AllTagsPageTemplate;
