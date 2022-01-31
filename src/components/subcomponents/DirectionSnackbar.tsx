import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Slide from "@mui/material/Slide";

function TransitionLeft(props) {
  return <Slide {...props} direction='left' />;
}

function TransitionRight(props) {
  return <Slide {...props} direction='right' />;
}

export default function DirectionSnackbar(props) {
  const [open, setOpen] = React.useState(false);
  const [transition, setTransition] = React.useState(undefined);
  const [run, setRun] = props.running;

  const handleClick = () => () => {
    setTransition(() => (props) => <Slide {...props} direction='right' />);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const status = () => {
  //   run? handleClick(): null
  // }

  // React.useEffect(() => {
  //   run? handleClick(): null
  // }
  // ,[])

  return (
    <div>
      <Button onClick={handleClick()}>Left</Button>
      <Snackbar
        open={open}
        onClose={handleClose}
        TransitionComponent={transition}
        message={props.message}
        key={transition ? transition.name : ""}
      />
    </div>
  );
}
