import React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { debounce } from "lodash";

export default function MuiInputWithGrid6({ value, ...others }) {
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
          Number.isInteger(InputValue * 1000)
            ? setInputValue(parseFloat(e.target.value))
            : setInputValue(parseInt(e.target.value));
        }, 300)}
        size='small'
        {...others}
        variant='outlined'
      />
    </Grid>
  );
}
