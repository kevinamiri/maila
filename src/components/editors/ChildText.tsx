import React, { useState } from "react";
import { Editable, Slate, useSlate } from "editable-slate-react";
import {
  Editor,
  Transforms,
  Node as SlateNode,
  Descendant,
  Element as SlateElement,
} from "slate";
import { styled } from "@mui/material/styles";
import { Text as Textt } from "slate";
import CardContent from "@mui/material/CardContent";
import isHotkey from "is-hotkey";
import FooterEditorBar from "./FooterEditorBar";
import { selectedText, serialize } from "hooks/currentSelectEditor";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentWordRange } from "slices/editorParams";
import Box from "@mui/material/Box";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
const SITE_KEY = "6LcA4HoaAAAAAMHEQHKWWXyoi1TaCiDgSJoy2qtP";
import FormatBoldRoundedIcon from "@mui/icons-material/FormatBold";
import FormatItalicRoundedIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedRoundedIcon from "@mui/icons-material/FormatUnderlined";
import CodeRoundedIcon from "@mui/icons-material/Code";
import LooksOneRoundedIcon from "@mui/icons-material/LooksOne";
import LooksTwoRoundedIcon from "@mui/icons-material/LooksTwo";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuote";
import FormatListNumberedRoundedIcon from "@mui/icons-material/FormatListNumbered";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulleted";
import { StyledToggleButtonGroup } from "./toggle-button-group";

const HOTKEYS = {
  "mod+b": "bold",
  "mod+i": "italic",
  "mod+u": "underline",
  "mod+`": "code",
  "mod+a": "selectAll",
  "alt+l": "lightText",
  "alt+d": "strikethrough",
};

import ToggleButton from "@mui/material/ToggleButton";

const LIST_TYPES = ["numbered-list", "bulleted-list"];
const TEXT_ALIGN_TYPES = ["left", "center", "right", "justify"];

const ChildText = (props) => {
  const editor = props.mainEditor;
  const editor2 = props.correspondedEditor;
  const dispatch = useDispatch();
  const renderElement = React.useCallback(
    (props) => <Element {...props} />,
    []
  );
  const renderLeaf = React.useCallback((props) => <Leaf {...props} />, []);
  const { currentWordRange } = useSelector((state) => state.editorParams);
  const defaultValue = () => {
    return (
      JSON.parse(
        typeof window !== "undefined" &&
          window.localStorage.getItem(props.storageName)
      ) || [
        {
          type: "paragraph",
          children: [{ text: "" }],
        },
      ]
    );
  };
  const isDeleteHotkey = isHotkey("backspace");

  const [value, setValue] = useState<Descendant[]>(defaultValue);

  /**
   * Following function would send the value of the editor to main editor
   */
  const TransferingToMainEditor = () => {
    /* 
     If we have editor2-selected text, the value is the selected text in editor2.
    But if we have no selected value in editor2, the whole text is the value for process of inserting
    */

    // editor2-selected text
    const fragmentText =
      editor2.selection &&
      SlateNode.fragment(editor2, editor2.selection)
        .map((x) => SlateNode.string(x))
        .join("\n");

    // if we selected something in editor2, otherwise false
    const selectStatus = (editor2.selection && selectedText(editor2)) || false;
    /*
    Thus If we have not selected text in editor2, we have to set the value of editor2 to the whole text.
    */
    const selectedContent = selectStatus ? selectStatus : serialize(editor2);

    // If save selection exist, we have to set the selection to the save selection.
    editor.selection &&
      Transforms.insertText(editor, selectedContent, {
        at: editor.selection,
      });
    /* 
    If !editor.selection does not exist
    No saved select or prev select ? then end of the line (then the selectedContent will be inserted at the end of the editor.)
    */
    /**
     * here editor.selection means that selected text exist but cursor is not in the editor
     */
    if (!editor.selection) {
      Transforms.insertText(editor, selectedContent, {
        at: currentWordRange ? currentWordRange : Editor.end(editor, []),
      });

      // if we use transform 'move' then the cursor will move to the end of the current line
      Transforms.select(
        editor,
        currentWordRange ? currentWordRange : Editor.end(editor, [])
      );
      dispatch(setCurrentWordRange(false));
    }

    // (!editor.selection) &&
    //   Transforms.insertText(editor, selectedContent, {
    //     at: currentWordRange ? currentWordRange : Editor.end(editor, []),
    //   });
  };

  const saveContextText = React.useRef(defaultValue);
  // Add the initial value when setting up our state.
  const handleChanges = (newValue) => {
    setValue(newValue);
    let content = JSON.stringify(newValue);
    localStorage.setItem(props.storageName, content);
  };

  // const savedSelectedPosition = React.useRef(editor2.selection);

  // const divRef = React.useRef<HTMLDivElement>(null);

  // const onFocus = React.useCallback(() => {
  //   if (!editor2.selection) {
  //     Transforms.select(
  //       editor2,
  //       savedSelectedPosition.current ?? Editor.end(editor2, [])
  //     );
  //   }
  // }, [editor2]);

  // const onBlur = React.useCallback(() => {
  //   savedSelectedPosition.current = editor2.children
  // }, []);

  // const focusEditor = React.useCallback(
  //   (e: React.MouseEvent) => {
  //     e.preventDefault();
  //     ReactEditor.focus(editor2);
  //     if (e.target === divRef.current) {
  //     }
  //   },
  //   [editor2]
  // );

  const selectedSentence = (editor: Editor) => {
    if (!editor.selection) return;
    let [node]: any = Editor.node(editor, editor.selection);
    if (!node.text) return;
    // all sentences in the node
    const allSentences = node.text.split(/(?<=[.?!\n\:])\s/);
    // current sentence based on the the text cursor's selection
    let currentSentence = "";
    // 1. get the selection
    const selection = editor.selection;
    // 2. get the current cursor position
    const cursorPosition = selection.anchor.offset;
    // 5. get the current sentence
    let currentSentenceStart = 0;
    let currentSentenceEnd = 0;
    let currentSentenceIndex = 0;
    for (let i = 0; i < allSentences.length; i++) {
      currentSentenceEnd += allSentences[i].length + 1;
      if (currentSentenceEnd > cursorPosition) {
        currentSentence = allSentences[i];
        currentSentenceStart = currentSentenceEnd - currentSentence.length - 1;
        currentSentenceIndex = i;
        break;
      }
    }
    const fragmentText =
      editor.selection &&
      SlateNode.fragment(editor, editor.selection)
        .map((x) => SlateNode.string(x))
        .join("\n");
    // 6. if selected string text fragmentText.length > currentSentence.length then
    // return allSentences that contains the selected text
    if (fragmentText.length > currentSentence.length) {
      const selectedSentences = allSentences.filter((sentence, index) => {
        return (
          (index >= currentSentenceIndex &&
            index <=
              currentSentenceIndex +
                fragmentText.split(/(?<=[.?!\n\:])\s/).length -
                1) ||
          currentSentenceIndex +
            fragmentText.split(/(?<=[.?!\n\:])\s/).length +
            1
        );
      });
      return selectedSentences.join(" ");
    }

    return currentSentence;
  };

  const lightingText = React.useRef("");

  // const decorate = React.useCallback(([node, path]) => {
  //   const ranges = [];

  //   if (lightingText.current && Textt.isText(node)) {
  //     const { text } = node;
  //     const parts = text.split(lightingText.current);
  //     let offset = 0;

  //     parts.forEach((part, i) => {
  //       if (i !== 0) {
  //         ranges.push({
  //           anchor: { path, offset: offset - lightingText.current.length },
  //           focus: { path, offset },
  //           lightText: true,
  //         });
  //       }

  //       offset = offset + part.length + lightingText.current.length;
  //     });
  //   }
  //   return ranges;
  // }, []);

  // if (isTextBlurred) {
  //   Editor.removeMark(editor2, "lightText");
  // }

  // if (isTextBlurred && previousEditorSelectedText.current) {
  //   Editor.addMark(editor2, "lightText", true);
  // }

  return (
    <CardContent>
      <Box
        sx={{
          boxSizing: "border-box",
          fontSize: "1em",
          lineHeight: "1.5rem",
          boxShadow: (theme) => `0 0 0 2px ${theme.palette.divider}`,
          borderRadius: (theme) => `calc(1px * ${theme.shape.borderRadius})`,
          background: (theme) => theme.palette.background.default,
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          pb: "0.15rem",
          pt: 1,
          px: 1,
        }}
      >
        <Box>
          <Slate
            editor={editor2}
            value={value}
            onChange={(value) => handleChanges(value)}
          >
            <Editable
              renderElement={renderElement}
              renderLeaf={renderLeaf}
              spellCheck={true}
              style={{ overflow: "auto" }}
              onKeyDown={(event) => {
                for (const hotkey in HOTKEYS) {
                  if (isHotkey(hotkey, event as any)) {
                    event.preventDefault();
                    const isSellect = hotkey === "mod+a" ? true : false;
                    if (hotkey === "mod+a") {
                      Transforms.select(editor2, {
                        anchor: Editor.start(editor2, []),
                        focus: Editor.end(editor2, []),
                      });
                    }
                    const mark = HOTKEYS[hotkey];
                    !isSellect && toggleMark(editor2, mark);
                  }
                }
              }}
            />
          </Slate>
        </Box>
        <FooterEditorBar
          editor={editor2}
          handleTranser={TransferingToMainEditor}
        />
      </Box>
    </CardContent>
  );
};

const toggleBlock = (editor, format) => {
  const isActive = isBlockActive(
    editor,
    format,
    TEXT_ALIGN_TYPES.includes(format) ? "align" : "type"
  );
  const isList = LIST_TYPES.includes(format);

  Transforms.unwrapNodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) &&
      SlateElement.isElement(n) &&
      LIST_TYPES.includes(n.type) &&
      !TEXT_ALIGN_TYPES.includes(format),
    split: true,
  });
  let newProperties: Partial<SlateElement>;
  if (TEXT_ALIGN_TYPES.includes(format)) {
    newProperties = {
      align: isActive ? undefined : format,
    };
  } else {
    newProperties = {
      type: isActive ? "paragraph" : isList ? "list-item" : format,
    };
  }
  Transforms.setNodes<SlateElement>(editor, newProperties);

  if (!isActive && isList) {
    const block = { type: format, children: [] };
    Transforms.wrapNodes(editor, block);
  }
};

const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format);

  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

const isBlockActive = (editor, format, blockType = "type") => {
  const { selection } = editor;
  if (!selection) return false;

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: (n) =>
        !Editor.isEditor(n) &&
        SlateElement.isElement(n) &&
        n[blockType] === format,
    })
  );

  return !!match;
};

const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};

const Element = ({ attributes, children, element }) => {
  const style = { textAlign: element.align };
  switch (element.type) {
    case "block-quote":
      return (
        <blockquote style={style} {...attributes}>
          {children}
        </blockquote>
      );
    case "bulleted-list":
      return (
        <ul style={style} {...attributes}>
          {children}
        </ul>
      );
    case "heading-one":
      return (
        <h1 style={style} {...attributes}>
          {children}
        </h1>
      );
    case "heading-two":
      return (
        <h2 style={style} {...attributes}>
          {children}
        </h2>
      );
    case "heading-three":
      return (
        <h3 style={style} {...attributes}>
          {children}
        </h3>
      );
    case "list-item":
      return (
        <li style={style} {...attributes}>
          {children}
        </li>
      );
    case "numbered-list":
      return (
        <ol style={style} {...attributes}>
          {children}
        </ol>
      );

    default:
      return (
        <p style={style} {...attributes}>
          {children}
        </p>
      );
  }
};

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

const HighlightSpan = styled("span")(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.code) {
    children = <code>{children}</code>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underline) {
    children = <u>{children}</u>;
  }
  if (leaf.highlight) {
    children = <mark>{children}</mark>;
  }
  if (leaf.strikethrough) {
    children = <Del>{children}</Del>;
  }
  if (leaf.superscript) {
    children = <sup>{children}</sup>;
  }
  if (leaf.lightText) {
    children = <HighlightSpan>{children}</HighlightSpan>;
  }

  return <span {...attributes}>{children}</span>;
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
        selected={isBlockActive(
          editor,
          format,
          TEXT_ALIGN_TYPES.includes(format) ? "align" : "type"
        )}
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

export default ChildText;
