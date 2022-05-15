import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import ContactForm from "./ContactForm";
import { styled } from "@mui/material/styles";
import { useIntl } from "react-intl";
import Link from "@mui/material/Link";

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

export default function ContactDialogs() {
  const [open, setOpen] = React.useState(false);
  const intl = useIntl();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Typography
        sx={{ mt: 3 }}
        variant='body2'
        color='text.secondary'
        onClick={handleClickOpen}
      >
        <Link component={"span"} style={{ cursor: "pointer" }}>
          {intl.formatMessage({ id: "F50" })}
        </Link>
      </Typography>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby='feadbacl-dialog-title'
        open={open}
      >
        <BootstrapDialogTitle id='feadback-dialog-title' onClose={handleClose}>
          {intl.formatMessage({ id: "F50" })}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            {intl.formatMessage({ id: "F51" })}
          </Typography>
          <ContactForm />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            {intl.formatMessage({ id: "F52" })}
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
