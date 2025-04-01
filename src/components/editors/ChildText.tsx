import React, { useState, useRef } from "react";
import { Editable, Slate, useSlate, useSelected, useFocused } from "editable-slate-react";
import { Editor, Transforms, Node, Descendant, Element as SlateElement } from "slate";
import { styled } from "@mui/material/styles";
import CardContent from "@mui/material/CardContent";
import isHotkey from "is-hotkey";
import FooterEditorBar from "./FooterEditorBar";
import { selectedText, serialize } from "hooks/currentSelectEditor";
import { useSelector } from "react-redux";
import { setCurrentWordRange } from "slices/editorParams";
import Box from "@mui/material/Box";
import ToggleButton from "@mui/material/ToggleButton";
import { useDispatch } from "store";

// Keyboard shortcuts mapping
const HOTKEYS = {
  "mod+b": "bold",
  "mod+i": "italic",
  "mod+u": "underline",
  "mod+`": "code",
  "mod+a": "selectAll",
  "alt+l": "lightText",
  "alt+d": "strikethrough",
};

const LIST_TYPES = ["numbered-list", "bulleted-list"];
const TEXT_ALIGN_TYPES = ["left", "center", "right", "justify"];

// Element type with custom properties
type CustomElement = SlateElement & {
  type?: string;
  align?: string;
  children: Descendant[];
};

const ChildText = (props) => {
  const editor = props.mainEditor;
  const editor2 = props.correspondedEditor;
  const dispatch = useDispatch();
  const renderElement = React.useCallback((props) => <Element {...props} />, []);
  const renderLeaf = React.useCallback((props) => <Leaf {...props} />, []);
  const { currentWordRange } = useSelector((state: any) => state.editorParams);
  
  // Get saved content or empty paragraph
  const getDefaultValue = () => 
    JSON.parse(typeof window !== "undefined" && window.localStorage.getItem(props.storageName)) || 
    [{ type: "paragraph", children: [{ text: "" }] }];

  const [value, setValue] = useState<Descendant[]>(getDefaultValue);

  // Transfer text to main editor
  const transferToMain = () => {
    const selectedContent = (editor2.selection && selectedText(editor2)) || serialize(editor2);
    
    if (editor.selection) {
      Transforms.insertText(editor, selectedContent, { at: editor.selection });
    } else {
      const insertPos = currentWordRange || Editor.end(editor, []);
      Transforms.insertText(editor, selectedContent, { at: insertPos });
      Transforms.select(editor, insertPos);
      dispatch(setCurrentWordRange(false));
    }
  };

  // Save content on change
  const handleChanges = (newValue) => {
    setValue(newValue);
    localStorage.setItem(props.storageName, JSON.stringify(newValue));
  };

  return (
    <CardContent>
      <Box
        sx={{
          boxSizing: "border-box",
          fontSize: "1em",
          lineHeight: "1.5rem",
          boxShadow: theme => `0 0 0 2px ${theme.palette.divider}`,
          borderRadius: theme => `calc(1px * ${theme.shape.borderRadius})`,
          background: theme => theme.palette.background.default,
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          pb: "0.15rem",
          pt: 1,
          px: 1,
        }}
      >
        <Box>
          <Slate editor={editor2} value={value} onChange={handleChanges}>
            <Editable
              renderElement={renderElement}
              renderLeaf={renderLeaf}
              spellCheck={true}
              style={{ overflow: "auto" }}
              onKeyDown={event => {
                for (const hotkey in HOTKEYS) {
                  if (isHotkey(hotkey, event as any)) {
                    event.preventDefault();
                    const mark = HOTKEYS[hotkey];
                    
                    if (hotkey === "mod+a") {
                      Transforms.select(editor2, {
                        anchor: Editor.start(editor2, []),
                        focus: Editor.end(editor2, []),
                      });
                    } else {
                      toggleMark(editor2, mark);
                    }
                  }
                }
              }}
            />
          </Slate>
        </Box>
        <FooterEditorBar editor={editor2} handleTransfer={transferToMain} />
      </Box>
    </CardContent>
  );
};

// Toggle block formatting
const toggleBlock = (editor, format) => {
  const blockType = TEXT_ALIGN_TYPES.includes(format) ? "align" : "type";
  const isActive = isBlockActive(editor, format, blockType);
  const isList = LIST_TYPES.includes(format);

  // Unwrap list items when changing format
  Transforms.unwrapNodes(editor, {
    match: n => 
      !Editor.isEditor(n) && 
      SlateElement.isElement(n) && 
      LIST_TYPES.includes(n.type) && 
      !TEXT_ALIGN_TYPES.includes(format),
    split: true,
  });

  // Set node properties
  const newProps: Partial<CustomElement> = TEXT_ALIGN_TYPES.includes(format)
    ? { align: isActive ? undefined : format }
    : { type: isActive ? "paragraph" : isList ? "list-item" : format };

  Transforms.setNodes<CustomElement>(editor, newProps);

  // Wrap in list if needed
  if (!isActive && isList) {
    Transforms.wrapNodes(editor, { type: format, children: [] });
  }
};

// Toggle text formatting
const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format);
  isActive ? Editor.removeMark(editor, format) : Editor.addMark(editor, format, true);
};

// Check if block format is active
const isBlockActive = (editor, format, blockType = "type") => {
  const { selection } = editor;
  if (!selection) return false;

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: n => 
        !Editor.isEditor(n) && 
        SlateElement.isElement(n) && 
        n[blockType] === format,
    })
  );

  return !!match;
};

// Check if text format is active
const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};

// Render element by type
const Element = ({ attributes, children, element }) => {
  const style = { textAlign: element.align };
  
  switch (element.type) {
    case "block-quote": return <blockquote style={style} {...attributes}>{children}</blockquote>;
    case "bulleted-list": return <ul style={style} {...attributes}>{children}</ul>;
    case "heading-one": return <h1 style={style} {...attributes}>{children}</h1>;
    case "heading-two": return <h2 style={style} {...attributes}>{children}</h2>;
    case "heading-three": return <h3 style={style} {...attributes}>{children}</h3>;
    case "list-item": return <li style={style} {...attributes}>{children}</li>;
    case "numbered-list": return <ol style={style} {...attributes}>{children}</ol>;
    default: return <p style={style} {...attributes}>{children}</p>;
  }
};

// Styled text components
const Del = styled("del")(({ theme }) => ({
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.background.default,
}));

const HighlightSpan = styled("span")(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

// Render text with formatting
const Leaf = ({ attributes, children, leaf }) => {
  const selected = useSelected();
  const focused = useFocused();

  if (leaf.bold) children = <strong>{children}</strong>;
  if (leaf.code) children = <code>{children}</code>;
  if (leaf.italic) children = <em>{children}</em>;
  if (leaf.underline) children = <u>{children}</u>;
  if (leaf.highlight) children = <mark>{children}</mark>;
  if (leaf.strikethrough) children = <Del>{children}</Del>;
  if (leaf.superscript) children = <sup>{children}</sup>;
  if (leaf.lightText) children = <HighlightSpan>{children}</HighlightSpan>;

  if (selected && focused) {
    children = <span style={{ backgroundColor: 'yellow' }}>{children}</span>;
  }

  return <span {...attributes}>{children}</span>;
};

// Format toggling buttons
export const BlockButton = ({ format, children }) => {
  const editor = useSlate();
  return (
    <Box sx={{ m: 0.5 }}>
      <ToggleButton
        value={format}
        size='small'
        sx={{ border: 0, padding: "4px" }}
        selected={isBlockActive(
          editor,
          format,
          TEXT_ALIGN_TYPES.includes(format) ? "align" : "type"
        )}
        onMouseDown={e => {
          e.preventDefault();
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
    <Box sx={{ m: 0.5 }}>
      <ToggleButton
        size='small'
        sx={{ border: 0, padding: "4px" }}
        value={format}
        selected={isMarkActive(editor, format)}
        onMouseDown={e => {
          e.preventDefault();
          toggleMark(editor, format);
        }}
      >
        {children}
      </ToggleButton>
    </Box>
  );
};

export default ChildText;