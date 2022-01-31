import React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { debounce } from "lodash";

export default function MuiInputWithGrid6string({ value, ...others }) {
  const [InputValue, setInputValue] = value;

  return (
    <Grid
      item
      xs={12}
      sm={6}
      sx={{
        "& > *": {
          width: "98%",
        },
      }}
    >
      <TextField
        onChange={debounce((e) => {
          e.preventDefault();
          setInputValue(e.target.value);
        }, 300)}
        size='small'
        {...others}
        variant='outlined'
      />
    </Grid>
  );
}
