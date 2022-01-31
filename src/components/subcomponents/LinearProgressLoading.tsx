import React from "react";
import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";

export default function LinearProgressLoading(props: LinearProgressProps) {
  //hooks must be outside of the function
  const { progressValue } = useSelector((state) => state.progressValue);

  return (
    <Box display='flex' alignItems='center'>
      <Box width='100%'>
        <LinearProgress variant='determinate' value={progressValue} />
      </Box>
    </Box>
  );
}
