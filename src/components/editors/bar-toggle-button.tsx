import React from "react";
import { useSelector } from "react-redux";
import ToggleButtonList from "components/subcomponents/toggle-button-list";

// BarToggleButton Component
export default function BarToggleButton({ format, icon, handleClick }) {
  // Extracting state values
  const selectedTextValue = useSelector((state: any) => state.editorParams.selectedTextValue);
  const progressValue = useSelector((state: any) => state.progressValue);

  // Determine loading state
  const loading = progressValue > 0 && progressValue < 100;

  // Determine selection status
  const selectionStatus = !selectedTextValue || selectedTextValue.length <= 2 || selectedTextValue.length >= 15000;

  // Log state for debugging
  console.log(`Selected Text Length: ${selectedTextValue?.length || 0}, Loading: ${loading}`);

  return (
    <ToggleButtonList
      title={format}
      icon={icon}
      onClick={handleClick}
      disabled={selectionStatus || loading}
    />
  );
}

/*
  Example Usage:
  <BarToggleButton
    format="Bold"
    icon={<BoldIcon />}
    handleClick={() => formatText("bold")}
  />
  
  - `format`: Specifies the formatting type.
  - `icon`: Provides the icon to display.
  - `handleClick`: Function to execute on click.
*/

// Types:
// format: string
// icon: JSX.Element
// handleClick: () => void

