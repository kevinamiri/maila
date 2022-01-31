import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { SvgIcon } from "@mui/material";
import { FaFacebookSquare, FaGoogle } from "react-icons/fa";
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

const IconLabelButtons = () => {
  const FilledFaGoogle = asSvgIcon(FaGoogle);
  const FilledFaFacebookSquare = asSvgIcon(FaFacebookSquare);
  const FilledFcGoogle = asSvgIcon(FcGoogle);

  return (
    <Box
      sx={{
        "& > :not(style)": { m: 1 },
      }}
    >
      <Button
        variant='outlined'
        color='primary'
        startIcon={<FilledFaFacebookSquare />}
      >
        Facebook
      </Button>
      <Button
        variant='outlined'
        color='secondary'
        startIcon={<FilledFaGoogle />}
      >
        Google
      </Button>
      <Button variant='outlined' color='primary' startIcon={<FilledFcGoogle />}>
        Google
      </Button>
    </Box>
  );
};

export default IconLabelButtons;
