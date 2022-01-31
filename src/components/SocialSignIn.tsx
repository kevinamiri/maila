import React from "react";
import { Auth } from "aws-amplify";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import SvgIcon from "@mui/material/SvgIcon";
import { FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

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
function SocialSignIn() {
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
          color='primary'
          onClick={() => Auth.federatedSignIn({ provider: "Facebook" })}
          startIcon={<FilledFaFacebookSquare />}
        >
          Facebook
        </Button>
        <Button
          variant='outlined'
          onClick={() => Auth.federatedSignIn({ provider: "Google" })}
          color='primary'
          startIcon={<FilledFcGoogle />}
        >
          Google
        </Button>
      </Box>
    </>
  );
}

export default SocialSignIn;
