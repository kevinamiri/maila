import React, { useCallback, useState } from "react";
import isHotkey from "is-hotkey";
import { Editable, useSlate, Slate, ReactEditor } from "editable-slate-react";
import { Editor, Transforms, Element as SlateElement, Descendant } from "slate";
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
import usePrism from "../../hooks/usePrism";
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
import IconButton from "@mui/material/IconButton";
import { StyledToggleButtonGroup } from "./toggle-button-group";
import Tooltip from "@mui/material/Tooltip";
import UseCompletionSuffix from "hooks/UseCompletionSuffix";
import { useSelector, useDispatch } from "react-redux";
import { updateProgressValue } from "../../slices/progress";
import { useSnackbar } from "notistack";
import HoveringToolbar from "./HoveringToolbar";
import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";
import { HOTKEYS } from "./hotkeys";
import useFetchAllData from "hooks/useFetchAllData";
import useScrollTrigger from "@mui/material/useScrollTrigger";
const LIST_TYPES = ["numbered-list", "bulleted-list"];
// @refresh reset
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import useFetch2InsertSuffix from "hooks/useFetch2InsertSuffix";
import { SeverityPill } from "components/severity-pill";

const MainSlateEditor = (props) => {
  //hooks must be inside of the function
  const dispatch = useDispatch();
  const { decorate } = usePrism();
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
  const productType = props.productType;
  const editors = [editor, editor2, editor3, editor4];
  const storageKey =
    props.storageKey === undefined ? "document" : props.storageKey;

  const defaultValue = () => {
    return (
      JSON.parse(
        typeof window !== "undefined" && window.localStorage.getItem(storageKey)
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
    }
  }, []);

  const [value, setValue] = useState<Descendant[]>(defaultValue);
  const handleChange = (value: SlateNode[]) => {
    setValue(value);
    const content = JSON.stringify(value);
    localStorage.setItem(storageKey, content);
    if (!editor.selection) return;
    dispatch(setCurrentWordRange(editor.selection));
    savedSelection.current = editor.selection;
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

  const handleSuffixCode = (e) => {
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
            "48",
            fieldValues
          );
        });
    });
  };

  const handleSuffixCodeItself = (e) => {
    e.preventDefault();
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(SITE_KEY, { action: "submit" })
        .then((gtoken) => {
          dispatch(updateProgressValue(15));
          useFetch2InsertSuffix(
            dispatch,
            enqueueSnackbar,
            editors,
            gtoken,
            "48",
            fieldValues
          );
        });
    });
  };

  const handleGenerate = (e) => {
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
            "44",
            fieldValues
          );
        });
    });
  };

  const handleTranslate = (e) => {
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
            "50",
            fieldValues
          );
        });
    });
  };

  //handle clicks
  const handleGenerateButton = (e) => {
    e.preventDefault();
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(SITE_KEY, { action: "submit" })
        .then((gtoken) => {
          dispatch(updateProgressValue(10));
          useFetchAllData(
            dispatch,
            enqueueSnackbar,
            editors,
            gtoken,
            productType,
            fieldValues
          );
        });
    });
  };

  const handleKeyDown = (event) => {
    for (const hotkey in HOTKEYS) {
      if (isHotkey(hotkey, event as any)) {
        event.preventDefault();

        const isSellect = hotkey === "mod+a" ? true : false;
        hotkey === "alt+t" && handleTranslate(event);
        hotkey === "mod+g" && handleSuffix(event);
        // hotkey === "alt+enter" && handleSuffixCode(event);
        hotkey === "tab" && handleSuffixCodeItself(event);
        hotkey === "mod+enter" && handleGenerateButton(event);
        if (hotkey === "mod+a") {
          savedSelection.current = editor.selection;
          dispatch(setCurrentWordRange(savedSelection.current));
          Transforms.select(editor, {
            anchor: Editor.start(editor, []),
            focus: Editor.end(editor, []),
          });
        }
        const mark = HOTKEYS[hotkey];
        !isSellect && toggleMark(editor, mark);
      }
    }
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
          lineHeight: "1.4rem",
          p: 1,
        }}
      >
        <StyledToggleButtonGroup
          sx={{
            position: "absolute",
            bottom: "45%",
            left: "3%",
            zIndex: 1800,
          }}
        >
          <MagicButton onClick={handleSuffix} />
        </StyledToggleButtonGroup>
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
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              <StyledToggleButtonGroup
                size='small'
                aria-label='text formatting'
              >
                <MarkButton format='bold'>
                  <FormatBoldRoundedIcon sx={{ fontSize: "1.1rem" }} />
                </MarkButton>
                <MarkButton format='italic'>
                  <FormatItalicRoundedIcon sx={{ fontSize: "1.1rem" }} />
                </MarkButton>
                <MarkButton format='underline'>
                  <FormatUnderlinedRoundedIcon sx={{ fontSize: "1.1rem" }} />
                </MarkButton>
                <MarkButton format='code'>
                  <CodeRoundedIcon sx={{ fontSize: "1.1rem" }} />
                </MarkButton>
                <MarkButton format='highlight'>
                  <BorderColorRoundedIcon sx={{ fontSize: "1.1rem" }} />
                </MarkButton>
              </StyledToggleButtonGroup>
              <StyledToggleButtonGroup
                size='small'
                exclusive
                aria-label='text alignment'
              >
                <BlockButton format='heading-one'>
                  <LooksOneRoundedIcon sx={{ fontSize: "1.1rem" }} />
                </BlockButton>
                <BlockButton format='heading-two'>
                  <LooksTwoRoundedIcon sx={{ fontSize: "1.1rem" }} />
                </BlockButton>
                <BlockButton format='block-quote'>
                  <FormatQuoteRoundedIcon sx={{ fontSize: "1.1rem" }} />
                </BlockButton>
                <BlockButton format='numbered-list'>
                  <FormatListNumberedRoundedIcon sx={{ fontSize: "1.1rem" }} />
                </BlockButton>
                <BlockButton format='bulleted-list'>
                  <FormatListBulletedRoundedIcon sx={{ fontSize: "1.1rem" }} />
                </BlockButton>
              </StyledToggleButtonGroup>
              <StyledToggleButtonGroup>
                <MagicButton onClick={handleSuffix} />
              </StyledToggleButtonGroup>
            </Box>

            <HoveringToolbar
              editor={editor}
              editor2={editor2}
              editor3={editor3}
              editor4={editor4}
            />
            <Editable
              renderElement={renderElement}
              renderLeaf={renderLeaf}
              decorate={decorate}
              placeholder={props.placeholder}
              spellCheck
              autoFocus
              onFocus={onFocus}
              onBlur={onBlur}
              onKeyDown={handleKeyDown}
              style={{ height: "500px", overflowY: "scroll" }}
            />
          </Slate>
        </Grid>
        <FooterEditorBar voice={true} disabled={true} editor={editor} />
      </Grid>
    </>
  );
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
        <p
          style={{ lineHeight: "1.4rem", backgroundColor: "f4f9f9" }}
          {...attributes}
        >
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

import type { FC, ReactNode } from "react";
import PropTypes from "prop-types";
import type { Theme } from "@mui/material";
// import { styled } from "@mui/material/styles";
import type { SxProps } from "@mui/system";

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

export const KBD: FC<SeverityPillProps> = (props) => {
  const { color = "primary", children, ...other } = props;

  const ownerState = { color };

  return (
    <TabLabel ownerState={ownerState} {...other}>
      {children}
    </TabLabel>
  );
};

const MagicButton = ({ onClick }) => {
  const { progressValue } = useSelector((state) => state.progressValue);
  const loading = progressValue > 0 && progressValue < 100;

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
            {loading ? "Loading..." : "  TAB"}
          </KBD>
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default MainSlateEditor;
