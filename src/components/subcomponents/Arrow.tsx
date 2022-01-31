import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import useMediaQuery from "@mui/material/useMediaQuery";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ToggleButtonList from "./ToggleButtonList";

export default function Arrow(props) {
  //using the theme
  const matches = useMediaQuery("(min-width:600px)");

  const Status = matches ? (
    <ArrowBackIcon fontSize='inherit' />
  ) : (
    <ArrowUpwardIcon fontSize='inherit' />
  );

  return (
    <ToggleButtonList
      title='Replacement'
      {...props}
      ariaLabel={"copy the all texts in the box"}
      icon={Status}
    />
  );
}
