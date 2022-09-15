import React from "react";
import Box from "@mui/material/Box";
import ShortTextIcon from "@mui/icons-material/ShortText";
import BarToggleButton from "components/editors/BarToggleButton";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import BallotOutlinedIcon from "@mui/icons-material/BallotOutlined";
import LiveHelpOutlinedIcon from "@mui/icons-material/LiveHelpOutlined";
// import LongMenu from "./LongMenu";
import SpellcheckIcon from "@mui/icons-material/Spellcheck";
import { FormalStyle, RephraseParaphrase, SummaryRephrase } from "icons/Icons";
// import CircularProgress from "@mui/material/CircularProgress";
// import LoadingButton from "@mui/lab/LoadingButton";
// import Play from "components/subcomponents/Play";
const EditorToolsBoxBar = ({
  handleSpellcheck,
  handleAdvancify,
  handleSimplify,
  handleRephrase,
  handleKeyPoints,
  handleElegantify,
  handleQuestions,
}) => {
  return (
    <>
      <Box
        sx={{
          marginLeft: "auto",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          boxSizing: "border-box",
          justifyContent: "start",
        }}
      >
        <BarToggleButton
          format='Turining into Key Points'
          icon={<BallotOutlinedIcon fontSize='small' />}
          handleClick={handleKeyPoints}
        />
        <BarToggleButton
          format='Simplifying'
          icon={<ShortTextIcon fontSize='small' />}
          handleClick={handleSimplify}
        />
        <BarToggleButton
          format='To Formal Style'
          icon={
            <FormalStyle
              viewBox='0 0 64 64'
              height='24'
              width='24'
              fontSize='small'
            />
          }
          handleClick={handleAdvancify}
        />
        <BarToggleButton
          format='Enhancing'
          icon={<AutoAwesomeRoundedIcon fontSize='small' />}
          handleClick={handleElegantify}
        />
        <BarToggleButton
          format='Rephrase'
          icon={
            <RephraseParaphrase
              viewBox='0 0 24 24'
              height='24'
              width='24'
              fontSize='small'
            />
          }
          handleClick={handleRephrase}
        />
        <BarToggleButton
          format='Turning into Questions'
          icon={<LiveHelpOutlinedIcon fontSize='small' />}
          handleClick={handleQuestions}
        />
        <BarToggleButton
          format='Grammar Check'
          icon={<SpellcheckIcon fontSize='small' />}
          handleClick={handleSpellcheck}
        />
      </Box>
    </>
  );
};

export default EditorToolsBoxBar;
