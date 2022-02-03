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
import SelectLanguage from "./homepage/SelectLanguage";
// import { THEMES } from "../constants";

interface SettingsDrawerProps {
  onClose?: () => void;
  langs: string[];
  open?: boolean;
}

const themes = [
  {
    label: "Light",
    value: "LIGHT",
    icon: LightModeIcon,
  },
  {
    label: "Dark",
    value: "DARK",
    icon: DarkModeIcon,
  },
];

const getValues = (settings) => ({
  direction: settings.direction,
  responsiveFontSizes: settings.responsiveFontSizes,
  theme: settings.theme,
});

const SettingsDrawer: FC<SettingsDrawerProps> = (props) => {
  const { open, onClose, langs, ...other } = props;
  const { settings, saveSettings } = useSettings();
  const [values, setValues] = React.useState(getValues(settings));
  React.useEffect(() => {
    setValues(getValues(settings));
  }, [settings]);

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
        <Typography color='primary' variant='h6'>
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
        <Typography
          color='textSecondary'
          sx={{
            display: "block",
            mb: 1,
            mt: 4,
          }}
          variant='overline'
        >
          Language
        </Typography>
        <SelectLanguage langs={langs} />
        <Button
          color='primary'
          fullWidth
          onClick={handleSave}
          sx={{ mt: 3 }}
          size='small'
          variant='contained'
        >
          Save Settings
        </Button>
      </Box>
    </Drawer>
  );
};

export default SettingsDrawer;
