import React from "react";
import { Editor, Node as SlateNode } from "slate";
import Box from "@mui/material/Box";
const SITE_KEY = "6LcA4HoaAAAAAMHEQHKWWXyoi1TaCiDgSJoy2qtP";
import { useSnackbar } from "notistack";
import { useSelector, useDispatch } from "react-redux";
import { updateProgressValue } from "../../slices/progress";
import SelectionTransformerBar from "./SelectionTransformerBar";
import LoadingButtonProgress from "../subcomponents/LoadingButtonProgress";
import useFetchAllData from "../../hooks/useFetchAllData";

const serialize = (editorname: Editor) => {
  return editorname.children.map((x) => SlateNode.string(x)).join("\n");
};
interface GenerationButtonProps {
  inputLimitation?: number;
  mainPlaceholder?: String;
  productType?: string;
  productUrl?: string;
  editor: Editor;
  editor2?: Editor;
  editor3?: Editor;
  editor4?: Editor;
}

const GenerationButton: React.FC<GenerationButtonProps> = ({
  inputLimitation = 15000,
  productType = "4",
  productUrl = "generate",
  editor,
  editor2,
  editor3,
  editor4,
}: GenerationButtonProps) => {
  const editors = [editor, editor2, editor3, editor4];

  const { enqueueSnackbar } = useSnackbar();

  const dispatch = useDispatch();

  //hooks must be outside of the function
  const fieldValues = useSelector((state) => state.fieldsValue);

  //handle clicks
  const handleOnClick = () => {
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

  return (
    <>
      <Box
        sx={{
          marginRight: "auto",
          display: "flex",
          flexWrap: "wrap",
          boxSizing: "border-box",
          paddingRight: "0.9em",
          justifyContent: "start",
        }}
      >
        <LoadingButtonProgress
          size='small'
          color='primary'
          variant='contained'
          title='Compose'
          onClick={handleOnClick}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          boxSizing: "border-box",
          paddingRight: "0.5em",
          justifyContent: "end",
        }}
      >
        <SelectionTransformerBar
          editor={editor}
          editor2={editor2}
          editor3={editor3}
          editor4={editor4}
        />
      </Box>
    </>
  );
};

export default GenerationButton;
