import React from "react";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

export default function MuiSButton(props) {
  let titlen = props.btntitle;
  return (
    <Tooltip title={titlen} arrow>
      <Button
        size='small'
        color='primary'
        variant='contained'
        component='span'
        {...props}
      >
        {titlen}
      </Button>
    </Tooltip>
  );
}
