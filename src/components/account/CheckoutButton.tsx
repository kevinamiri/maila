import React from "react";
import Button from "@mui/material/Button";
import UpgradeIcon from "@mui/icons-material/Upgrade";

const CheckoutButton = ({ buttonTextLabel }) => {
  return (
    <Button
      color='primary'
      startIcon={<UpgradeIcon fontSize='small' />}
      variant='text'
      href='https://buy.stripe.com/5kA7sP6x5fJdeAgfYY'
    >
      {buttonTextLabel}
    </Button>
  );
};

export default CheckoutButton;
