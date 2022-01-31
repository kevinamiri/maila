import React from "react";
import styled from "@emotion/styled";

const UnderlinedText = styled("span")<{}>(() => ({
  backgroundImage: `linear-gradient(to right, rgba(0, 200, 255, 0.4) 75%, rgba(0, 200, 255, 0.4) 75%)`,
  backgroundPosition: "0 0.9em",
  backgroundRepeat: "repeat-x",
  backgroundSize: "2px 10px",
}));

export default UnderlinedText;
