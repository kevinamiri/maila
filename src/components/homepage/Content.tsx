import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const HTMLContent = ({ content }) => (
  <Box
    sx={{
      fontSize: 14,
      p: 2,
      fontWeight: 400,
    }}
    dangerouslySetInnerHTML={{ __html: content }}
  />
);

const Content = ({ content }) => (
  <Box
    sx={{
      p: 2,
    }}
  >
    <Typography variant='body1' color='initial'>
      {content}
    </Typography>
  </Box>
);

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
};

HTMLContent.propTypes = Content.propTypes;

export default Content;
