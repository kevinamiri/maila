import * as React from "react";
import Grid from "@mui/material/Grid";
import PopUpCard from "./card/PopUpCard";

interface IProps {
  transform?: boolean;
}

const PopUpCards: React.FC = () => {
  return (
    <Grid
      container
      sx={{
        borderRadius: 4,
        opacity: "100%",
      }}
    >
      <PopUpCard
        title='Simplifying'
        input='The positive outcomes achieved by the organization can be attributed to the efforts and commitment of the staff.'
        output='The staff did a good job and that is why the organization was successful.'
      />
    </Grid>
  );
};

export default PopUpCards;
