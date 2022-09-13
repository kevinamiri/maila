import React, { useCallback, useState } from "react";
import isHotkey from "is-hotkey";
import { Editable, Slate, ReactEditor } from "editable-slate-react";
import { Editor, Transforms, Descendant } from "slate";
import { Node as SlateNode } from "slate";
import { Text as Textt } from "slate";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { Leaf } from "./Leaf";

import {
  setCurrentWordRange,
  updateSelectedText,
} from "../../slices/editorParams";
import FooterEditorBar from "./FooterEditorBar";
// import usePrism from "../../hooks/usePrism";
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
import UseCompletionSuffix from "hooks/UseCompletionSuffix";
import { useSelector, useDispatch } from "react-redux";
import { updateProgressValue } from "../../slices/progress";
import { useSnackbar } from "notistack";
import HoveringToolbar from "./HoveringToolbar";
import { HOTKEYS } from "./hotkeys";
import useFetchAllData from "hooks/useFetchAllData";

// @refresh reset
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import useFetch2InsertSuffix from "hooks/useFetch2InsertSuffix";
import { TabButton } from "./formats";
import { toggleMark, BlockButton, MarkButton, Element } from "./formats";

const MainSlateEditor = (props) => {
  //hooks must be inside of the function
  const dispatch = useDispatch();
  // const { decorate } = usePrism();
  const fieldValues = useSelector((state) => state.fieldsValue);
  const { highlightedText } = useSelector((state) => state.expandReducer);
  const { enqueueSnackbar } = useSnackbar();
  const renderElement = useCallback((props) => <Element {...props} />, []);
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);
  const decorateSearch = useCallback(
    ([node, path]) => {
      const ranges = [];

      if (highlightedText && Textt.isText(node)) {
        const { text } = node;
        const parts = text.split(highlightedText);
        let offset = 0;

        parts.forEach((part, i) => {
          if (i !== 0) {
            ranges.push({
              anchor: { path, offset: offset - highlightedText.length },
              focus: { path, offset },
              highlight: true,
            });
          }

          offset = offset + part.length + highlightedText.length;
        });
      }
      return ranges;
    },
    [highlightedText]
  );

  const editor = props.editor;
  const editor2 = props.editor2;
  const editor3 = props.editor3;
  const editor4 = props.editor4;
  const productType = props.productType;
  const editorHeight = props.editorHeight;
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

  const serialize = (editorname: Editor) => {
    return editorname.children.map((x) => SlateNode.string(x)).join("\n");
  };
  // number of new lines \n in the editor
  const editorCountNewLines = (editorname: Editor) => {
    return editorname.children
      .map((x) => SlateNode.string(x))
      .join("\n")
      .split("\n").length;
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
                <TabButton onClick={handleSuffix} hasTab />
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
              decorate={decorateSearch}
              placeholder={props.placeholder}
              spellCheck
              autoFocus
              onFocus={onFocus}
              onBlur={onBlur}
              onKeyDown={handleKeyDown}
              style={{
                overflowY: "scroll",
                height: editorHeight
                  ? `${editorHeight}px`
                  : serialize(editor).length > 600 ||
                    editorCountNewLines(editor) > 4
                  ? "500px"
                  : "400px",
              }}
            />
          </Slate>
        </Grid>
        <FooterEditorBar voice={true} disabled={true} editor={editor} />
      </Grid>
    </>
  );
};

export default MainSlateEditor;
