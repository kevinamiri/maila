import React from "react";
import { useState } from "react";
import { Fab, Tooltip } from "@mui/material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SettingsDrawer from "./settings-drawer";

export const SettingsButton = ({ langs }) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
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
            zIndex: 1900,
          }}
        >
          <SettingsOutlinedIcon fontSize='medium' />
        </Fab>
      </Tooltip>
      <SettingsDrawer onClose={handleClose} open={open} langs={langs} />
    </>
  );
};
