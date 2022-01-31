import * as React from "react";
import Grid from "@mui/material/Grid";
import PopUpCard from "./card/PopUpCard";

const PopUpCardBlockGrid: React.FC = () => {
  return (
    <Grid
      container
      sx={{
        transform: "translate(5%, -111%)",
        clipPath: "polygon(0 0, 100% 1%, 100% 90%, 0% 100%)",
        gridRow: "3 / 4",
        boxShadow: "0px 32px 84px rgba(14, 86, 124, 0.165308)",
        gridColumn: "3 / 4",
        opacity: "70%",
      }}
    >
      <PopUpCard />
    </Grid>
  );
};

export default PopUpCardBlockGrid;
