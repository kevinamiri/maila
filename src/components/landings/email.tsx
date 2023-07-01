import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const afterTwo = (string: string) => string.split(" ").slice(0, 100).join(" ");
interface HomeEmailProps {
  title?: string;
  subheader?: string;
  cta?: string;
  labelbutton?: string;
  description?: string;
}
import styled from "@emotion/styled";

const Badge = styled.span`
  background: linear-gradient(to right, #14b8a6, #0059b2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Email = ({
  title = "Meet Your New AI Assistant",
  subheader = "Email or Ask Maila anything about your documents.",
  labelbutton = "Ask or Email",
  description = "Chatbot: chat.maila.ai  or Email: anything@bot.maila.ai",
}: HomeEmailProps) => (
  <Box
    sx={{
      backgroundColor: "background.default",
      m: 5,
    }}
    component='header'
  >
    <Container maxWidth='md'>
      <Typography
        align='center'
        color='primary.main'
        variant='h1'
        component={"h2"}
      >
        <Badge>{` ${afterTwo(title)}`}</Badge>
      </Typography>
      <Typography
        align='center'
        color='textSecondary'
        sx={{
          fontSize: 20,
          mb: 10,
          mt: 10,
        }}
      >
        {subheader && subheader}
      </Typography>
      <Grid
        container
        spacing={2}
        direction='column'
        justifyContent='center'
        alignItems='center'
        sx={{ mb: 6 }}
        wrap='wrap'
      >
        <Grid item>
          <Typography sx={{ mb: 10 }} color='text.secondary' variant='body2'>
            <Badge>{description}</Badge>
          </Typography>
        </Grid>
        <Grid item>
          <Button href='https://chat.maila.ai' variant='contained'>
            <Typography
              variant='body2'
              sx={{
                color: "white",
              }}
            >
              {labelbutton && labelbutton}
            </Typography>
          </Button>
        </Grid>
      </Grid>
      {/* <StaticImage
        style={{
          borderRadius: "6px",
        }}
        src='../../../static/iwriter.png'
        alt='dashboard of iwriter'
      /> */}
    </Container>
  </Box>
);

export default Email;
