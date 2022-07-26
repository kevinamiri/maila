import React from "react";
import ToggleButtonList from "../subcomponents/ToggleButtonList";
import useSaveComplitions from "../../hooks/useSaveComplitions";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";

const ButtonPostData = (editor) => {
  const [isLoading, setIsLoading] = React.useState(false);

  const PostData = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await useSaveComplitions(editor);
  };

  return (
    <ToggleButtonList
      title='Save'
      onClick={PostData}
      icon={<BookmarkBorderRoundedIcon fontSize='inherit' />}
      disabled={isLoading}
    />
  );
};

export default ButtonPostData;
