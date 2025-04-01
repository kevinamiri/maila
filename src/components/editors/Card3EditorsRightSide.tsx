import React from "react";
import Box from "@mui/material/Box";
import ChildText from "./ChildText";
import Card from "@mui/material/Card";

const Card3EditorsRightSide = ({ editor, editor2, editor3, editor4 }) => {
  return (
    <Card elevation={1} sx={{ width: "100%" }}>
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
    </Card>
  );
};

export default Card3EditorsRightSide;
