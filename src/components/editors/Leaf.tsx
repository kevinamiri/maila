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

const IncorrectParagraph = styled("span")(({ theme }) => ({
  color: theme.palette.text.primary,
  borderBottom: "2px solid #f03000",
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
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  } else if (leaf.highlight) {
    children = (
      <mark style={{ backgroundColor: "rgb(79, 217, 201)" }}>{children}</mark>
    );
  } else if (leaf.code) {
    children = (
      <Code {...attributes} leaf={leaf}>
        {children}
      </Code>
    );
  } else if (leaf.selecthighlight) {
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
  } else if (leaf.italic) {
    children = <em>{children}</em>;
  } else if (leaf.underline) {
    children = <u>{children}</u>;
  } else if (leaf.incorrectparagraph) {
    children = <IncorrectParagraph>{children}</IncorrectParagraph>;
  } else if (leaf.strikethrough) {
    children = <Del>{children}</Del>;
  } else {
    return <PrimarySpan {...attributes}>{children}</PrimarySpan>;
  }

  return <PrimarySpan {...attributes}>{children}</PrimarySpan>;
};
