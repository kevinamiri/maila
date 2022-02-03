import React from "react";
import Button from "@mui/material/Button";
import UpgradeIcon from "@mui/icons-material/Upgrade";

const CheckoutButton = ({ buttonTextLabel }) => {
  return (
    <Button
      color='inherit'
      startIcon={<UpgradeIcon fontSize='small' />}
      variant='text'
      href='https://buy.stripe.com/00gaGuc3Ieoq8wM144'
    >
      {buttonTextLabel}
    </Button>
  );
};

export default CheckoutButton;
