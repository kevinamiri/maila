import React from "react";
import InputLabel from "@mui/material/InputLabel";
import NotchedOutline from "@mui/material/OutlinedInput/NotchedOutline";
import Box from "@mui/material/Box";

const LabelledOutline = ({ id, label, children }) => {
  const labelRef = React.useRef(null);

  return (
    <Box
      sx={{
        position: "relative",
        marginTop: "8px",
      }}
    >
      <InputLabel
        ref={labelRef}
        htmlFor={id}
        variant='outlined'
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
        }}
        shrink
      >
        {label}
      </InputLabel>
      <Box
        sx={{
          position: "relative",
        }}
      >
        <Box
          id={id}
          sx={{
            padding: "18.5px 14px",
          }}
        >
          {children}
          <NotchedOutline notched />
        </Box>
      </Box>
    </Box>
  );
};
export default LabelledOutline;
