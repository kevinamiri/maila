import React from "react";
import ToggleButtonList from "../subcomponents/toggle-button-list";
import useSaveCompletions from "../../hooks/useSaveComplitions";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";

// Asynchronous function to handle data saving
const saveData = async (editor: any) => {
  try {
    await useSaveCompletions(editor);
    console.log("Data saved successfully");
  } catch (error) {
    console.error("Error saving data:", error);
  }
};

// Main component for the save button
const SaveButton: React.FC<{ editor: any }> = ({ editor }) => {
  const [isLoading, setIsLoading] = React.useState(false);

  // Event handler for button click
  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("Saving data...");
    await saveData(editor);
    setIsLoading(false);
  };

  return (
    <ToggleButtonList
      title="Save"
      onClick={handleClick}
      icon={<BookmarkBorderRoundedIcon fontSize="inherit" />}
      disabled={isLoading}
    />
  );
};

export default SaveButton;

/**
 * Usage Example:
 * <SaveButton editor={editorInstance} />
 */

