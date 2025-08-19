import React, { useContext } from "react";
import AppContext from "../contexts/AppContext";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { navigate } from "gatsby";

function UserAvatar({ handleClick }) {
  const { userInfo, checkUser } = useContext(AppContext);
  const redirect = () => {
    navigate("https://speech.maila.ai/auth/login");
  };

  if (
    !userInfo ||
    userInfo == null ||
    userInfo === "The user is not authenticated"
  ) {
    return (
      <>
        <Button
          sx={{
            mx: 1,
            textTransform: "none",
          }}
          href='https://speech.maila.ai'
          onClick={redirect}
          size='small'
          variant='contained'
          aria-label='login'
        >
          <Typography
            variant='body2'
            sx={{
              color: "white",
            }}
          >
            Login
          </Typography>
        </Button>
      </>
    );
  } else {
    return (
      <>
        <Avatar
          sx={{
            color: (theme) => theme.palette.text.secondary,
            backgroundColor: (theme) => theme.palette.background.default,
            border: (theme) => `2px solid ${theme.palette.divider}`,
          }}
          onClick={handleClick}
        >
          {userInfo.attributes.email[0].toUpperCase()}
        </Avatar>
      </>
    );
  }
}

export default UserAvatar;
