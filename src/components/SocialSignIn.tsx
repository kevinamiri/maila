import React from "react";
import { Auth } from "aws-amplify";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SvgIcon from "@mui/material/SvgIcon";
import { FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";


function asSvgIcon(reactSvgComponent) {
  const Icon = function (props) {
    const viewBox = React.useMemo(
      () => reactSvgComponent({}).props.attr.viewBox,
      []
    );
    return (
      <SvgIcon component={reactSvgComponent} viewBox={viewBox} {...props} />
    );
  };

  Object.defineProperty(Icon, "displayName", {
    value: `AsSvgIcon(${
      reactSvgComponent.displayName || reactSvgComponent.name
    })`,
  });

  return Icon;
}
function SocialSignIn(props) {
  const FilledFaFacebookSquare = asSvgIcon(FaFacebookSquare);
  const FilledFcGoogle = asSvgIcon(FcGoogle);
  return (
    <>
      <Box
        sx={{
          "& > :not(style)": { m: 1 },
        }}
      >
        <Button
          variant='outlined'
          onClick={() => Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google })}
          {...props}
          color='primary'
          startIcon={<FilledFcGoogle />}
          aria-label='login with google'
        >
          Google
        </Button>
      </Box>
    </>
  );
}

export default SocialSignIn;
