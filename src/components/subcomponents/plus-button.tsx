import React from "react";
import ToggleButtonList from "./ToggleButtonList";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

export default function BarButtonPlusReplace(props) {
  return (
    <ToggleButtonList
      title='Replacement'
      {...props}
      ariaLabel={"copy the all texts in the box"}
      icon={<AddRoundedIcon fontSize='inherit' />}
    />
  );
}
