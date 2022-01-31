import { useEffect, useState } from "react";
import React from "react";
import {
  Box,
  Button,
  Drawer,
  Fab,
  FormControlLabel,
  Switch,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { THEMES } from "../constants";
import useSettings from "../hooks/useSettings";
import SettingsIcon from "@mui/icons-material/Settings";

const getValues = (settings) => ({
  direction: settings.direction,
  responsiveFontSizes: settings.responsiveFontSizes,
  roundedCorners: settings.roundedCorners,
  theme: settings.theme,
});

interface settings {
  direction: string;
  responsiveFontSizes: any;
  roundedCorners: any;
  theme: string;
}

const SettingsDrawer = () => {
  const { settings, saveSettings } = useSettings();
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState<settings>(getValues(settings));

  useEffect(() => {
    setValues(getValues(settings));
  }, [settings]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (field, value) => {
    setValues({
      ...values,
      [field]: value,
    });
  };

  const handleSave = () => {
    saveSettings(values);
    setOpen(false);
  };

  return (
    <>
      <Tooltip title='Settings'>
        <Fab
          color='primary'
          onClick={handleOpen}
          size='medium'
          sx={{
            bottom: 0,
            margin: (theme) => theme.spacing(4),
            position: "fixed",
            right: 0,
            zIndex: (theme) => theme.zIndex.speedDial,
            display: { xs: "none", sm: "block" },
          }}
        >
          <SettingsIcon fontSize='medium' />
        </Fab>
      </Tooltip>
      <Drawer
        anchor='right'
        onClose={handleClose}
        open={open}
        PaperProps={{
          sx: {
            p: 2,
            width: 320,
          },
        }}
      >
        <Typography color='textPrimary' variant='h6'>
          Settings
        </Typography>
        <Box sx={{ mt: 3 }}>
          <TextField
            fullWidth
            label='Theme'
            name='theme'
            onChange={(event) => handleChange("theme", event.target.value)}
            select
            SelectProps={{ native: true }}
            value={values.theme}
            variant='outlined'
          >
            {Object.keys(THEMES).map((theme, index) => (
              <option key={index} value={theme}>
                {theme
                  .split("_")
                  .map((w) => w[0].toUpperCase() + w.substr(1).toLowerCase())
                  .join(" ")}
              </option>
            ))}
          </TextField>
        </Box>
        <Box
          sx={{
            mt: 2,
            px: 1.5,
          }}
        ></Box>
        <Box
          sx={{
            mt: 2,
            px: 1.5,
          }}
        ></Box>
        <Box sx={{ mt: 3 }}>
          <Button
            color='primary'
            fullWidth
            onClick={handleSave}
            variant='contained'
          >
            Save Settings
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

export default SettingsDrawer;
