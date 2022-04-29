import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { StaticImage } from "gatsby-plugin-image";

export default function SimpleCta() {
  return (
    <Box component='section'>
      <Container maxWidth='lg'>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
            py: 10,
          }}
        >
          <Box>
            <Typography component='div' sx={{ mb: 2 }} variant='h4'>
              Try it yourself
            </Typography>
            <StaticImage
              style={{
                border: "2px solid #E6E8F0",
                borderRadius: "6px",
              }}
              src='../../../static/img/simplify-contenets.png'
              alt='screenshot of maila'
            />
          </Box>
          <Stack
            direction='row'
            spacing={2}
            sx={{ mt: { xs: 3, md: 0 }, ml: { xs: 0, md: 3 } }}
          >
            <Button variant='contained'>Get Started</Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
