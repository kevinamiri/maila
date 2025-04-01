// Core
import React, { useEffect, Suspense } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useTheme } from "@mui/material/styles"

// UI Components
import {
  Box, Card, CardHeader, CardContent, CardActions,
  Divider, FormHelperText, IconButton, useMediaQuery
} from "@mui/material"
import OpenInFullRoundedIcon from "@mui/icons-material/OpenInFullRounded"

// Local
import useEditors from "../../hooks/useEditors"
import { updateExpansion } from "../../slices/ui-states"
import { AppDispatch } from "store"
import loadScriptByURL from "./google"
import GenerationButton from "./GenerationButton"
import MultipleOptions from "components/subcomponents/MultipleOptions"
import SlidePanelOutput from "components/side-panel-output"
import LanguageOutputsModal from "components/subcomponents/language-outputs-modal"
import QuestionMarkIcon from "components/subcomponents/questionMarkIcon"
import { LoadFromUrl } from "./loadFromUrl"
import InputSettings from "./input-settings"
import FormRedux from "./FormRedux"
import EditorsPanelSide from "./EditorsPanelSide"


// Lazy loaded components
const MainSlateEditor = React.lazy(() => import("./MainSlateEditor"))

// Constants
const RECAPTCHA_KEY = "6LcA4HoaAAAAAMHEQHKWWXyoi1TaCiDgSJoy2qtP"
const RECAPTCHA_URL = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_KEY}`

// Types
type InputField = { label: string; placeholder: string; dispatcher?: (v: string) => void }
type EditorType = "document" | "draft"

type Props = {
  generateButtonName?: string
  inputLimitation?: number
  message01?: string
  mainPlaceholder?: string
  headerTitle?: string
  toneTextField?: boolean
  productType?: string
  productUrl?: string
  labelsLists?: InputField[]
  path: string
  extraFields?: any
  editorHeight?: number
  label?: string
  tunningOptions?: boolean
  description?: string
  example?: string
  instructHelp?: string
  component?: React.ComponentType<{}>
  editorType?: EditorType
  loadFromUrl?: boolean
}

// Styles
const styles = {
  mainBox: (expand: boolean) => ({
    flexGrow: 1,
    width: "100%",
    ...(expand && {
      width: { xs: "100%", md: "calc(100% - 30%)" },
      height: { xs: "calc(100% - 30%)", md: "100%" },
      marginRight: { xs: "0%", md: "33%" },
      marginBottom: { xs: "60vw", md: "0%" },
    })
  }),
  container: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: "center",
    alignItems: "center"
  }
}

// Component
const ProductDescription = ({
  inputLimitation = 15000,
  productType = "4",
  label,
  productUrl = "generate",
  toneTextField,
  labelsLists,
  extraFields,
  description,
  editorHeight,
  instructHelp,
  example,
  tunningOptions,
  editorType = "document",
  loadFromUrl,
}: Props) => {
  const { editor1, editor2, editor3, editor4, editor5 } = useEditors()
  const dispatch = useDispatch<AppDispatch>()
  const { expand } = useSelector((state: any) => state.expandReducer)
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"))

  const editor = editorType === "draft" ? editor5 : editor1
  const storageKey = editorType === "draft" ? "draft" : "document"

  useEffect(() => {
    loadScriptByURL("recaptcha-key", RECAPTCHA_URL, () => console.log("ReCaptcha loaded"))
  }, [])

  const toggleExpand = () => dispatch(updateExpansion(!expand))
  const closeExpand = () => dispatch(updateExpansion(false))

  return (
    <Box sx={styles.container}>
      <Box sx={styles.mainBox(expand)}>
        <Card elevation={1} sx={{ backgroundColor: "background.paper" }}>
          <CardHeader
            title={label}
            avatar={<QuestionMarkIcon title={description} />}
            action={
              <>
                <LanguageOutputsModal />
                <IconButton onClick={toggleExpand} size="small" aria-label="Expand">
                  <OpenInFullRoundedIcon fontSize="small" />
                </IconButton>
              </>
            }
          />

          <CardContent>
            {tunningOptions && <InputSettings temperature tokenL frequencyP presenceP engineId />}
            {extraFields && <FormRedux labelsLists={labelsLists} extraFields={extraFields} />}
            {toneTextField && <Box sx={{ mt: 2 }}><MultipleOptions /></Box>}
            {loadFromUrl && <LoadFromUrl editor={editor} editor2={editor2} editor3={editor3} editor4={editor4} />}

            <Suspense fallback={<div>Loading...</div>}>
              <FormHelperText sx={{ mb: 2 }}>{instructHelp}</FormHelperText>
              <MainSlateEditor
                placeholder={example}
                editor={editor}
                limitChar={inputLimitation}
                storageKey={storageKey}
                editorHeight={editorHeight}
                productType={productType}
                editor2={editor2}
                editor3={editor3}
                editor4={editor4}
              />
            </Suspense>
          </CardContent>

          <Divider />

          <CardActions disableSpacing>
            <GenerationButton
              inputLimit={inputLimitation}
              pType={productType}
              pUrl={productUrl}
              editor={editor}
              editor2={editor2}
              editor3={editor3}
              editor4={editor4}
            />
          </CardActions>
        </Card>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", alignItems: { xs: "center", md: "flex-start" } }}>
        <SlidePanelOutput
          anchor={isDesktop ? "right" : "bottom"}
          handleExpand={toggleExpand}
          onClose={closeExpand}
          open={expand}
        >
          <EditorsPanelSide
            editor={editor}
            editor2={editor2}
            editor3={editor3}
            editor4={editor4}
          />
        </SlidePanelOutput>
      </Box>
    </Box>
  )
}

export default ProductDescription