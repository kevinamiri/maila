import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import UserAvatar from "./Avatar";
import AppContext from "../contexts/AppContext";
import MenuIcon from "./subcomponents/MenuIcon";
import Box from "@mui/material/Box";
import { navigate } from "gatsby";
import { FormattedMessage } from "react-intl";
import { SeverityPill } from "./severity-pill";

import { SettingsButton } from "./SettingsButton";
import Container from "@mui/material/Container";

const drawerWidth = 240;

interface TopBarProps {
  title: string;
  icon: string;
  uilang?: any;
}

const TopBar = ({ title, icon, uilang }: TopBarProps) => {
  const { IsOpen, toggleOpen, logout } = React.useContext(AppContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  let selectedUrl = () => {
    if (window.location.pathname == "/en/") {
      return false;
    } else {
      return true;
    }
  };
  return (
    <AppBar
      position='fixed'
      color='inherit'
      elevation={0}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        transition: (theme) =>
          theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        ...(IsOpen && {
          marginLeft: drawerWidth,
          width: `calc(100% - ${drawerWidth}px)`,
          transition: (theme) =>
            theme.transitions.create(["width", "margin"], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
        }),
      }}
    >
      <Container maxWidth='xl'>
        <Toolbar component='nav'>
          <MenuIcon icontype={icon} aria-label='toggle menu' />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexGrow: 1,
              ml: 1,
            }}
          >
            <SeverityPill
              sx={{
                alignSelf: "flex-end",
                mr: 1,
                ml: 1,
                mt: 1,
              }}
              aria-label='version status'
              color='success'
            >
              beta
            </SeverityPill>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            {uilang && uilang}
            <SettingsButton />
            <UserAvatar handleClick={handleClick} />
          </Box>

          {selectedUrl && (
            <Menu
              id='demo-positioned-menu'
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <MenuItem onClick={() => navigate("/app/profile")}>
                <FormattedMessage id='MC01' />
              </MenuItem>
              <MenuItem onClick={() => navigate("/app/documents")}>
                <FormattedMessage id='MC02' />
              </MenuItem>
              <MenuItem onClick={logout}>
                <FormattedMessage id='MC03' />
              </MenuItem>
            </Menu>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default TopBar;
