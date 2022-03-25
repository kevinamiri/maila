import * as React from "react";
import SelectionTransformerBar from "./SelectionTransformerBar";
import Box from "@mui/material/Box";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { useSelector } from "react-redux";
import Portal from "@mui/material/Portal";

export default function HoveringToolbar(props) {
  const { selectedTextValue } = useSelector((state) => state.editorParams);
  const selectionStatus =
    selectedTextValue &&
    selectedTextValue.length > 2 &&
    selectedTextValue.length < 1000
      ? true
      : false;

  const handleClickAway = () => {
    console.log("Clicked");
  };

  const editor = props.editor;
  const editor2 = props.editor2;
  const editor3 = props.editor3;
  const editor4 = props.editor4;

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box sx={{ position: "relative" }}>
        {selectionStatus ? (
          <Portal>
            <Box
              sx={{
                position: "fixed",
                width: 210,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                border: (theme) => `1px solid ${theme.palette.divider}`,
                transition: "opacity 0.75s",
                borderRadius: 1,
                p: 1,
                bgcolor: "background.paper",
              }}
            >
              <SelectionTransformerBar
                editor={editor}
                editor2={editor2}
                editor3={editor3}
                editor4={editor4}
              />
            </Box>
          </Portal>
        ) : null}
      </Box>
    </ClickAwayListener>
  );
}
