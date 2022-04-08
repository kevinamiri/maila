import * as React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import { useSelector } from "react-redux";
import Buttons from "./buttons";
import Tooltip from "@mui/material/Tooltip";

export default function LoadingButtonProgress(props) {
  const { progressValue } = useSelector((state) => state.progressValue);
  const loading = progressValue > 0 && progressValue < 100;
  return (
    <>
      <Tooltip title='Autocomplete(⌘⏎)- After the text'>
        <LoadingButton
          {...props}
          loading={loading}
          loadingIndicator='Loading...'
        >
          {props.title}
        </LoadingButton>
      </Tooltip>
    </>
  );
}
