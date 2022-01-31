import React from "react";
import EditorToolsBoxBar from "./EditorToolsBoxBar";
import { useSelector, useDispatch } from "react-redux";
import { updateProgressValue } from "../../slices/progress";
import { Editor, Transforms } from "slate";
const SITE_KEY = "6LcA4HoaAAAAAMHEQHKWWXyoi1TaCiDgSJoy2qtP";
import { useSnackbar } from "notistack";
import { BaseEditor } from "slate";
import { ReactEditor } from "editable-slate-react";
import { HistoryEditor } from "slate-history";
import useFetchInsert from "hooks/useFetchInsert";

import { selectedText } from "hooks/currentSelectEditor";

type CustomText = { text: string };
type CustomElement = { type: "paragraph"; children: CustomText[] };

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor & HistoryEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}

interface selectionTransformerProps {
  generateButtonName?: string;
  inputLimitation?: number;
  mainPlaceholder?: String;
  headerTitle?: string;
  productType?: string;
  editor: Editor;
  editor2?: Editor;
  editor3?: Editor;
  editor4?: Editor;
}

const SelectionTransformerBar: React.FC<selectionTransformerProps> = ({
  editor,
  editor2,
  editor3,
  editor4,
}: selectionTransformerProps) => {
  //hooks must be outside of the function
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const selected = selectedText(editor);
  const fieldValues = useSelector((state) => state.fieldsValue);

  const editors = [editor, editor2, editor3, editor4];

  const handleClarify = (e) => {
    e.preventDefault();
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(SITE_KEY, { action: "submit" })
        .then((gtoken) => {
          dispatch(updateProgressValue(15));
          useFetchInsert(
            dispatch,
            enqueueSnackbar,
            editors,
            gtoken,
            "15",
            fieldValues
          );
        });
    });
  };

  const HandleSpellcheck = (e) => {
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(SITE_KEY, { action: "submit" })
        .then((gtoken) => {
          dispatch(updateProgressValue(15));
          useFetchInsert(
            dispatch,
            enqueueSnackbar,
            editors,
            gtoken,
            "35",
            fieldValues
          );
          e.preventDefault();
        });
    });
  };

  const handleAdvancify = (e) => {
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(SITE_KEY, { action: "submit" })
        .then((gtoken) => {
          dispatch(updateProgressValue(15));
          useFetchInsert(
            dispatch,
            enqueueSnackbar,
            editors,
            gtoken,
            "40",
            fieldValues
          );
          e.preventDefault();
        });
    });
  };

  const handleSimplify = (e) => {
    e.preventDefault();
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(SITE_KEY, { action: "submit" })
        .then((gtoken) => {
          dispatch(updateProgressValue(15));
          useFetchInsert(
            dispatch,
            enqueueSnackbar,
            editors,
            gtoken,
            "2",
            fieldValues
          );
        });
    });
  };

  return (
    <>
      <EditorToolsBoxBar
        handleSpellcheck={HandleSpellcheck}
        handleAdvancify={handleAdvancify}
        handleSimplify={handleSimplify}
        handleClarify={handleClarify}
      />
    </>
  );
};

export default SelectionTransformerBar;
