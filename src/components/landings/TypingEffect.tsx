import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

const TypingEffect = ({ helpernote }) => {
  const helpenote = helpernote;
  const reference = React.useRef();
  const buttonRef = React.useRef<HTMLButtonElement | null>(null);
  const textHandler2 = () => {
    buttonRef.current.disabled = true;
    const textInputref: any = reference.current;
    var i = textInputref.value.length;
    textInputref.value = "";
    var i = textInputref.value.length;
    var txt = `Hey Alex,
Thank you for signing up so far! We’re really excited to show you everything we have to offer. To get you started, we’ve put together some simple, easy to understand step-by-step guides on our blog so that you can start our services straight away!

Best,
John Doe`;
    var speed = 10;
    const typeWriter = () => {
      var i = textInputref.value.length;
      if (i < txt.length) {
        textInputref.value += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    };
    typeWriter();
    buttonRef.current.disabled = false;
  };

  React.useEffect(() => {
    const timer = setTimeout(() => {
      const textInputref: any = reference.current;
      textInputref.value.length < 10 && textHandler2();
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      sx={{
        minWidth: "117%",
      }}
    >
      <Container maxWidth='md'>
        <Paper elevation={12} sx={{ p: 3 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <Grid
              container
              direction='row'
              justifyContent='start'
              alignItems='center'
              spacing={2}
            >
              <Grid xs={9} item>
                <TextField
                  fullWidth
                  multiline
                  rows={2}
                  label='Sales Email > user input'
                  name='title'
                  value="If you're new to our stores, you need use our step-by-step guide."
                  variant='outlined'
                />
              </Grid>
              <Grid xs={3} item>
                <Button
                  color='primary'
                  ref={buttonRef}
                  fullWidth
                  size='large'
                  variant='contained'
                  onClick={textHandler2}
                  sx={{
                    "&:focus": {
                      border: 9,
                    },
                  }}
                >
                  Compose
                </Button>
              </Grid>
              <Grid xs={12} item>
                <TextField
                  InputLabelProps={{ shrink: true }}
                  label='AI Output'
                  fullWidth
                  inputRef={reference}
                  multiline
                  rows={8}
                  helperText={helpenote}
                  variant='outlined'
                />
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};
export default TypingEffect;
