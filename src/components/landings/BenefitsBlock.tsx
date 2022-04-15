import React from "react";
import Box from "@mui/material/Box";
import CardBenefits from "./card/CardBenefits";

const BenefitsBlock = ({ list }) => {
  const lists = list;
  return (
    <Box
      sx={{
        mt: 5,
      }}
    >
      {lists.map((x, i) => (
        <CardBenefits key={i} title={x[0]} body={x[1]} />
      ))}
    </Box>
  );
};

export default BenefitsBlock;
