import React from "react";
import { css, cx } from "@emotion/css";
import { styled } from "@mui/material/styles";

const WSpan = styled("span")(({ theme }) => ({
  color: theme.palette.text.primary,
  backgroundColor: "#79ffe1",
}));

const SecondarySpan = styled("span")(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

const PrimarySpan = styled("span")(({ theme }) => ({
  color: theme.palette.text.primary,
}));

export const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.highlight) {
    children = (
      <mark style={{ backgroundColor: "rgb(20, 184, 166)" }}>{children}</mark>
    );
  }

  if (leaf.code) {
    children = <code>{children}</code>;
  }

  if (leaf.highlight) {
    children = <WSpan>{children}</WSpan>;
  }

  if (leaf.selecthighlight) {
    children = (
      <span
        className={css`
          color: #6b778c;
          background-color: yellow;
        `}
      >
        {children}
      </span>
    );
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  return <PrimarySpan {...attributes}>{children}</PrimarySpan>;
};

export default Leaf;
