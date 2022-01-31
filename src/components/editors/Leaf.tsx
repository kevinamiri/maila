import React from "react";
import { css, cx } from "@emotion/css";
import { styled } from "@mui/material/styles";

export const Leaf = ({ attributes, children, leaf }) => {
  const WSpan = styled("span")(({ theme }) => ({
    color: theme.palette.text.primary,
  }));
  if (leaf.bold) {
    children = <strong>{children}</strong>;
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
          color: black;
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

  return (
    <span
      {...attributes}
      className={css`
        color: black;
      `}
    >
      {children}
    </span>
  );
};

export default Leaf;
