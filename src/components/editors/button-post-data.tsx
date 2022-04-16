import React from "react";
import ToggleButtonList from "../subcomponents/ToggleButtonList";
import useSaveComplitions from "../../hooks/useSaveComplitions";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";

const ButtonPostData = (editor) => {
  const [isLoading, setIsLoading] = React.useState(false);

  const PostData = async (e) => {
    e.preventDefault();
    // disable button
    setIsLoading(true);
    await useSaveComplitions(editor);
    // enable button
    // It should be ont he redux and trigger by the handleChange on the editro
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
