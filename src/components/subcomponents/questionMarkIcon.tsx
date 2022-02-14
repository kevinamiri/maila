import React from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import HelpTwoToneIcon from "@mui/icons-material/HelpTwoTone";

export default function QuestionMarkIcon({ title }) {
  return (
    <Tooltip title={title} placement='top-end' arrow>
      <IconButton
        size='small'
        color='default'
        sx={{
          border: 0,
          p: 0.5,
          "&:hover": {
            backgroundColor: "background.primary",
          },
        }}
        component='span'
      >
        <HelpTwoToneIcon fontSize='small' />
      </IconButton>
    </Tooltip>
  );
}
