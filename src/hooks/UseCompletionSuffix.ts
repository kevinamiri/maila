import useFetchSuffix from "./useFetchSuffix";
import { updateProgressValue } from "../slices/progress";
import { BaseEditor, Editor, Transforms } from "slate";
import { ReactEditor } from "editable-slate-react";
import { Node as SlateNode } from "slate";
import { HistoryEditor } from "slate-history";
import React from "react";

//fetching the data from the api and then inserting it into the editor itself at the selection
async function UseCompletionSuffix(
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
  /** Start: geting before selection and after selection */
  // const savedSelection = React.useRef(editors[0].selection);
  const beforeEditor = Editor.fragment(editors[0], {
    anchor: { path: [0, 0], offset: 0 },
    focus: editors[0].selection.focus,
  })
    .map((x) => SlateNode.string(x))
    .join("\n");
  const endPointEditor = Editor.end(editors[0], []);
  const afterEditor = Editor.fragment(editors[0], {
    anchor: editors[0].selection.focus,
    focus: endPointEditor,
  })
    .map((x) => SlateNode.string(x))
    .join("\n");
  /** End: geting before selection and after selection */

  const textLists = await useFetchSuffix(
    beforeEditor,
    afterEditor,
    gtoken,
    url,
    fieldValues
  );
  console.log(textLists);
  dispatch(updateProgressValue(50));
  let textOptions = Object.values(textLists);
  console.log(textOptions);
  textOptions
    .filter((x: any) => x.search("Error 4043") != -1)
    .map((element) => enqueueSnackbar(element));
  textOptions
    .filter((x: any) => x.search("Error 4043") == -1)
    .map((text, index) =>
      Transforms.insertText(editors[index + 1], text, { at: [0] })
    );
  dispatch(updateProgressValue(100));
  ReactEditor.focus(editors[0]);
  // Transforms.select(editors[0], Editor.end(editors[0], []));
  Transforms.select(
    editors[0],
    editors[0].selection ? editors[0].selection : Editor.end(editors[0], [])
  );
}

export default UseCompletionSuffix;
