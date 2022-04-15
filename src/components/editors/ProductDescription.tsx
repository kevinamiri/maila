import React, { useEffect, Suspense } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Divider from "@mui/material/Divider";
import useEditors from "../../hooks/useEditors";
import loadScriptByURL from "./google";
const SITE_KEY = "6LcA4HoaAAAAAMHEQHKWWXyoi1TaCiDgSJoy2qtP";
import FormRedux from "./FormRedux";
import Card3EditorsRightSide from "./Card3EditorsRightSide";
import GenerationButton from "./GenerationButton";
const MainSlateEditor = React.lazy(() => import("./MainSlateEditor"));
import FormHelperText from "@mui/material/FormHelperText";
import QuestionMarkIcon from "../subcomponents/questionMarkIcon";
import InputSettings from "./input-settings";
import OutputsDrawer from "components/outputs-drawer";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import IconButton from "@mui/material/IconButton";
import OpenInFullRoundedIcon from "@mui/icons-material/OpenInFullRounded";
import { useDispatch, useSelector } from "react-redux";
import { updateExpansion } from "../../slices/ui-states";
import LanguageOutputsModal from "../../components/subcomponents/language-outputs-modal";

interface placeholdersList {
  label: string;
  placeholder: string;
  dispatcher: (value: string) => void;
}
type placeholderLists = placeholdersList[];

export interface ProductGenerationProps {
  generateButtonName?: string | any;
  inputLimitation?: number;
  message01?: string | any;
  mainPlaceholder?: String | any;
  headerTitle?: string | any;
  toneTextField?: boolean;
  productType?: string;
  productUrl?: string;
  labelsLists?: placeholderLists;
  path: string;
  label?: String | any;
  tunningOptions?: any;
  description?: String | any;
  example?: String | any;
  instructHelp?: String | any;
  component?: React.ComponentType<{}>;
  editorType?: "document" | "draft";
}

const ProductDescription: React.FC<ProductGenerationProps> = ({
  inputLimitation = 15000,
  productType = "4",
  label,
  productUrl = "generate",
  toneTextField,
  labelsLists,
  description,
  instructHelp,
  example,
  tunningOptions,
  editorType = "document",
}: ProductGenerationProps) => {
  // const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  const editors = useEditors();
  const [editor1, editor2, editor3, editor4, editor5] = editors;

  // const editors = [editor, editor2, editor3, editor4, editor5];
  const dispatch = useDispatch();
  const { expand } = useSelector((state) => state.expandReducer);

  const mainEditors = {
    document: editor1,
    draft: editor5,
    storageKey: ["draft", "document"],
  };

  const editor = editorType === "draft" ? editor5 : editor1;
  const storageKey = editorType === "draft" ? "draft" : "document";

  useEffect(() => {
    // load the script by passing the URL
    loadScriptByURL(
      "recaptcha-key",
      `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`,
      function () {
        console.log("Google captcha loaded!");
      }
    );
  }, []);
  const handleClose = (): void => {
    dispatch(updateExpansion(false));
  };
  const handleExpand = (): void => {
    dispatch(updateExpansion(!expand));
  };
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            // height: 233,
            width: "100%",
            // 'vw' make it more smoother than '%'
            ...(expand && {
              width: { xs: "100%", md: "calc(100% - 30%)" },
              height: { xs: "calc(100% - 30%)", md: "100%" },
              marginRight: { xs: "0%", md: "33%" },
              marginBottom: { xs: "60vw", md: "0%" },
            }),
          }}
        >
          <Card
            elevation={1}
            sx={{
              backgroundColor: "background.paper",
            }}
          >
            <CardHeader
              title={label}
              avatar={<QuestionMarkIcon title={description} />}
              action={
                <>
                  <LanguageOutputsModal />
                  <IconButton
                    onClick={handleExpand}
                    size='small'
                    aria-label='Expanding window'
                  >
                    <OpenInFullRoundedIcon fontSize='small' />
                  </IconButton>
                </>
              }
            />

            <CardContent>
              {tunningOptions && (
                <InputSettings temperature tokenL frequencyP presenceP />
              )}
              {toneTextField ? (
                <FormRedux toneTextField labelsLists={labelsLists} />
              ) : null}
              <Suspense fallback={<div>Loading...</div>}>
                <FormHelperText sx={{ mb: 2 }}>{instructHelp}</FormHelperText>
                <MainSlateEditor
                  placeholder={example}
                  editor={editor}
                  limitChar={inputLimitation}
                  //main editor storage name for editor
                  storageKey={storageKey}
                  editor2={editor2}
                  editor3={editor3}
                  editor4={editor4}
                />
              </Suspense>
            </CardContent>
            <Divider />
            <CardActions disableSpacing>
              <GenerationButton
                inputLimitation={inputLimitation}
                productType={productType}
                productUrl={productUrl}
                // the main editor is editor
                editor={editor}
                editor2={editor2}
                editor3={editor3}
                editor4={editor4}
              />
            </CardActions>
          </Card>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
          }}
        >
          <OutputsDrawer
            anchor={matches ? "right" : "bottom"}
            handleExpand={handleExpand}
            onClose={handleClose}
            open={expand}
          >
            <Card elevation={1} sx={{ width: "100%" }}>
              <Card3EditorsRightSide
                // the main editor is editor
                editor={editor}
                editor2={editor2}
                editor3={editor3}
                editor4={editor4}
              />
            </Card>
          </OutputsDrawer>
        </Box>
      </Box>
    </>
  );
};

export default ProductDescription;
