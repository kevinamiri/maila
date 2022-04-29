import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

interface SupportProps {
  text: string[];
}
export const Support = ({ text }: SupportProps) => (
  <Box component='section' sx={{ pt: 15 }}>
    <Container maxWidth='lg'>
      <Card elevation={0} sx={{ backgroundColor: "background.default" }}>
        <Grid
          container
          sx={{
            pb: {
              md: 6,
              xs: 3,
            },
            pt: {
              md: 8,
              xs: 3,
            },
            px: {
              md: 8,
              xs: 3,
            },
          }}
        >
          <Grid
            item
            md={6}
            sx={{
              borderRight: (theme) => ({
                md: `1px solid ${theme.palette.divider}`,
              }),
              display: "flex",
              flexDirection: "column",
              mb: {
                md: 0,
                xs: 4,
              },
              pr: {
                md: 4,
              },
            }}
            xs={12}
          >
            <Box sx={{ mb: 2 }} component='header'>
              <Typography color='primary' variant='h4'>
                {text[0]}
              </Typography>
            </Box>
            <Typography
              color='textSecondary'
              variant='subtitle1'
              sx={{
                mb: 4,
                mt: 1,
              }}
            >
              {text[1]}
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              <Box sx={{ flexGrow: 1 }} />
              <Box
                sx={{
                  "& img:not(:last-child)": {
                    mr: 3,
                  },
                }}
              ></Box>
            </Box>
          </Grid>
          <Grid
            item
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              pl: {
                md: 4,
              },
            }}
            xs={12}
          >
            <Box sx={{ mb: 2 }} component='header'>
              <Typography color='primary' variant='h4'>
                {text[2]}
              </Typography>
            </Box>
            <Typography
              color='textSecondary'
              variant='subtitle1'
              sx={{
                mb: 4,
                mt: 1,
              }}
            >
              {text[3]}
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              <Button
                color='primary'
                component='a'
                href='/app'
                target='_blank'
                variant='text'
              >
                {text[4]}
              </Button>
              <Box sx={{ flexGrow: 1 }} />
            </Box>
          </Grid>
        </Grid>
      </Card>
    </Container>
  </Box>
);
