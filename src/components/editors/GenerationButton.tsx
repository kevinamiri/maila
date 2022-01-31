import React from "react";
import { ReactEditor } from "editable-slate-react";
import {
  Editor,
  Transforms,
  Node as SlateNode,
  Element as SlateElement,
} from "slate";
import { Auth } from "aws-amplify";
import Box from "@mui/material/Box";
const SITE_KEY = "6LcA4HoaAAAAAMHEQHKWWXyoi1TaCiDgSJoy2qtP";
import { useSnackbar } from "notistack";
import { useSelector, useDispatch } from "react-redux";
import { updateProgressValue } from "../../slices/progress";
import SelectionTransformerBar from "./SelectionTransformerBar";
import LoadingButtonProgress from "../subcomponents/LoadingButtonProgress";

const serialize = (editorname: Editor) => {
  return editorname.children.map((x) => SlateNode.string(x)).join("\n");
};
interface GenerationButtonProps {
  generateButtonName?: string;
  inputLimitation?: number;
  mainPlaceholder?: String;
  headerTitle?: string;
  productType?: string;
  productUrl?: string;
  editor: Editor;
  editor2?: Editor;
  editor3?: Editor;
  editor4?: Editor;
}

const GenerationButton: React.FC<GenerationButtonProps> = ({
  inputLimitation = 201,
  productType = "4",
  productUrl = "generate",
  generateButtonName = "Generate",
  headerTitle = "write down some text",
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
          fetchAndDistributeData(gtoken, productType, productUrl);
        });
    });
  };

  //get the limited text and send it to the api url
  async function fetchAndDistributeData(
    gtoken,
    url: string,
    productUrl: string
  ) {
    try {
      const charLimitValidate = serialize(editor).substring(0, inputLimitation);
      // string , url, gtoken
      const textLists = await fetchData(
        charLimitValidate,
        gtoken,
        url,
        productUrl
      );
      dispatch(updateProgressValue(50));

      let textOptions = Object.values(textLists);

      textOptions
        .filter((x: any) => x.search("Error 4043") != -1)
        .map((element) => enqueueSnackbar(element));
      textOptions
        .filter((x: any) => x.search("Error 4043") == -1)
        .map((text, index) =>
          Transforms.insertText(editors[index + 1], text, { at: [0] })
        );

      dispatch(updateProgressValue(100));
      // Moving cursor to the end of the document
      ReactEditor.focus(editor);
      Transforms.select(editor, Editor.end(editor, []));
    } catch (error) {
      Transforms.insertText(
        editors[1],
        error.message + " Please contact the support@maila.ai",
        { at: [0] }
      );
      dispatch(updateProgressValue(100));
    }
  }

  interface ApiData {
    text1: string;
    text2: string;
    text3: string;
  }

  const fetchData = async (
    parameters: string,
    gtoken: string,
    url: string,
    productUrl
  ) => {
    try {
      const urlType = url;
      const element = `${parameters}`;
      const theUrl = `https://api.maila.ai/${productUrl}`;
      const params = {};
      const ListVoices = fieldValues.defaultVoice.map((x) => x.tone);
      const selectedVoices = ListVoices.join(",");
      params["query"] = element;
      params["finalLang"] = fieldValues.language.LangCode;
      params["grecaptcharesponse"] = gtoken;

      selectedVoices ? (params["tone"] = selectedVoices) : null;
      fieldValues.businessNameValue
        ? (params["name"] = fieldValues.businessNameValue)
        : null;
      fieldValues.keywordValue
        ? (params["keyword"] = fieldValues.keywordValue)
        : null;
      fieldValues.audienceValue
        ? (params["audience"] = fieldValues.audienceValue)
        : null;
      fieldValues.featureValue
        ? (params["feature"] = fieldValues.featureValue)
        : null;
      urlType ? (params["type"] = urlType) : null;
      const data = JSON.stringify(params);
      const response = await fetch(theUrl, {
        headers: {
          Authorization: `Bearer ${(await Auth.currentSession())
            .getIdToken()
            .getJwtToken()}`,
        },
        method: "POST",
        body: data,
      });
      const res: ApiData = await response.json();
      let rerurningData = res;
      return rerurningData;
    } catch (error) {
      console.error(error);
    }
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
          title={generateButtonName}
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
