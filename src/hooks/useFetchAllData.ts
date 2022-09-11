import { updateProgressValue } from "../slices/progress";
import { BaseEditor, Editor, Transforms } from "slate";
import { ReactEditor } from "editable-slate-react";
import { HistoryEditor } from "slate-history";
import { updateExpansion, updateHighlghted } from "slices/ui-states";
import useFetchAll from "./useFetchAll";
import { serialize } from "./currentSelectEditor";

const extractText = (object: any) => {
  const newArray = [];
  for (let key in object) {
    if (key.includes("text")) {
      newArray.push(object[key]);
    }
  }
  return newArray;
};

/* Following function would send the text to main editor 
text => main editor
*/
const Content2Editor = (
  editor: BaseEditor & ReactEditor & HistoryEditor,
  content: string
) => {
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
  /** Get The whole text of the editor */
  const editorContents = serialize(editors[0]).substring(0, 15000);

  /** End: geting before selection and after selection */
  await useFetchAll(editorContents, gtoken, url, fieldValues).then((data) => {
    if (data) {
      dispatch(updateProgressValue(50));
      let textOptions = extractText(data);
      let inx = 0;
      textOptions
        .filter((x: any) => x.search("Error 4043") != -1)
        .map((element: any) => enqueueSnackbar(element));
      textOptions
        .filter((x: any) => x.search("Error 4043") == -1)
        .map((text: string, index) => {
          // if (text.length > 3 && inx == 0) {
          //   // inserting the first text into the main editor
          //   Content2Editor(editors[0], text);
          //   inx = 1;
          //   // highlighting the first text in the main editor
          //   dispatch(updateHighlghted(text));
          // }
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
        data.message + "Something went wrong, please try again",
        { at: [0] }
      );
      dispatch(updateProgressValue(100));
    }
  });
}

export default useFetchAllData;
