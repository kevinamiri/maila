import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import PopUpCards from "./PopUpCards";
import TranslateRoundedIcon from "@mui/icons-material/TranslateRounded";
import SpellcheckRoundedIcon from "@mui/icons-material/SpellcheckRounded";
import ShortTextRoundedIcon from "@mui/icons-material/ShortTextRounded";

const featuresIcons = [
  {
    icon: <ShortTextRoundedIcon />,
  },
  {
    icon: <TranslateRoundedIcon />,
  },
  {
    icon: <SpellcheckRoundedIcon />,
  },
];

interface propsFeatures {
  features: any[];
  sectionlabel?: string;
}

/**
 *
 * @param {features: string[], sectionlabel?: string}
 * @returns JSX.Element
 * @returns
 */
export default function WithIllustrationFeatures({
  features,
  sectionlabel,
}: propsFeatures) {
  return (
    <Box component='section'>
      <Container maxWidth='lg' sx={{ py: 10 }}>
        <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
          <Grid item xs={12} md={7}>
            <Typography
              sx={{ mb: 8 }}
              component='h2'
              variant='h4'
              color='text.primary'
            >
              {sectionlabel && sectionlabel}
            </Typography>
            {features.map((feature, i) => (
              <Box
                key={feature.title}
                sx={{ display: "flex", flexDirection: "row", mb: 6 }}
              >
                <Avatar sx={{ bgcolor: "primary.main", mr: 3 }}>
                  {featuresIcons[i].icon}
                </Avatar>
                <Box>
                  <Typography component='h3' color='text.primary' variant='h6'>
                    {feature.title}
                  </Typography>
                  <Typography color='text.secondary'>
                    {feature.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Grid>
          <Grid item xs={12} md={4}>
            {/* <Box sx={{ borderRadius: 4, maxWidth: 1 }}> */}
            <PopUpCards />
            {/* <StaticImage
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 96%, 0% 100%)",
                  borderRadius: "6px",
                }}
                src='../../../static/img/5.jpg'
                alt='A man checking his phone'
              /> */}
            {/* </Box> */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
