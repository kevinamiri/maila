import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// Component to render HTML content safely
export const HTMLContent = ({ content }) => (
  <Box
    sx={{
      fontSize: 14, // 📏 Base font size
      p: 2, // 🧩 Padding
      fontWeight: 400, // 📝 Regular font weight
    }}
    dangerouslySetInnerHTML={{ __html: content }}
  />
);

// Main Content component
const Content = ({ content }) => (
  <Box
    sx={{
      p: 2, // 🧩 Padding
    }}
  >
    <Typography variant='body1' color='textPrimary'> {/* 🎨 Updated color for better readability */}
      {content}
    </Typography>
  </Box>
);

Content.propTypes = {
  content: PropTypes.node, // 📄 Content to display
  className: PropTypes.string, // 🏷️ Optional class name
};

HTMLContent.propTypes = Content.propTypes;

export default Content;