import React from "react";
import { Box } from "@mui/material";
import CardTstimonials from "./card/CardTstimonials";

const TestimonialsBlock = () => (
  <Box
    sx={{
      backgroundColor: "background.default",
      minHeight: "100%",
      p: 1,
      display: "flex",
      justifyContent: "center",
      flexDirection: "row",
      flexWrap: "wrap",
    }}
  >
    <CardTstimonials body='Nobody has written a word about us yet. You might want to be the first person to tag # maila.ai on Twitter.' />
    <CardTstimonials body='Nobody has written a word about us yet. You might want to be the first person to tag # maila.ai on Twitter.' />
    <CardTstimonials body='Nobody has written a word about us yet. You might want to be the first person to tag # maila.ai on Twitter.' />
  </Box>
);
export default TestimonialsBlock;
