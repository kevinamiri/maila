import type { FC } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import useSettings from "../hooks/useSettings";
import { X as XIcon } from "../icons/x";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

interface SettingsDrawerProps {
  onClose?: () => void;
  langs?: string[];
  open?: boolean;
}

const themes = [
  {
    label: "Light",
    value: "light",
    icon: LightModeIcon,
  },
  {
    label: "Dark",
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
    window.location.reload();
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
          sx={{ fontWeight: 600, fontSize: "1rem", lineHeight: 1.375 }}
          variant='h1'
        >
          settings
        </Typography>
        <IconButton color='primary' onClick={onClose}>
          <XIcon fontSize='small' />
        </IconButton>
      </Box>
      <Box
        sx={{
          py: 4,
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
          Theme
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
                <Typography align='center' sx={{ mt: 1 }} variant='subtitle2'>
                  {label}
                </Typography>
              </div>
            );
          })}
        </Box>
        <Divider sx={{ mt: 5 }} />
        {/* <Typography
          color='textSecondary'
          sx={{
            display: "block",
            mb: 1,
            mt: 4,
          }}
          variant='overline'
        >
          Language
        </Typography> */}
        <Button
          color='primary'
          fullWidth
          onClick={handleSave}
          sx={{ mt: 3 }}
          size='small'
          variant='contained'
          aria-label='save'
        >
          Save Setting
        </Button>
      </Box>
    </Drawer>
  );
};

export default SettingsDrawer;
