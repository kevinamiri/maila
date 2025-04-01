import React, { useCallback, useState, useRef } from "react";
import isHotkey from "is-hotkey";
import { Editable, Slate, ReactEditor } from "editable-slate-react";
import { Editor, Transforms, Descendant, Node as SlateNode } from "slate";
import { Text as Textt } from "slate";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { Leaf } from "./Leaf";

import { setCurrentWordRange, updateSelectedText } from "../../slices/editorParams";
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
import { StyledToggleButtonGroup } from "./toggle-button-group";
import UseCompletionSuffix from "hooks/UseCompletionSuffix";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "store";
import { updateProgressValue } from "../../slices/progress";
import { useSnackbar } from "notistack";
import HoveringToolbar from "./HoveringToolbar";
import { HOTKEYS } from "./hotkeys";
import useFetchAllData from "hooks/useFetchAllData";

import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import useFetch2InsertSuffix from "hooks/useFetch2InsertSuffix";
import { TabButton } from "./formats";
import { toggleMark, BlockButton, MarkButton, Element } from "./formats";

const MainSlateEditor = (props) => {
  const dispatch = useDispatch<AppDispatch>();
  const fieldValues = useSelector((state: any) => state.fieldsValue);
  const { highlightedText } = useSelector((state: any) => state.expandReducer);
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

  const { editor, editor2, editor3, editor4, productType, editorHeight, storageKey: propStorageKey, placeholder } = props;
  const editors = [editor, editor2, editor3, editor4];
  const storageKey = propStorageKey === undefined ? "document" : propStorageKey;

  const defaultValue = (): Descendant[] => {
    return (
      JSON.parse(
        typeof window !== "undefined" && window.localStorage.getItem(storageKey)
      ) || [
        { type: "paragraph", children: [{ text: "" }] },
      ]
    );
  };

  const savedSelection = useRef(editor.selection);
  const divRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  const onFocus = useCallback(() => {
    ReactEditor.focus(editor);
    divRef.current.style.boxShadow = `0 0 0 2px ${theme.palette.divider}`;
  }, [editor, theme]);

  const onBlur = useCallback(() => {
    if (editor.selection) {
      dispatch(setCurrentWordRange(editor.selection));
      const fragmentText =
        SlateNode.fragment(editor, editor.selection)
          .map((x) => SlateNode.string(x))
          .join("\n");
      dispatch(updateSelectedText(fragmentText));
      divRef.current.style.boxShadow = `0 0 0 1px ${theme.palette.action.disabled}`;
    }
  }, [dispatch, editor, theme]);

  const [value, setValue] = useState<Descendant[]>(defaultValue);

  const handleChange = (value: Descendant[]) => {
    setValue(value);
    const content = JSON.stringify(value);
    localStorage.setItem(storageKey, content);

    if (!editor.selection) return;
    dispatch(setCurrentWordRange(editor.selection));
    savedSelection.current = editor.selection;
    const fragment = SlateNode.fragment(editor, editor.selection);
    const fragmentsText = fragment.map((x) => SlateNode.string(x)).join("\n");
    dispatch(updateSelectedText(fragmentsText));
  };

  // Helper to abstract recaptcha execution and progress update
  const recaptchaAction = (
    e: React.MouseEvent | React.KeyboardEvent,
    progress: number,
    actionCallback: (gtoken: string) => void
  ) => {
    e.preventDefault();
    (window as any).grecaptcha.ready(() => {
      (window as any).grecaptcha
        .execute(SITE_KEY, { action: "submit" })
        .then((gtoken: string) => {
          dispatch(updateProgressValue(progress));
          actionCallback(gtoken);
        });
    });
  };

  const handleSuffix = (e) => {
    recaptchaAction(e, 15, (gtoken) => {
      UseCompletionSuffix(dispatch, enqueueSnackbar, editors, gtoken, "46", fieldValues);
    });
  };

  const handleSuffixCode = (e) => {
    recaptchaAction(e, 15, (gtoken) => {
      UseCompletionSuffix(dispatch, enqueueSnackbar, editors, gtoken, "48", fieldValues);
    });
  };

  const handleSuffixCodeItself = (e) => {
    recaptchaAction(e, 15, (gtoken) => {
      useFetch2InsertSuffix(dispatch, enqueueSnackbar, editors, gtoken, "48", fieldValues);
    });
  };

  const handleGenerate = (e) => {
    recaptchaAction(e, 15, (gtoken) => {
      UseCompletionSuffix(dispatch, enqueueSnackbar, editors, gtoken, "44", fieldValues);
    });
  };

  const handleTranslate = (e) => {
    recaptchaAction(e, 15, (gtoken) => {
      UseCompletionSuffix(dispatch, enqueueSnackbar, editors, gtoken, "50", fieldValues);
    });
  };

  const handleGenerateButton = (e) => {
    recaptchaAction(e, 10, (gtoken) => {
      useFetchAllData(dispatch, enqueueSnackbar, editors, gtoken, productType, fieldValues);
    });
  };

  const handleKeyDown = (event) => {
    for (const hotkey in HOTKEYS) {
      if (isHotkey(hotkey, event as any)) {
        event.preventDefault();
        const isSelect = hotkey === "mod+a";
        if (hotkey === "alt+t") handleTranslate(event);
        else if (hotkey === "mod+g") handleSuffix(event);
                // if (hotkey === "alt+enter") handleSuffixCode(event);
        else if (hotkey === "tab") handleSuffixCodeItself(event);
        else if (hotkey === "mod+enter") handleGenerateButton(event);
        if (hotkey === "mod+a") {
          savedSelection.current = editor.selection;
          dispatch(setCurrentWordRange(savedSelection.current));
          Transforms.select(editor, {
            anchor: Editor.start(editor, []),
            focus: Editor.end(editor, []),
          });
        }
        const mark = HOTKEYS[hotkey];
        if (!isSelect) toggleMark(editor, mark);
      }
    }
  };

  const serialize = (ed: Editor) => ed.children.map((x) => SlateNode.string(x)).join("\n");

  const editorCountNewLines = (ed: Editor) =>
    ed.children.map((x) => SlateNode.string(x)).join("\n").split("\n").length;

  return (
    <>
      <Box
        ref={divRef}
        sx={{
          boxSizing: "border-box",
          boxShadow: (theme) => `0 0 0 2px ${theme.palette.divider}`,
          borderRadius: (theme) => `calc(1px * ${theme.shape.borderRadius})`,
          lineHeight: "1.4rem",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          pb: 0.5,
          pt: 1,
          px: 1,
        }}
      >
        <Box sx={{ color: (theme) => theme.palette.text.secondary }}>
          <Slate editor={editor} value={value} onChange={handleChange}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              <StyledToggleButtonGroup size="small" aria-label="text formatting">
                <MarkButton format="bold">
                  <FormatBoldRoundedIcon sx={{ fontSize: "1.1rem" }} />
                </MarkButton>
                <MarkButton format="italic">
                  <FormatItalicRoundedIcon sx={{ fontSize: "1.1rem" }} />
                </MarkButton>
                <MarkButton format="underline">
                  <FormatUnderlinedRoundedIcon sx={{ fontSize: "1.1rem" }} />
                </MarkButton>
                <MarkButton format="code">
                  <CodeRoundedIcon sx={{ fontSize: "1.1rem" }} />
                </MarkButton>
                <MarkButton format="highlight">
                  <BorderColorRoundedIcon sx={{ fontSize: "1.1rem" }} />
                </MarkButton>
              </StyledToggleButtonGroup>
              <StyledToggleButtonGroup size="small" exclusive aria-label="text alignment">
                <BlockButton format="heading-one">
                  <LooksOneRoundedIcon sx={{ fontSize: "1.1rem" }} />
                </BlockButton>
                <BlockButton format="heading-two">
                  <LooksTwoRoundedIcon sx={{ fontSize: "1.1rem" }} />
                </BlockButton>
                <BlockButton format="block-quote">
                  <FormatQuoteRoundedIcon sx={{ fontSize: "1.1rem" }} />
                </BlockButton>
                <BlockButton format="numbered-list">
                  <FormatListNumberedRoundedIcon sx={{ fontSize: "1.1rem" }} />
                </BlockButton>
                <BlockButton format="bulleted-list">
                  <FormatListBulletedRoundedIcon sx={{ fontSize: "1.1rem" }} />
                </BlockButton>
              </StyledToggleButtonGroup>
              <StyledToggleButtonGroup>
                <TabButton onClick={handleSuffix} hasTab />
              </StyledToggleButtonGroup>
            </Box>

            <HoveringToolbar editor={editor} editor2={editor2} editor3={editor3} editor4={editor4} />
            <Editable
              renderElement={renderElement}
              renderLeaf={renderLeaf}
              decorate={decorateSearch}
              placeholder={placeholder}
              onFocus={onFocus}
              onBlur={onBlur}
              onKeyDown={handleKeyDown}
              style={{
                overflowY: "scroll",
                height: editorHeight
                  ? `${editorHeight}px`
                  : serialize(editor).length > 600 || editorCountNewLines(editor) > 4
                  ? "500px"
                  : "400px",
              }}
            />
          </Slate>
        </Box>
        <FooterEditorBar voice={true} disabled={true} editor={editor} />
      </Box>
    </>
  );
};

export default MainSlateEditor;