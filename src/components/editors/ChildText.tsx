import React, { useState } from "react";
import { Editable, Slate } from "editable-slate-react";
import { Editor, Transforms } from "slate";
import { Node as SlateNode } from "slate";
import CardContent from "@mui/material/CardContent";
import isHotkey from "is-hotkey";
import Grid from "@mui/material/Grid";
import FooterEditorBar from "./FooterEditorBar";
import { selectedText, serialize } from "hooks/currentSelectEditor";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentWordRange } from "slices/editorParams";

const HOTKEYS = {
  "mod+b": "bold",
  "mod+i": "italic",
  "mod+u": "underline",
  "mod+`": "code",
  "mod+a": "selectAll",
};

const ChildText = (props) => {
  const editor = props.mainEditor;
  const editor2 = props.correspondedEditor;
  const dispatch = useDispatch();
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

  const [value2, setValue2] = useState<SlateNode[]>(defaultValue);

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
      dispatch(setCurrentWordRange(false));
    }

    // (!editor.selection) &&
    //   Transforms.insertText(editor, selectedContent, {
    //     at: currentWordRange ? currentWordRange : Editor.end(editor, []),
    //   });
  };

  // Add the initial value when setting up our state.
  const Editor2HandleValue = (value: SlateNode[]) => {
    // updateCurrentWord();
    setValue2(value);
    let content = JSON.stringify(value);
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
  //   savedSelectedPosition.current = editor2.selection;
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

  return (
    <>
      <CardContent>
        <Grid
          sx={{
            boxSizing: "border-box",
            fontSize: "1em",
            padding: "0.5em",
            lineHeight: "1.5rem",
            marginLeft: "0.1rem",
            marginRight: "0.1rem",
            marginBottom: "0.2rem",
            border: (theme) => `2px solid ${theme.palette.divider}`,
            borderRadius: (theme) => `calc(1px * ${theme.shape.borderRadius})`,
            background: (theme) => theme.palette.background.default,
          }}
          container
          direction='row'
          justifyContent='center'
          alignItems='flex-end'
        >
          <Grid item xs={12}>
            <Slate
              editor={editor2}
              value={value2}
              onChange={(value) => Editor2HandleValue(value)}
            >
              <Editable
                spellCheck
                onKeyDown={(event) => {
                  for (const hotkey in HOTKEYS) {
                    if (isHotkey(hotkey, event as any)) {
                      event.preventDefault();
                      const mark = HOTKEYS[hotkey];
                      if (mark === "selectAll") {
                        Transforms.select(editor2, {
                          anchor: Editor.start(editor2, []),
                          focus: Editor.end(editor2, []),
                        });
                      }
                    }
                  }
                }}
              />
            </Slate>
          </Grid>
          <FooterEditorBar
            editor={editor2}
            handleTranser={TransferingToMainEditor}
          />
        </Grid>
      </CardContent>
    </>
  );
};

export default ChildText;
