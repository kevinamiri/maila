import React from "react";
import Box from "@mui/material/Box";
import ChildText from "./ChildText";

const Card3EditorsRightSide = ({ editor, editor2, editor3, editor4 }) => {
  return (
    <Box>
      <ChildText
        mainEditor={editor}
        correspondedEditor={editor2}
        storageName='content22'
      />
      <ChildText
        mainEditor={editor}
        correspondedEditor={editor3}
        storageName='content33'
      />
      <ChildText
        mainEditor={editor}
        correspondedEditor={editor4}
        storageName='content44'
      />
    </Box>
  );
};

export default Card3EditorsRightSide;
