import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import CardFeature from "./card/CardFeature";

interface CardFeatureBlockProps {
  titles?: [];
  bodys?: [];
  badgeLabel?: String;
}

const FWrapper = styled("section")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "row",
  borderRadius: "1rem",
  flexWrap: "wrap",
  paddingTop: "5rem",
  paddingBottom: "5rem",
  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.up("xs")]: {
    marginTop: "calc(20rem - 40vw)",
    paddingTop: "5rem",
  },
  [theme.breakpoints.up("sm")]: {
    marginTop: "0rem",
    paddingTop: "5rem",
  },
}));

const CardFeatureBlock = ({
  titles,
  bodys,
  badgeLabel,
}: CardFeatureBlockProps) => {
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
