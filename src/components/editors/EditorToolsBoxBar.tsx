import React from "react";
import Box from "@mui/material/Box";
import RestorePageIcon from "@mui/icons-material/RestorePage";
import TextRotationAngleupIcon from "@mui/icons-material/TextRotationAngleup";
import ShortTextIcon from "@mui/icons-material/ShortText";
import BarToggleButton from "components/editors/BarToggleButton";
// import LongMenu from "./LongMenu";
import SpellcheckIcon from "@mui/icons-material/Spellcheck";
import SaveIcon from "@mui/icons-material/Save";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import LoadingButton from "@mui/lab/LoadingButton";
import Play from "components/subcomponents/Play";
const EditorToolsBoxBar = ({
  handleClarify,
  handleSimplify,
  handleAdvancify,
  handleSpellcheck,
}) => {
  const { progressValue } = useSelector((state) => state.progressValue);
  const loading = progressValue > 0 && progressValue < 100;
  return (
    <>
      <Box
        sx={{
          marginLeft: "auto",
          display: "flex",
          flexWrap: "wrap",
          boxSizing: "border-box",
          justifyContent: "start",
        }}
      >
        {loading && <CircularProgress style={{ padding: "10px" }} />}
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
        <Play />
      </Box>
    </>
  );
};

export default EditorToolsBoxBar;
