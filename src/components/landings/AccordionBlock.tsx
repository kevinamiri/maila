import React from "react";
import Box from "@mui/material/Box";
import SimpleAccordion from "./card/SimpleAccordion";
import Grid from "@mui/material/Grid";

interface QuestionListProps {
  questions?: any | unknown;
}

const AccordionBlock = ({ questions }: QuestionListProps) => {
  let QuestionLists = questions;
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sx={{
          backgroundColor: (theme) => `${theme.palette.background.paper}`,
        }}
        component='section'
      >
        <Box
          sx={{
            p: "5%",
          }}
        >
          {QuestionLists.map((x, i) => (
            <SimpleAccordion
              ariaControls={"question" + i}
              id={"header" + i}
              key={i + 90}
              title={x[0]}
              body={x[1]}
            />
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default AccordionBlock;
