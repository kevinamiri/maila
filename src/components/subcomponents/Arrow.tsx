import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import useMediaQuery from "@mui/material/useMediaQuery";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ToggleButtonList from "./ToggleButtonList";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

export default function Arrow(props) {
  return (
    <ToggleButtonList
      title='Replacement'
      {...props}
      ariaLabel={"copy the all texts in the box"}
      icon={<AddRoundedIcon fontSize='inherit' />}
    />
  );
}
