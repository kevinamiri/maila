import React from "react";
import IconButton from "@mui/material/IconButton";
import AppContext from "../../contexts/AppContext";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Logo from "../../components/logo";

export default function MenuIcon({ icontype }) {
  const { IsOpen, toggleOpen } = React.useContext(AppContext);

  return (
    <IconButton
      edge='start'
      color='primary'
      aria-label='menu'
      onClick={toggleOpen}
      sx={{
        mb: 1,
        ...(IsOpen && {
          display: "none",
        }),
      }}
      component='span'
    >
      {icontype === "MenuRoundedIcon" ? <MenuRoundedIcon /> : <Logo />}
    </IconButton>
  );
}
