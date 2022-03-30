import type { FC } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { X as XIcon } from "../icons/x";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

interface SettingsDrawerProps {
  onClose?: () => void;
  children: ReactJSXElement;
  handleExpand?: any;
  open?: boolean;
  anchor?: "right" | "bottom";
}

const OutputsDrawer: FC<SettingsDrawerProps> = (props) => {
  const { open, onClose, handleExpand, children, anchor, ...other } = props;

  return (
    <Drawer
      anchor={anchor}
      onClose={onClose}
      open={open}
      ModalProps={{ sx: { zIndex: 1690 } }}
      PaperProps={{
        sx: {
          width: { xs: "100%", md: "31%" },
          height: { xs: "43%", md: "100%" },
          mt: { xs: 0, md: "5rem" },
          border: (theme) => `1px solid ${theme.palette.divider}`,
          borderRadius: 1,
        },
      }}
      variant='persistent'
      {...other}
    >
      <Box
        sx={{
          alignItems: "center",
          backgroundColor: "background.paper",
          display: "flex",
          justifyContent: "flex-end",
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
          px: 2,
          py: 1,
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <IconButton color='primary' onClick={onClose}>
          <XIcon fontSize='small' />
        </IconButton>
      </Box>

      <Box
        sx={{
          py: 4,
          px: 1,
        }}
      >
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
          }}
        >
          {children}
        </Box>
        <Divider sx={{ mt: 5 }} />
        {/* <Button
          color='primary'
          fullWidth
          onClick={handleSave}
          sx={{ mt: 3 }}
          size='small'
          variant='contained'
        >
          Save Settings
        </Button> */}
      </Box>
    </Drawer>
  );
};

export default OutputsDrawer;
