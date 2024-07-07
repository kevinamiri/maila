import React from "react";
import Link from "./Link";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import TranslateRoundedIcon from "@mui/icons-material/TranslateRounded";
import Typography from "@mui/material/Typography";

export type langProps = {
    langKey: string;
    link: string;
    selected: boolean;
  };


const languageTag = {
  en: "EN-English",
  fi: "FI-Finnish",
  da: "DA-Danish",
  sv: "SV-Swedish",
  no: "NO-Norwegian",
};

export function  NestedList({ items, langKey }) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.default" }}
      component='nav'
      aria-labelledby='nested-list-subheader'
      subheader={
        <ListSubheader component='div' id='nested-list-subheader'>
          <Typography variant='caption' color='testSecondary'>
            Change Language:{" "}
          </Typography>
        </ListSubheader>
      }
    >
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <TranslateRoundedIcon />
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography variant='subtitle2' color='initial'>
              {items &&
                items
                  .filter((item: langProps) => item?.selected)
                  .map((item: langProps) => languageTag[`${item.langKey}`])}
            </Typography>
          }
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          <Typography variant='subtitle2' color='initial'>
            {items &&
              items
                .filter((item: langProps) => !item.selected)
                .map((item: langProps, index: number) => (
                  <Link key={index + 300} to={item.link}>
                    <ListItemButton sx={{ pl: 9 }}>
                      {languageTag[`${item.langKey}`]}
                    </ListItemButton>
                  </Link>
                ))}
          </Typography>
        </List>
      </Collapse>
    </List>
  );
}

export default NestedList;
