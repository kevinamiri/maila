import React, { useMemo, useEffect, Suspense } from "react";
import { withReact } from "editable-slate-react";
import { createEditor } from "slate";
import { Node as SlateNode } from "slate";
import { withHistory } from "slate-history";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import LinearProgressLoading from "../subcomponents/LinearProgressLoading";
import loadScriptByURL from "./google";
const SITE_KEY = "6LcA4HoaAAAAAMHEQHKWWXyoi1TaCiDgSJoy2qtP";
import FormRedux from "./FormRedux";
import Card3EditorsRightSide from "./Card3EditorsRightSide";
import GenerationButton from "./GenerationButton";
import LanguageAutocomplete from "../subcomponents/LanguageAutocomplete";
const MainSlateEditor = React.lazy(() => import("./MainSlateEditor"));
import FormHelperText from "@mui/material/FormHelperText";

interface passageContext {
  children: SlateNode[];
  type: string;
}

interface placeholdersList {
  label: string;
  placeholder: string;
  dispatcher: Function;
}
type placeholderLists = placeholdersList[];

interface ProductGenerationProps {
  generateButtonName?: string | any;
  inputLimitation?: number;
  message01?: string | any;
  mainPlaceholder?: String | any;
  headerTitle?: string | any;
  toneTextField?: boolean;
  productType: string;
  productUrl: string;
  labelsLists?: placeholderLists;
  path: string;
  component?: React.ComponentType<{}>;
}

const ProductDescription: React.FC<ProductGenerationProps> = ({
  message01 = "Please select the text you would like to modify",
  mainPlaceholder = `Let's get started with a product description, shall we?`,
  inputLimitation = 201,
  productType = "4",
  productUrl = "generate",
  generateButtonName = "generate",
  headerTitle = "write down some text",
  toneTextField,
  labelsLists,
}: ProductGenerationProps) => {
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  const editor2 = useMemo(() => withHistory(withReact(createEditor())), []);
  const editor3 = useMemo(() => withHistory(withReact(createEditor())), []);
  const editor4 = useMemo(() => withHistory(withReact(createEditor())), []);

  console.log("ProductDescription");
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

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={7}>
          <Card
            elevation={1}
            sx={{
              backgroundColor: "background.paper",
            }}
          >
            <CardHeader title={headerTitle} />
            <CardContent>
              {toneTextField ? (
                <FormRedux toneTextField labelsLists={labelsLists} />
              ) : null}
              <Suspense fallback={<div>Loading...</div>}>
                <FormHelperText sx={{ mb: 2 }}>{message01}</FormHelperText>
                <MainSlateEditor
                  placeholder={mainPlaceholder}
                  editor={editor}
                  limitChar={inputLimitation}
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
                generateButtonName={generateButtonName}
                headerTitle={headerTitle}
                editor={editor}
                editor2={editor2}
                editor3={editor3}
                editor4={editor4}
              />
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <Card elevation={1}>
            <LinearProgressLoading />
            <CardHeader avatar={<LanguageAutocomplete />} />
            <Card3EditorsRightSide
              editor={editor}
              editor2={editor2}
              editor3={editor3}
              editor4={editor4}
            />
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default ProductDescription;
