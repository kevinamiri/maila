import * as React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import { useSelector } from "react-redux";

export default function LoadingButtonProgress(props) {
  const { progressValue } = useSelector((state) => state.progressValue);
  const loading = progressValue > 0 && progressValue < 100;
  return (
    <LoadingButton {...props} loading={loading} loadingIndicator='Loading...'>
      {props.title}
    </LoadingButton>
  );
}
