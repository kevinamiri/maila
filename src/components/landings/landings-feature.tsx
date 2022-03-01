import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

interface LandingsFeatureProps {
  headerRight?: string;
  headerLeft?: string;
  descriptionLeft?: string;
  descriptionRight?: string;
  ctaActionText?: string;
}

const LandingsFeature = ({
  headerRight,
  headerLeft,
  descriptionRight,
  descriptionLeft,
  ctaActionText,
}: LandingsFeatureProps) => (
  <Box sx={{ pt: 15, mb: 12 }}>
    <Container component='section' maxWidth='lg'>
      <Card
        elevation={0}
        sx={{
          background: (theme) =>
            `linear-gradient(180deg, ${theme.palette.background.default} 50%, ${theme.palette.background.default} 50%)`,
          borderRadius: "6px",
        }}
      >
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
            <Typography color='primary' variant='h2'>
              {headerRight && headerRight}
            </Typography>
            <Typography
              color='textSecondary'
              variant='subtitle1'
              sx={{
                mb: 4,
                mt: 1,
              }}
            >
              {descriptionRight && descriptionRight}
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
            <Typography color='primary' variant='h2'>
              {headerLeft && headerLeft}
            </Typography>
            <Typography
              color='textSecondary'
              variant='subtitle1'
              sx={{
                mb: 4,
                mt: 1,
              }}
            >
              {descriptionLeft && descriptionLeft}
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              {ctaActionText && (
                <Button
                  color='primary'
                  component='a'
                  href='/app'
                  target='_blank'
                  variant='text'
                >
                  {ctaActionText}
                </Button>
              )}
              <Box sx={{ flexGrow: 1 }} />
            </Box>
          </Grid>
        </Grid>
      </Card>
    </Container>
  </Box>
);

export default LandingsFeature;
