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
import { Node as SlateNode } from "slate";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ToggleButton from "@mui/material/ToggleButton";
import { styled, useTheme } from "@mui/material/styles";
import Leaf from "./Leaf";
import {
  setCurrentWordRange,
  updateSelectedText,
} from "../../slices/editorParams";
import FooterEditorBar from "./FooterEditorBar";
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
import { ToggleButtonGroup } from "@mui/material";
import UseCompletionSuffix from "hooks/UseCompletionSuffix";
import { useSelector, useDispatch } from "react-redux";
import { updateProgressValue } from "../../slices/progress";
import { useSnackbar } from "notistack";

const HOTKEYS = {
  "mod+b": "bold",
  "mod+i": "italic",
  "mod+u": "underline",
  "mod+`": "code",
  "mod+s": "subject",
  //
  "mod+a": "selectAll",
  "mod+enter": "enter",
};
const LIST_TYPES = ["numbered-list", "bulleted-list"];
// @refresh reset

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  "& .MuiToggleButtonGroup-grouped": {
    margin: theme.spacing(0.5),
    border: 0,
    "&.Mui-disabled": {
      border: 0,
    },
    "&:not(:first-of-type)": {
      borderRadius: theme.shape.borderRadius,
    },
    "&:first-of-type": {
      borderRadius: theme.shape.borderRadius,
    },
  },
}));

const MainSlateEditor = (props) => {
  //hooks must be inside of the function
  const dispatch = useDispatch();
  const fieldValues = useSelector((state) => state.fieldsValue);
  const { enqueueSnackbar } = useSnackbar();
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
  const editors = [editor, editor2, editor3, editor4];
  let inputLimitation = props.limitChar;

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
    divRef.current.style.boxShadow = `0 0 0 2px ${theme.palette.divider}`;
  }, []);

  const onBlur = React.useCallback(() => {
    // savedSelection.current = editor.selection;
    if (editor.selection) {
      dispatch(setCurrentWordRange(editor.selection));
      const fragmentText =
        editor.selection &&
        SlateNode.fragment(editor, editor.selection)
          .map((x) => SlateNode.string(x))
          .join("\n");
      dispatch(updateSelectedText(fragmentText));
      divRef.current.style.boxShadow = `0 0 0 1px ${theme.palette.action.disabled}`;
      console.log(fragmentText);
    }
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

  const handleSuffix = (e) => {
    e.preventDefault();
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(SITE_KEY, { action: "submit" })
        .then((gtoken) => {
          dispatch(updateProgressValue(15));
          UseCompletionSuffix(
            dispatch,
            enqueueSnackbar,
            editors,
            gtoken,
            "46",
            fieldValues
          );
        });
    });
  };

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
          lineHeight: "1.5rem",
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
            <StyledToggleButtonGroup size='small' aria-label='text formatting'>
              <MarkButton format='bold'>
                <FormatBoldRoundedIcon sx={{ fontSize: "1.2rem" }} />
              </MarkButton>
              <MarkButton format='italic'>
                <FormatItalicRoundedIcon sx={{ fontSize: "1.2rem" }} />
              </MarkButton>
              <MarkButton format='underline'>
                <FormatUnderlinedRoundedIcon sx={{ fontSize: "1.2rem" }} />
              </MarkButton>
              <MarkButton format='code'>
                <CodeRoundedIcon sx={{ fontSize: "1.2rem" }} />
              </MarkButton>
            </StyledToggleButtonGroup>

            <StyledToggleButtonGroup
              size='small'
              exclusive
              aria-label='text alignment'
            >
              <BlockButton format='heading-one'>
                <LooksOneRoundedIcon sx={{ fontSize: "1.2rem" }} />
              </BlockButton>
              <BlockButton format='heading-two'>
                <LooksTwoRoundedIcon sx={{ fontSize: "1.2rem" }} />
              </BlockButton>
              <BlockButton format='block-quote'>
                <FormatQuoteRoundedIcon sx={{ fontSize: "1.2rem" }} />
              </BlockButton>
              <BlockButton format='numbered-list'>
                <FormatListNumberedRoundedIcon sx={{ fontSize: "1.2rem" }} />
              </BlockButton>
              <BlockButton format='bulleted-list'>
                <FormatListBulletedRoundedIcon sx={{ fontSize: "1.2rem" }} />
              </BlockButton>
            </StyledToggleButtonGroup>

            <Editable
              renderElement={renderElement}
              renderLeaf={renderLeaf}
              placeholder={props.placeholder}
              spellCheck
              autoFocus
              onFocus={onFocus}
              onBlur={onBlur}
              style={{
                height: "100vh",
                overflow: "auto",
              }}
              onKeyDown={(event) => {
                for (const hotkey in HOTKEYS) {
                  if (isHotkey(hotkey, event as any)) {
                    event.preventDefault();
                    const mark = HOTKEYS[hotkey];
                    if (mark === "enter") {
                      handleSuffix(event);
                    }
                    if (mark === "selectAll") {
                      savedSelection.current = editor.selection;
                      dispatch(setCurrentWordRange(savedSelection.current));
                      Transforms.select(editor, {
                        anchor: Editor.start(editor, []),
                        focus: Editor.end(editor, []),
                      });
                    }
                    toggleMark(editor, mark);
                    toggleBlock(editor, mark);
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

const isBlockActive = (editor, format) => {
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

const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};

const Blockquote = styled("blockquote")(({ theme }) => ({
  borderLeft: `3px solid ${theme.palette.text.primary}`,
  fontStyle: "italic",
  paddingLeft: "0.8em",
}));

const Element = ({ attributes, children, element }) => {
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
          padding: "5px",
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
          padding: "5px",
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

export default MainSlateEditor;
