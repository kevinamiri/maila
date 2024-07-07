import React from "react";
import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import SettingsDrawer from "./settings-drawer";

export type langProps = {
  langKey: string;
  link: string;
  selected: boolean;
};
interface SettingsButtonProps {
  langs?: langProps[];
  langKey?: string;
}

export const SettingsButton = ({ langs, langKey }: SettingsButtonProps) => {
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
          size='small'
          sx={{
            mx: 1,
            p: 1,
            zIndex: 1900,
            backgroundColor: (theme) => theme.palette.background.default,
            "&:hover": {
              backgroundColor: (theme) => theme.palette.divider,
            },
          }}
        >
          <SettingsIcon />
        </IconButton>
      </Tooltip>
      <SettingsDrawer onClose={handleClose} open={open} langs={langs} langKey={langKey} />
    </>
  );
};