import * as React from "react";
import { styled } from "@mui/material/styles";
import { Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListSidebar from "./listItems";
import AppContext from "../contexts/AppContext";
import LinearP from "./subcomponents/LinearP";
import ListItem from "@mui/material/ListItem";
import Logo from "./logo";
import Typography from "@mui/material/Typography";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  overflowY: "hidden",
  whiteSpace: "pre-wrap",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  overflowY: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(7)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const DrawerSideBar = () => {
  const { IsOpen, toggleOpen } = React.useContext(AppContext);

  return (
    <Drawer variant='permanent' anchor='left' open={IsOpen}>
      <DrawerHeader>
        <Logo
          edge='start'
          sx={{
            marginRight: "36px",
          }}
          color='primary'
          fontSize='large'
        />{" "}
        <Typography
          color='primary'
          sx={{
            marginTop: "0.375rem",
            fontSize: "1rem",
            fontWeight: 600,
            textTransform: "uppercase",
            mr: "12px",
          }}
          variant='subtitle2'
          gutterBottom
        >
          Maila.ai
        </Typography>
        <IconButton onClick={toggleOpen} color='primary' size='large'>
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <ListSidebar />
      <Divider />
      <List dense>
        <ListItem>
          <LinearP progressType={!IsOpen} />
        </ListItem>
        {/* </Tooltip> */}
      </List>
      <Divider />
    </Drawer>
  );
};

export default DrawerSideBar;
