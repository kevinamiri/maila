import React, { useContext } from "react";
import AppContext from "../contexts/AppContext";
import { Avatar, Button, Typography } from "@mui/material";
import { navigate } from "gatsby";
import { deepPurple } from "@mui/material/colors";

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
            margin: "2px",
            textTransform: "none",
          }}
          href='/app'
          onClick={redirect}
          size='medium'
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
            color: (theme) => theme.palette.getContrastText(deepPurple[500]),
            backgroundColor: deepPurple[500],
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
