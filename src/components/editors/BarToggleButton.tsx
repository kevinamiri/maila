import React from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { useSelector } from "react-redux";
import ToggleButtonList from "components/subcomponents/ToggleButtonList";

export default function BarToggleButton({ format, icon, handleClick }) {
  const { selectedTextValue } = useSelector((state) => state.editorParams);
  const { progressValue } = useSelector((state) => state.progressValue);
  const loading = progressValue > 0 && progressValue < 100;
  const selectionStatus =
    selectedTextValue &&
    selectedTextValue.length > 2 &&
    selectedTextValue.length < 15000
      ? false
      : true;

  return (
    <ToggleButtonList
      title={format}
      icon={icon}
      onClick={handleClick}
      disabled={selectionStatus || loading}
    />
  );
}
