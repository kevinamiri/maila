import React from "react";
import Arrow from "../subcomponents/Arrow";
import { Grid, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import { Editor, Node as SlateNode } from "slate";
import RedoIcon from "@mui/icons-material/Redo";
import UndoIcon from "@mui/icons-material/Undo";
import ToggleButtonList from "../subcomponents/ToggleButtonList";
import CopyToClipboard from "../subcomponents/CopyToClipboard";
import { serialize } from "hooks/currentSelectEditor";

const TotalCharacters = styled("div")(({ theme }) => ({
  padding: "0.1em 0.1rem",
  color: theme.palette.primary.main,
  fontSize: "80%",
  maxHeight: "24px",
  fontWeight: 600,
  textAlign: "center",
  borderRadius: "10%",
}));

interface footerEditorBarProps {
  editor: Editor;
  handleTranser?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

export const FooterEditorBar = ({
  editor,
  handleTranser,
  disabled = false,
}: footerEditorBarProps) => {
  console.log("FooterEditorBar");
  return (
    <>
      <Divider
        orientation='horizontal'
        component='hr'
        variant='fullWidth'
        sx={{
          width: "100%",
          marginTop: "1.5rem",
        }}
      />
      <Grid item xs={11} container direction='row' alignItems='flex-end'>
        {disabled ? "" : <Arrow onClick={handleTranser} />}
        <CopyToClipboard editor={editor} />
      </Grid>
      <Grid
        item
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          maxHeight: "20px",
        }}
        xs={1}
      >
        <ToggleButtonList
          title='Undo'
          icon={<UndoIcon fontSize='inherit' />}
          onClick={(event) => {
            // event.preventDefault();
            editor.undo();
          }}
          disabled={editor.history.undos.length == 0}
        />
        <ToggleButtonList
          title='Redo'
          icon={<RedoIcon fontSize='inherit' />}
          onClick={(event) => {
            event.preventDefault();
            editor.redo();
          }}
          disabled={editor.history.redos.length == 0}
        />
        <ToggleButtonList
          title='Number of Characters'
          icon={
            <Typography
              sx={{
                mb: 0,
              }}
              variant='caption'
              display='block'
              gutterBottom
            >
              <TotalCharacters>{serialize(editor).length}</TotalCharacters>
            </Typography>
          }
        />
      </Grid>
    </>
  );
};

export default FooterEditorBar;
