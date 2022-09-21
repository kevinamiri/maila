import useFetchSuffix from "./useFetchSuffix";
import { updateLastId, updateProgressValue } from "../slices/progress";
import { BaseEditor, Editor, Transforms } from "slate";
import { ReactEditor } from "editable-slate-react";
import { Node as SlateNode } from "slate";
import { HistoryEditor } from "slate-history";
import { updateExpansion, updateHighlghted } from "slices/ui-states";

const extractText = (object: any) => {
  const newArray = [];
  for (let key in object) {
    if (key.includes("text")) {
      newArray.push(object[key]);
    }
  }
  return newArray;
};

const extractId = (object: any) => {
  const newArray = [];
  for (let key in object) {
    if (key.includes("Id")) {
      newArray.push(object[key]);
    }
  }
  return newArray[0];
};

/**
 * When user clicks on the tab, it will triger the api and
 * the auto-generated text will be inserted into the main editor
 *
 */

/* Following function would send the text to main editor */
const Content2Editor = (editor, content) => {
  editor.selection &&
    Transforms.insertText(editor, content, {
      at: editor.selection,
    });

  if (!editor.selection) {
    Transforms.insertText(editor, content, {
      at: Editor.end(editor, []),
    });

    Transforms.select(
      editor,
      editor.selection ? editor.selection : Editor.end(editor, [])
    );
  }
};

// fetching the data from the api and then inserting it into the editor itself at the selection
async function useFetch2InsertSuffix(
  dispatch: (arg0: {
    (dispatch: any): Promise<void>;
    (dispatch: any): Promise<void>;
  }) => void,
  enqueueSnackbar: (arg0: unknown) => any,
  editors: (BaseEditor & ReactEditor & HistoryEditor)[],
  gtoken: string,
  url: string,
  fieldValues: any
) {
  /** Get the text before the cursor (editor selection) */
  const beforeEditor = Editor.fragment(editors[0], {
    anchor: { path: [0, 0], offset: 0 },
    focus: editors[0].selection.focus,
  })
    .map((x) => SlateNode.string(x))
    .join("\n");
  /** Get the text at the end of the editor */
  const endPointEditor = Editor.end(editors[0], []);
  /** Get the text after the cursor */
  const afterEditor = Editor.fragment(editors[0], {
    anchor: editors[0].selection.focus,
    focus: endPointEditor,
  })
    .map((x) => SlateNode.string(x))
    .join("\n");
  [];

  /** End: geting before selection and after selection */

  await useFetchSuffix(
    beforeEditor,
    afterEditor,
    gtoken,
    url,
    fieldValues
  ).then((data) => {
    if (data) {
      dispatch(updateProgressValue(50));
      let textOptions = extractText(data);
      dispatch(updateLastId(extractId(data)));
      let inx = 0;
      textOptions
        .filter((x: any) => x.search("404") != -1)
        .map((element) => enqueueSnackbar(element));
      textOptions
        .filter((x: any) => x.search("404") == -1)
        .map((text: string, index) => {
          if (text.length > 3 && inx == 0) {
            // inserting the first text into the main editor
            Content2Editor(editors[0], text);
            inx = 1;
            // highlighting the first text in the main editor
            dispatch(updateHighlghted(text));
          }
          Transforms.insertText(editors[index + 1], text, { at: [0] });
        });

      dispatch(updateExpansion(true));
      dispatch(updateProgressValue(100));
      ReactEditor.focus(editors[0]);
      Transforms.select(
        editors[0],
        editors[0].selection ? editors[0].selection : Editor.end(editors[0], [])
      );
    } else {
      enqueueSnackbar("Something went wrong, please try again");
      Transforms.insertText(
        editors[1],
        data.message +
          "Something went wrong, please try again, if the problem persists please contact the support@maila.ai",
        { at: [0] }
      );
      dispatch(updateProgressValue(100));
    }
  });
}

export default useFetch2InsertSuffix;
