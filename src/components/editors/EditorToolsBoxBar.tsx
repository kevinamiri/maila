import React from "react";
import Box from "@mui/material/Box";
import RestorePageIcon from "@mui/icons-material/RestorePage";
import TextRotationAngleupIcon from "@mui/icons-material/TextRotationAngleup";
import ShortTextIcon from "@mui/icons-material/ShortText";
import BarToggleButton from "components/editors/BarToggleButton";
// import LongMenu from "./LongMenu";
import SpellcheckIcon from "@mui/icons-material/Spellcheck";

const EditorToolsBoxBar = ({
  handleClarify,
  handleSimplify,
  handleAdvancify,
  handleSpellcheck,
}) => {
  return (
    <>
      <Box
        sx={{
          marginLeft: "auto",
          display: "flex",
          flexWrap: "wrap",
          boxSizing: "border-box",
          justifyContent: "end",
        }}
      >
        <BarToggleButton
          format='Clarify'
          icon={<RestorePageIcon />}
          handleClick={handleClarify}
        />
        <BarToggleButton
          format='Simplify'
          icon={<ShortTextIcon />}
          handleClick={handleSimplify}
        />
        <BarToggleButton
          format='Advancify'
          icon={<TextRotationAngleupIcon />}
          handleClick={handleAdvancify}
        />
        <BarToggleButton
          format='Spellcheck'
          icon={<SpellcheckIcon />}
          handleClick={handleSpellcheck}
        />
      </Box>
    </>
  );
};

export default EditorToolsBoxBar;
