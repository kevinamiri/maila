import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import LanguageAutocompleteApp from "./languageAutocompleteApp";
import { Link as MuiLink, Tooltip } from "@mui/material";
import { styled } from "@mui/material/styles";
import GTranslateRoundedIcon from "@mui/icons-material/GTranslateRounded";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const getValues = (settings) => ({
  direction: settings.direction,
  responsiveFontSizes: settings.responsiveFontSizes,
  theme: settings.theme,
  lang: settings.lang,
});

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;
  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label='close'
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

interface valuesT {
  direction: string;
  responsiveFontSizes: boolean;
  theme: string;
  lang: string;
}
export default function LangSettingsDials({ changeLanguage }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Tooltip title='UI Language'>
        <IconButton
          size='small'
          sx={{
            mx: 1,
            p: 1,
            backgroundColor: (theme) => theme.palette.background.default,
            "&:hover": {
              backgroundColor: (theme) => theme.palette.divider,
            },
          }}
          onClick={handleClickOpen}
        >
          <GTranslateRoundedIcon />
        </IconButton>
      </Tooltip>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
      >
        <BootstrapDialogTitle
          id='customized-dialog-title'
          onClose={handleClose}
        >
          UI Language
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            This will change the user interface language of the app to your
            preferred language.
          </Typography>
          <LanguageAutocompleteApp handleChange={changeLanguage} />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
