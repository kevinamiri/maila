import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import CardFeature from "./card/CardFeature";

interface CardFeatureBlockProps {
  titles?: [];
  bodys?: [];
}

const FWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "row",
  flexWrap: "wrap",
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.up("xs")]: {
    marginTop: "calc(20rem - 40vw)",
  },
  [theme.breakpoints.up("sm")]: {
    marginTop: "0rem",
  },
}));

const CardFeatureBlock = ({ titles, bodys, badgeLabel }) => {
  return (
    <FWrapper>
      {titles.map((x, i) => (
        <CardFeature
          key={i}
          title={x}
          body={bodys[i]}
          badgeLabel={i == 4 && "NEW"} // determine which card should have the NEW badge
        />
      ))}
    </FWrapper>
  );
};

export default CardFeatureBlock;
