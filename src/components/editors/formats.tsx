import type { FC, ReactNode } from "react";
import React from "react";
import { Box, IconButton, styled, Theme, Tooltip } from "@mui/material";
import type { SxProps } from "@mui/system";
import { useSelector } from "react-redux";
import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";
import { useSlate } from "editable-slate-react";
import ToggleButton from "@mui/material/ToggleButton";
import { Editor, Transforms, Element as SlateElement, Descendant } from "slate";
const LIST_TYPES = ["numbered-list", "bulleted-list"];

export type SeverityPillColor =
  | "primary"
  | "secondary"
  | "error"
  | "info"
  | "warning"
  | "success";

interface SeverityPillProps {
  children?: ReactNode;
  color?: SeverityPillColor;
  style?: {};
  sx?: SxProps<Theme>;
}

interface SeverityPillRootProps {
  ownerState: {
    color: SeverityPillColor;
  };
}

const TabLabel = styled("kbd")<SeverityPillRootProps>(
  ({ theme, ownerState }) => {
    const backgroundColor = theme.palette[ownerState.color].main;
    const color = theme.palette[ownerState.color].contrastText;

    return {
      alignItems: "center",
      backgroundColor,
      borderRadius: 6,
      color,
      display: "inline-flex",
      flexGrow: 0,
      flexShrink: 0,
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(10),
      fontWeight: 600,
      justifyContent: "center",
      minWidth: 10,
      paddingLeft: theme.spacing(0.5),
      paddingRight: theme.spacing(0.5),
      textTransform: "uppercase",
      whiteSpace: "nowrap",
    };
  }
);

/**
 * KBD is a component that displays a severity pill.
 */
export const KBD: FC<SeverityPillProps> = (props) => {
  const { color = "primary", children, ...other } = props;

  const ownerState = { color };

  return (
    <TabLabel ownerState={ownerState} {...other}>
      {children}
    </TabLabel>
  );
};

interface TabButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  hasTab?: boolean;
}

/**
 *
 * TabButton is a component that displays a TAB button on the top right side of the editor.
 *
 */
export const TabButton = ({ onClick, hasTab }: TabButtonProps) => {
  const { progressValue } = useSelector((state) => state.progressValue);
  const loading = progressValue > 0 && progressValue < 100;
  const tabIcon = hasTab ? "  TAB" : "";
  return (
    <Box
      sx={{
        m: 0.5,
      }}
    >
      <Tooltip placement='top' title='Autocomplete (TAB)'>
        <IconButton
          size='small'
          sx={{
            border: 0,
            padding: "2px",
            borderRadius: 1,
          }}
          disabled={loading}
          onClick={onClick}
        >
          <KBD
            sx={{
              alignSelf: "flex-end",
              mr: 1,
              ml: 1,
              mt: 1,
            }}
            color='success'
          >
            <AutoFixHighRoundedIcon sx={{ fontSize: "1.1rem" }} />
            {loading ? "Loading..." : tabIcon}
          </KBD>
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export const toggleBlock = (editor, format) => {
  const isActive = isBlockActive(editor, format);
  const isList = LIST_TYPES.includes(format);

  Transforms.unwrapNodes(editor, {
    match: (n) =>
      LIST_TYPES.includes(
        !Editor.isEditor(n) && SlateElement.isElement(n) && n.type
      ),
    split: true,
  });
  const newProperties: Partial<SlateElement> = {
    type: isActive ? "paragraph" : isList ? "list-item" : format,
  };
  Transforms.setNodes(editor, newProperties);

  if (!isActive && isList) {
    const block = { type: format, children: [] };
    Transforms.wrapNodes(editor, block);
  }
};

export const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format);

  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

export const TransformsSelect = (editor) => {
  Transforms.select(editor, {
    anchor: Editor.start(editor, []),
    focus: Editor.end(editor, []),
  });
};

export const isBlockActive = (editor, format) => {
  const { selection } = editor;
  if (!selection) return false;

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: (n) =>
        !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === format,
    })
  );

  return !!match;
};

export const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};

export const Blockquote = styled("blockquote")(({ theme }) => ({
  borderLeft: `3px solid ${theme.palette.text.primary}`,
  fontStyle: "italic",
  paddingLeft: "0.8em",
}));

export const Element = ({ attributes, children, element }) => {
  switch (element.type) {
    case "block-quote":
      return <Blockquote {...attributes}>{children}</Blockquote>;
    case "bulleted-list":
      return <ul {...attributes}>{children}</ul>;
    case "heading-one":
      return <h1 {...attributes}>{children}</h1>;
    case "heading-two":
      return <h2 {...attributes}>{children}</h2>;
    case "list-item":
      return <li {...attributes}>{children}</li>;
    case "strike-through":
      return <del {...attributes}>{children}</del>;
    case "numbered-list":
      return <ol {...attributes}>{children}</ol>;
    default:
      return (
        <p
          style={{ lineHeight: "1.4rem", backgroundColor: "f4f9f9" }}
          {...attributes}
        >
          {children}
        </p>
      );
  }
};

export const BlockButton = ({ format, children }) => {
  const editor = useSlate();
  return (
    <Box
      sx={{
        m: 0.5,
      }}
    >
      <ToggleButton
        value={format}
        size='small'
        sx={{
          border: 0,
          padding: "4px",
        }}
        selected={isBlockActive(editor, format)}
        onMouseDown={(event) => {
          event.preventDefault();
          toggleBlock(editor, format);
        }}
      >
        {children}
      </ToggleButton>
    </Box>
  );
};

export const MarkButton = ({ format, children }) => {
  const editor = useSlate();
  return (
    <Box
      sx={{
        m: 0.5,
      }}
    >
      <ToggleButton
        size='small'
        sx={{
          border: 0,
          padding: "4px",
        }}
        value={format}
        selected={isMarkActive(editor, format)}
        onMouseDown={(event) => {
          event.preventDefault();
          toggleMark(editor, format);
        }}
      >
        {children}
      </ToggleButton>
    </Box>
  );
};
