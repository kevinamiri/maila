import React from "react";
import select from "../homepage/utils";
import Grid from "@mui/material/Grid";
import BenefitsBlock from "./BenefitsBlock";
import ConceptBlock01 from "./ConceptBlock01";

const HomeBlock03 = (props) => {
  const lists = props.list;
  console.log(lists);
  const sel = select(props.langKey);
  const getClass = (langKey: string) => {
    switch (langKey) {
      case "en" || "sv":
        return false;
      case "fa" || "ar":
        return true;
      default:
        return false;
    }
  };

  const rtl = getClass(props.langKey);

  return (
    <Grid
      container
      sx={{
        backgroundColor: (theme) => theme.palette.background.paper,
      }}
      direction='row'
      justifyContent='center'
      alignItems='center'
    >
      <Grid item xs={12} sm={12} md={6}>
        <ConceptBlock01 />
      </Grid>

      <Grid item xs={12} sm={12} md={6}>
        <BenefitsBlock list={lists} />
      </Grid>
    </Grid>
  );
};
export default HomeBlock03;
