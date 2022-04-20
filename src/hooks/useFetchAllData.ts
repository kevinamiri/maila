import { updateProgressValue } from "../slices/progress";
import { BaseEditor, Editor, Transforms } from "slate";
import { ReactEditor } from "editable-slate-react";
import { Node as SlateNode } from "slate";
import { HistoryEditor } from "slate-history";
import { updateExpansion } from "slices/ui-states";
import useFetchAll from "./useFetchAll";
import { serialize } from "./currentSelectEditor";

//fetching the data from the api and then inserting it into the editor itself at the selection
async function useFetchAllData(
  dispatch: (arg0: {
    (dispatch: any): Promise<void>;
    (dispatch: any): Promise<void>;
  }) => void,
  enqueueSnackbar: (arg0: unknown) => any,
  editors: (BaseEditor & ReactEditor & HistoryEditor)[],
  gtoken: string,
  url: string,
  fieldValues
) {
  /** Get the text before the cursor up to the editor.selection ’s position */
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
  /** Get The whole text of the editor */
  const editorContents = serialize(editors[0]).substring(0, 15000);

  /** End: geting before selection and after selection */
  await useFetchAll(editorContents, gtoken, url, fieldValues).then((data) => {
    if (data) {
      dispatch(updateProgressValue(50));
      let textOptions = Object.values(data);
      textOptions
        .filter((x: any) => x.search("Error 4043") != -1)
        .map((element: any) => enqueueSnackbar(element));
      textOptions
        .filter((x: any) => x.search("Error 4043") == -1)
        .map((text: any, index) =>
          Transforms.insertText(editors[index + 1], text, { at: [0] })
        );
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
        data.message + "Something went wrong, please try again",
        { at: [0] }
      );
      dispatch(updateProgressValue(100));
    }
  });
}

export default useFetchAllData;
