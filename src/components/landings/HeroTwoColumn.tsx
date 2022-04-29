import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";

export default function HeroTwoColumn() {
  return (
    <Box component='section'>
      <Container sx={{ py: 10 }} maxWidth='lg'>
        <Grid container alignItems='center' spacing={3}>
          <Grid item xs={12} md={5}>
            <Typography component='h1' variant='h3'>
              Free code blocks built with MUI
            </Typography>
            <Typography color='text.secondary' sx={{ mt: 4 }}>
              Develop faster with components you can easily drop into your
              project and customize to your needs.
            </Typography>
            <Stack direction='row' spacing={2} sx={{ mt: 4 }}>
              <Button size='large' variant='outlined'>
                Contact Us
              </Button>
              <Button size='large' variant='contained'>
                Get Started
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack direction='row' spacing={2} sx={{ mt: 4 }}>
              <Button size='large' variant='outlined'>
                Contact Us
              </Button>
              <Button size='large' variant='contained'>
                Get Started
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
