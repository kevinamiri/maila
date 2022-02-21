import React from "react";
import { useState } from "react";
import { Fab, IconButton, Tooltip } from "@mui/material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SettingsDrawer from "./settings-drawer";

export const SettingsButton = () => {
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
        <IconButton
          onClick={handleOpen}
          sx={{
            mx: 1,
            zIndex: 1900,
            backgroundColor: (theme) => theme.palette.background.default,
            "&:hover": {
              backgroundColor: (theme) => theme.palette.divider,
            },
          }}
        >
          <SettingsOutlinedIcon />
        </IconButton>
      </Tooltip>
      <SettingsDrawer onClose={handleClose} open={open} />
    </>
  );
};
