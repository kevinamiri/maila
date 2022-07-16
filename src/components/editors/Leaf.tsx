import React from "react";
import { css, cx } from "@emotion/css";
import { styled } from "@mui/material/styles";

const Del = styled("del")(({ theme }) => ({
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.background.default,
}));

const PrimarySpan = styled("span")(({ theme }) => ({
  color: theme.palette.text.primary,
}));

const Code = ({ attributes, children, leaf }) => {
  return (
    <span
      {...attributes}
      className={css`
        font-family: monospace;
        background: hsla(0, 0%, 100%, 0.5);

        ${leaf.comment &&
        css`
          color: slategray;
        `}

        ${(leaf.operator || leaf.url) &&
        css`
          color: #9a6e3a;
        `}
    ${leaf.keyword &&
        css`
          color: #07a;
        `}
    ${(leaf.variable || leaf.regex) &&
        css`
          color: #e90;
        `}
    ${(leaf.number ||
          leaf.boolean ||
          leaf.tag ||
          leaf.constant ||
          leaf.symbol ||
          leaf["attr-name"] ||
          leaf.selector) &&
        css`
          color: #905;
        `}
    ${leaf.punctuation &&
        css`
          color: #999;
        `}
    ${(leaf.string || leaf.char) &&
        css`
          color: #690;
        `}
    ${(leaf.function || leaf["class-name"]) &&
        css`
          color: #dd4a68;
        `}
      `}
    >
      {children}
    </span>
  );
};

export const Leaf = ({ attributes, children, leaf }) => {
  // using switch
  switch (true) {
    case leaf.bold:
      children = <strong>{children}</strong>;
      break;
    case leaf.highlight:
      children = (
        <mark style={{ backgroundColor: "rgb(79, 217, 201)" }}>{children}</mark>
      );
      break;
    case leaf.code:
      children = (
        <Code {...attributes} leaf={leaf}>
          {children}
        </Code>
      );
      break;
    case leaf.selecthighlight:
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
      break;
    case leaf.italic:
      children = <em>{children}</em>;
      break;
    case leaf.underline:
      children = <u>{children}</u>;
      break;
    case leaf.strikethrough:
      children = <Del>{children}</Del>;
      break;
    default:
      return <PrimarySpan {...attributes}>{children}</PrimarySpan>;
  }
};

export default Leaf;
