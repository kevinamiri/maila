import React from "react";
import Button from "@mui/material/Button";
import UpgradeIcon from "@mui/icons-material/Upgrade";

interface CheckoutButtonProps {
  buttonTextLabel: string;
}

const CheckoutButton = ({ buttonTextLabel }: CheckoutButtonProps) => {
  return (
    <Button
      color='primary'
      startIcon={<UpgradeIcon fontSize='small' />}
      variant='text'
      href={"https://buy.stripe.com/cN27sP08H1Sn1Nu9AC"}
    >
      {buttonTextLabel}
    </Button>
  );
};

export default CheckoutButton;
