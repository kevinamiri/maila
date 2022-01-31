import React from "react";
import Button from "@mui/material/Button";
import UpgradeIcon from "@mui/icons-material/Upgrade";

// const stripePromise = loadStripe(
//   "pk_test_51I6y6ZB590gI84dnIhqOn0KnxVlLEqj4xX1kZDHiqJnuLDZFDVWcMugcKH7IeKxEEMoXd6L61gvQWaUJ69xkV3qt00RmLqBtDt"
// );

const CheckoutButton = ({ buttonTextLabel }) => {
  // const usernameRef = async () => {
  //   try {
  //     const user = await Auth.currentAuthenticatedUser();
  //     const refUser = user.username;
  //     return refUser;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // const userRef = usernameRef;
  // const redirectToCheckout = async () => {
  //   const response = await fetch("https://pay.maila.ai/checkout", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       priceId: "price_1IwkG7B590gI84dnJQf4UIJE",
  //       client_reference_id: userRef,
  //       mode: "subscription",
  //     }),
  //   });
  //   const session = await response.json();
  //   const sessionId = session.id;
  //   const stripe = await stripePromise;
  //   stripe.redirectToCheckout({ sessionId });
  // };

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
