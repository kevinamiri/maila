import type { FC } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { X as XIcon } from "../icons/x";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { FormattedMessage } from "react-intl";
// import SelectLanguage from "./homepage/SelectLanguage";
import Link from "./Link";


const languageTag = {
  en: "EN-English",
  fi: "FI-Finnish",
  da: "DA-Danish",
  sv: "SV-Swedish",
  no: "NO-Norwegian",
};


export type langProps = {
  langKey: string;
  link: string;
  selected: boolean;
};

interface SettingsDrawerProps {
  onClose?: () => void;
  langs?: langProps[];
  open?: boolean;
}

const themes = [
  {
    label: <FormattedMessage id='A03' />,
    value: "light",
    icon: LightModeIcon,
  },
  {
    label: <FormattedMessage id='A04' />,
    value: "dark",
    icon: DarkModeIcon,
  },
];

const getValues = (settings) => ({
  direction: settings.direction,
  responsiveFontSizes: settings.responsiveFontSizes,
  theme: settings.theme,
  lang: settings.lang,
});

const SettingsDrawer: FC<SettingsDrawerProps> = (props) => {
  const { open, onClose, langs, ...other } = props;
  const { settings, saveSettings } = useSettings();
  const [values, setValues] = React.useState(getValues(settings));
  const handleChange = (field, value): void => {
    setValues({
      ...values,
      [field]: value,
    });
  };

  const handleSave = (): void => {
    saveSettings(values);
    onClose?.();
  };

  return (
    <Drawer
      anchor='right'
      onClose={onClose}
      open={open}
      ModalProps={{ sx: { zIndex: 2000 } }}
      PaperProps={{ sx: { width: 320 } }}
      {...other}
      aria-label='right drawer'
    >
      <Box
        sx={{
          alignItems: "center",
          backgroundColor: "primary",
          display: "flex",
          justifyContent: "space-between",
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
          px: 3,
          py: 2,
        }}
      >
        <Typography
          color='primary'
          sx={{ fontWeight: 600, lineHeight: 1.375 }}
          variant='h5'
        >
          {<FormattedMessage id='A01' />}
        </Typography>
        <IconButton color='primary' onClick={onClose}>
          <XIcon fontSize='small' />
        </IconButton>
      </Box>
      <Box
        sx={{
          py: 3,
          px: 3,
        }}
      >
        <Typography
          color='textSecondary'
          sx={{
            display: "block",
            mb: 1,
          }}
          variant='overline'
        >
          {<FormattedMessage id='A02' />}
        </Typography>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            m: -1,
          }}
        >
          {themes.map((theme) => {
            const { label, icon: Icon, value } = theme;

            return (
              <div key={value}>
                <Box
                  onClick={() => handleChange("theme", value)}
                  sx={{
                    borderColor: values.theme === value ? "primary" : "divider",
                    borderRadius: 1,
                    borderStyle: "solid",
                    borderWidth: 2,
                    cursor: "pointer",
                    flexGrow: 1,
                    fontSize: 0,
                    m: 1,
                    overflow: "hidden",
                    p: 1,
                    "& svg": {
                      height: "50px",
                      width: "50px",
                    },
                  }}
                >
                  <Icon fontSize='small' />
                </Box>
                <Typography
                  align='center'
                  sx={{ m: 1.5 }}
                  variant='caption'
                  color={values.theme === value ? "primary" : "textSecondary"}
                >
                  {label}
                </Typography>
              </div>
            );
          })}
        </Box>
        <Divider sx={{ mt: 4 }} />
        <NestedList items={langs} />
        <Divider sx={{ mt: 4 }} />
        <Button
          color='primary'
          fullWidth
          onClick={handleSave}
          sx={{ mt: 3 }}
          size='small'
          variant='contained'
          aria-label='save'
        >
          {<FormattedMessage id='A05' />}
        </Button>
      </Box>
    </Drawer>
  );
};

export default SettingsDrawer;

import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import TranslateRoundedIcon from "@mui/icons-material/TranslateRounded";
import useSettings from "hooks/useSettings";

export function NestedList({ items }) {
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
                  .filter((item) => item?.selected)
                  .map((item) => languageTag[`${item.langKey}`])}
            </Typography>
          }
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          <Typography variant='subtitle2' color='initial'>
            {/* items */}
            {items &&
              items
                .filter((item) => !item.selected)
                .map((item, index) => (
                  <Link key={index + 300} to={item.link}>
                    <ListItemButton sx={{ pl: 9 }}>
                      {languageTag[`${item.langKey}`]}
                    </ListItemButton>
                  </Link>
                ))}
            {/* items */}
          </Typography>
        </List>
      </Collapse>
    </List>
  );
}
