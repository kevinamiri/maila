import React, { useContext } from "react";
import AppContext from "../contexts/AppContext";
import { Avatar, Button, Typography } from "@mui/material";
import { navigate } from "gatsby";

function UserAvatar({ handleClick }) {
  const { userInfo, checkUser } = useContext(AppContext);
  const redirect = () => {
    navigate("/app");
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
          href='/auth/login/'
          onClick={redirect}
          size='small'
          variant='contained'
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
