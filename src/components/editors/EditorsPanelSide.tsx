import React from "react";
import Box from "@mui/material/Box";
import ChildText from "./RightSideEditor";
import Card from "@mui/material/Card";
import RightSideEditor from "./RightSideEditor";

const EditorsPanelSide = ({ editor, editor2, editor3, editor4 }) => {
  return (
    <Card elevation={1} sx={{ width: "100%" }}>
      <RightSideEditor
        mainEditor={editor}
        correspondedEditor={editor2}
        storageName='content22'
      />
      <RightSideEditor
        mainEditor={editor}
        correspondedEditor={editor3}
        storageName='content33'
      />
      <RightSideEditor
        mainEditor={editor}
        correspondedEditor={editor4}
        storageName='content44'
      />
    </Card>
  );
};

export default EditorsPanelSide;
