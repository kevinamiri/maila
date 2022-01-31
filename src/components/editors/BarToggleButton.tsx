import React from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { useSelector } from "react-redux";

export default function BarToggleButton({ format, icon, handleClick }) {
  const { selectedTextValue } = useSelector((state) => state.editorParams);
  const selectionStatus = selectedTextValue.length > 2 ? false : true;
  return (
    <IconButton
      size='small'
      color='primary'
      sx={{
        border: 0,
        p: 0.5,
        mr: 0.5,
        "&.Mui-disabled": {
          border: 0,
          mr: 0.5,
        },
      }}
      component='span'
      disabled={selectionStatus}
      onClick={handleClick}
    >
      <Tooltip title={format} arrow>
        {icon}
      </Tooltip>
    </IconButton>
  );
}
