import React from "react";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

const ListItemTextParent = ({ primary }) => {
  return (
    <ListItemText
      primary={
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: ".85rem",
            lineHeight: "1.9",
            fontFamily:
              'BlinkMacSystemFont,"Helvetica Neue","Roboto",Roboto,Tahoma,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
          }}
          color='text.secondary'
          variant='body1'
        >
          {primary}
        </Typography>
      }
    />
  );
};

export default ListItemTextParent;
