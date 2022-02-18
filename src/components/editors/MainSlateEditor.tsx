import React, { useCallback, useState } from "react";
import isHotkey from "is-hotkey";
import { Editable, useSlate, Slate, ReactEditor } from "editable-slate-react";
import {
  Editor,
  Transforms,
  Range,
  Element as SlateElement,
  BaseEditor,
  Descendant,
} from "slate";
import { Text, Node as SlateNode } from "slate";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ToggleButton from "@mui/material/ToggleButton";
import { useTheme } from "@mui/material/styles";
import Leaf from "./Leaf";
import {
  updateCommandPointWords,
  setCurrentWordRange,
  updateSelectionStatus,
  updateSelectedText,
} from "../../slices/editorParams";
import { useDispatch } from "react-redux";
import FooterEditorBar from "./FooterEditorBar";
import { selectedText } from "hooks/currentSelectEditor";

const HOTKEYS = {
  "mod+b": "bold",
  "mod+i": "italic",
  "mod+u": "underline",
  "mod+`": "code",
  //
  "mod+a": "selectAll",
};
const LIST_TYPES = ["numbered-list", "bulleted-list"];
// @refresh reset
const MainSlateEditor = (props) => {
  const renderElement = useCallback((props) => <Element {...props} />, []);
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);
  const FooterEditorBarX = useCallback(
    (props) => <FooterEditorBar {...props} />,
    []
  );
  const editor = props.editor;
  const editor2 = props.editor2;
  const editor3 = props.editor3;
  const editor4 = props.editor4;
  let inputLimitation = props.limitChar;
  const dispatch = useDispatch();

  const defaultValue = () => {
    return (
      JSON.parse(
        typeof window !== "undefined" && window.localStorage.getItem("content")
      ) || [
        {
          type: "paragraph",
          children: [{ text: "" }],
        },
      ]
    );
  };

  const savedSelection = React.useRef(editor.selection);

  const divRef = React.useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const onFocus = React.useCallback(() => {
    ReactEditor.focus(editor);
    // if (!editor.selection) {
    //   Transforms.select(
    //     editor,
    //     savedSelection.current ?? Editor.end(editor, [])
    //   );
    // }
    divRef.current.style.boxShadow = `0 0 0 2px ${theme.palette.primary.main}`;
  }, []);

  // const onBlur = React.useCallback(() => {
  //   divRef.current.style.boxShadow = `0 0 0 1px ${theme.palette.action.disabled}`;
  //   !editor.selection && dispatch(setCurrentWordRange(savedSelection.current));
  //   if (!editor.selection) return;
  //   dispatch(setCurrentWordRange(editor.selection));
  // }, []);

  const onBlur = React.useCallback(() => {
    // savedSelection.current = editor.selection;
    // dispatch(setCurrentWordRange(editor.selection));
    divRef.current.style.boxShadow = `0 0 0 1px ${theme.palette.action.disabled}`;
  }, []);

  const [value, setValue] = useState<Descendant[]>(defaultValue);

  const handleChange = (value: SlateNode[]) => {
    setValue(value);
    const content = JSON.stringify(value);
    localStorage.setItem("content", content);
    if (!editor.selection) return;
    dispatch(setCurrentWordRange(editor.selection));
    // savedSelection.current = editor.selection;
    // const selectedText = Editor.string(editor, editor.selection);
    const fragment = SlateNode.fragment(editor, editor.selection);
    const fragmentsText = fragment.map((x) => SlateNode.string(x)).join("\n");
    dispatch(updateSelectedText(fragmentsText));
  };

  // const updateCurrentWord = () => {
  //   if (!editor.selection) return;
  //   let [node]: any = Editor.node(editor, editor.selection);
  //   const selectedTextStr = Editor.string(editor, editor.selection);
  //   if (!node.text) return;
  //   const textToSelection = node.text.slice(
  //     0,
  //     Range.start(editor.selection).offset
  //   );
  //   const selectedTextR = node.text.slice(
  //     editor.selection.anchor.offset,
  //     editor.selection.focus.offset
  //   );
  //   const selectedTextL = node.text.slice(
  //     editor.selection.focus.offset,
  //     editor.selection.anchor.offset
  //   );
  //   const whichPointisStarting = selectedTextR
  //     ? { offset: editor.selection.anchor.offset }
  //     : { offset: editor.selection.focus.offset };

  //   let selectedText = selectedTextR ? selectedTextR : selectedTextL;
  //   dispatch(updateSelectedText(selectedTextStr));
  //   console.log(selectedTextStr);
  //   const commandCompatiblePointWords = {
  //     offset: whichPointisStarting.offset,
  //     path: editor.selection.anchor.path,
  //     text: selectedText,
  //   };
  //   dispatch(updateCommandPointWords(commandCompatiblePointWords));

  //   // let selectedPoint = {
  //   //   anchor: {
  //   //     path: editor.selection.anchor.path,
  //   //     offset: editor.selection.anchor.offset,
  //   //   },
  //   //   focus: {
  //   //     path: editor.selection.focus.path,
  //   //     offset: editor.selection.focus.offset,
  //   //   },
  //   // };

  //   // dispatch(setCurrentWordRange(selectedPoint));
  //   // console.log(selectedPoint);
  // };

  return (
    <>
      <Grid
        container
        ref={divRef}
        item
        xs={12}
        direction='row'
        justifyContent='center'
        alignItems='flex-end'
        sx={{
          boxSizing: "border-box",
          boxShadow: (theme) => `0 0 0 2px ${theme.palette.divider}`,
          borderRadius: (theme) => `calc(1px * ${theme.shape.borderRadius})`,
          p: 1,
        }}
      >
        <Grid
          item
          sx={{
            color: (theme) => theme.palette.text.secondary,
          }}
          xs={12}
        >
          <Slate
            editor={editor}
            value={value}
            onChange={(value) => handleChange(value)}
          >
            <Editable
              renderElement={renderElement}
              renderLeaf={renderLeaf}
              placeholder={props.placeholder}
              spellCheck
              autoFocus
              onFocus={onFocus}
              onBlur={onBlur}
              onKeyDown={(event) => {
                for (const hotkey in HOTKEYS) {
                  if (isHotkey(hotkey, event as any)) {
                    event.preventDefault();
                    const mark = HOTKEYS[hotkey];
                    if (mark === "selectAll") {
                      savedSelection.current = editor.selection;
                      dispatch(setCurrentWordRange(savedSelection.current));
                      Transforms.select(editor, {
                        anchor: Editor.start(editor, []),
                        focus: Editor.end(editor, []),
                      });
                    }
                    toggleMark(editor, mark);
                  }
                }
              }}
            />
          </Slate>
        </Grid>
        <FooterEditorBar disabled={true} editor={editor} />
      </Grid>
    </>
  );
};

const serialize = (editorname: Editor) => {
  return editorname.children.map((x) => SlateNode.string(x)).join("\n");
};

const toggleBlock = (editor, format) => {
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

const toggleFormat = (editor, format) => {
  const isActive = isFormatActive(editor, format);
  Transforms.setNodes(
    editor,
    { [format]: isActive ? null : true },
    { match: Text.isText, split: true }
  );
};

const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format);

  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

const TransformsSelect = (editor) => {
  Transforms.select(editor, {
    anchor: Editor.start(editor, []),
    focus: Editor.end(editor, []),
  });
};

const isFormatActive = (editor, format) => {
  const [match] = Editor.nodes(editor, {
    match: (n) => n[format] === true,
    mode: "all",
  });
  return !!match;
};

const isBlockActive = (editor, format) => {
  const [match] = Editor.nodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === format,
  });

  return !!match;
};

const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};

const Element = ({ attributes, children, element }) => {
  switch (element.type) {
    case "block-quote":
      return <blockquote {...attributes}>{children}</blockquote>;
    case "bulleted-list":
      return <ul {...attributes}>{children}</ul>;
    case "heading-one":
      return <h1 {...attributes}>{children}</h1>;
    case "heading-two":
      return <h2 {...attributes}>{children}</h2>;
    case "list-item":
      return <li {...attributes}>{children}</li>;
    case "numbered-list":
      return <ol {...attributes}>{children}</ol>;
    default:
      return (
        <p style={{ backgroundColor: "f4f9f9" }} {...attributes}>
          {children}
        </p>
      );
  }
};

const BlockButton = ({ format, children }) => {
  const editor = useSlate();
  return (
    <Box ml={1} mt={1}>
      <ToggleButton
        value={format}
        selected={isBlockActive(editor, format)}
        onMouseDown={(event) => {
          event.preventDefault();
          toggleBlock(editor, format);
        }}
        style={{ lineHeight: 1 }}
      >
        {children}
      </ToggleButton>
    </Box>
  );
};

const MarkButton = ({ format, children }) => {
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
          padding: "1px",
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
const HoverButton = ({ format, children }) => {
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
          padding: "1px",
        }}
        value={format}
        onMouseDown={(event) => {
          event.preventDefault();
        }}
      >
        {children}
      </ToggleButton>
    </Box>
  );
};

const getTheTextValueOfTheEditor = (editorValue) => {
  const arrofTexts = [];
  const ParagraphesorNodes = editorValue
    .map((x) => x)
    .map((x) => x.children[0]);
  for (let i = 0; i < ParagraphesorNodes.length; i++) {
    const element = ParagraphesorNodes[i];
    arrofTexts.push(element.text);
  }
  return arrofTexts.join("");
};

const FormatButton = ({ format, children }) => {
  const editor = useSlate();
  return (
    <Box ml={1} mt={1}>
      <ToggleButton
        value={format}
        selected={isFormatActive(editor, format)}
        onMouseDown={(event) => {
          event.preventDefault();
          toggleFormat(editor, format);
        }}
      >
        {children}
      </ToggleButton>
    </Box>
  );
};

export default MainSlateEditor;
