import React from "react";
import { useSelector } from "react-redux";
import ToggleButtonList from "components/subcomponents/ToggleButtonList";

export default function BarToggleButton({ format, icon, handleClick }) {
  const { selectedTextValue } = useSelector((state: any) => state.editorParams);
  const { progressValue } = useSelector((state: any) => state.progressValue);
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
