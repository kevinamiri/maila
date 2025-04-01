import React from "react"
import { Editor, Node } from "slate"
import { Box } from "@mui/material"
import { useSnackbar } from "notistack"
import { useSelector, useDispatch } from "react-redux"
import { updateProgressValue } from "../../slices/progress"
import SelectionTransformerBar from "./SelectionTransformerBar"
import LoadingButtonProgress from "../subcomponents/LoadingButtonProgress"
import useFetchAllData from "../../hooks/useFetchAllData"
import { AppDispatch, RootState } from "store"

declare global {
  interface Window {
    grecaptcha: {
      ready: (cb: () => void) => void
      execute: (siteKey: string, options: { action: string }) => Promise<string>
    }
  }
}

const SITE_KEY = "6LcA4HoaAAAAAMHEQHKWWXyoi1TaCiDgSJoy2qtP"

type Props = {
  inputLimit?: number
  pType?: string
  pUrl?: string
  editor: Editor
  editor2?: Editor
  editor3?: Editor
  editor4?: Editor
}

const serialize = (ed: Editor) => ed.children.map(x => Node.string(x)).join("\n")

const GenerationButton = ({
  inputLimit = 15000,
  pType = "4",
  pUrl = "generate",
  editor,
  editor2,
  editor3,
  editor4,
}: Props) => {
  const eds = [editor, editor2, editor3, editor4]
  const { enqueueSnackbar } = useSnackbar()
  const dispatch = useDispatch<AppDispatch>()
  const fields = useSelector((state: RootState) => state.fieldsValue)

  const generate = () => {
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(SITE_KEY, { action: "submit" })
        .then((token: string) => {
          dispatch(updateProgressValue(10))
          useFetchAllData(dispatch, enqueueSnackbar, eds, token, pType, fields)
        })
    })
  }

  const btnStyle = {
    display: "flex",
    flexWrap: "wrap",
    boxSizing: "border-box" as const,
  }

  return (
    <>
      <Box sx={{ ...btnStyle, marginRight: "auto", paddingRight: "0.9em", justifyContent: "start" }}>
        <LoadingButtonProgress
          size="small"
          color="primary"
          variant="contained"
          title="Compose"
          onClick={generate}
        />
      </Box>
      <Box sx={{ ...btnStyle, paddingRight: "0.5em", justifyContent: "end" }}>
        <SelectionTransformerBar
          editor={editor}
          editor2={editor2}
          editor3={editor3}
          editor4={editor4}
        />
      </Box>
    </>
  )
}

export default GenerationButton