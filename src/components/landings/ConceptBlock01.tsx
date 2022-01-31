import React from "react";
import PopUpCardBlockGrid from "./PopUpCardBlockGrid";
import { Grid } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";

// a happy man watching his phone along with a concept for clarity his text

export default function ConceptBlock01() {
  return (
    <Grid
      sx={{
        display: "grid",
        m: 2,
        boxShadow: 1,
        padding: "1rem",
        background: (theme) =>
          `linear-gradient(180deg, ${theme.palette.background.default} 50%, ${theme.palette.background.default} 50%)`,
        gridTemplateRows: "75px 2fr 1fr",
        gridTemplateColumns: "5.5fr 1fr 1fr 1.5fr",
        borderRadius: "2%",
      }}
    >
      <Grid
        sx={{
          gridRow: "1 / 4",
          gridColumn: "1 / 4",
          margin: "10%",
        }}
      >
        <StaticImage
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 96%, 0% 100%)",
            borderRadius: "6px",
          }}
          src='../../../static/img/5.jpg'
          alt='A man checking his phone'
        />
      </Grid>
      <PopUpCardBlockGrid />
      <Grid
        sx={{
          gridRow: "1",
          background: "rgb(117, 227, 234)",
          backgroundSize: "fixed",
          gridColumn: "1",
          borderRadius: "50%",
          width: "7vw",
          height: "7vw",
        }}
      ></Grid>
    </Grid>
  );
}
