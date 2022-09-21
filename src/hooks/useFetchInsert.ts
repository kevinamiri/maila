import useFetchDataSelected from "./useFetchDataSelected";
import { updateProgressValue } from "../slices/progress";
import { Editor, Transforms } from "slate";
import { ReactEditor } from "editable-slate-react";
import { Node as SlateNode } from "slate";
import { updateExpansion } from "../slices/ui-states";

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

// fetching the data from the api and then inserting it into the different editors
async function useFetchInsert(
  dispatch,
  enqueueSnackbar,
  editors,
  gtoken,
  url,
  fieldValues,
  selectedStr
) {
  // Selected text of editor with /n
  const selectedTextValue =
    (editors[0].selection &&
      SlateNode.fragment(editors[0], editors[0].selection)
        .map((x) => SlateNode.string(x))
        .join("\n")) ||
    selectedStr;
  await useFetchDataSelected(selectedTextValue, gtoken, url, fieldValues).then(
    (data) => {
      if (data) {
        dispatch(updateProgressValue(50));
        let textOptions = extractText(data);
        textOptions
          .filter((x: any) => x.search("Error 404") != -1)
          .map((element) => enqueueSnackbar(element));
        textOptions
          .filter((x: any) => x.search("Error 404") == -1)
          .map((text: string, index) =>
            Transforms.insertText(editors[index + 1], text, { at: [0] })
          );
        dispatch(updateExpansion(true));
        dispatch(updateProgressValue(100));
        ReactEditor.focus(editors[0]);
        // Transforms.select(editors[0], Editor.end(editors[0], []));
        Transforms.select(
          editors[0],
          editors[0].selection
            ? editors[0].selection
            : Editor.end(editors[0], [])
        );
      } else {
        enqueueSnackbar("Something went wrong, Please try again", {
          variant: "error",
        });
        Transforms.insertText(
          editors[1],
          data.message +
            "Something went wrong, please try again, if the problem persists please contact the support@maila.ai",
          { at: [0] }
        );
        dispatch(updateProgressValue(100));
      }
    }
  );
}

export default useFetchInsert;
