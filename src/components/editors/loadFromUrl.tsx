import type { FC } from "react";
import React from "react";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import HttpOutlinedIcon from "@mui/icons-material/HttpOutlined";
import LoadingButtonProgress from "components/subcomponents/LoadingButtonProgress";
import { useSelector, useDispatch } from "react-redux";
import useFetchUrl2Insert from "hooks/useFetchUrl2Insert";
import { useSnackbar } from "notistack";
import { Editor } from "slate";
import { updateProgressValue } from "slices/progress";
const SITE_KEY = "6LcA4HoaAAAAAMHEQHKWWXyoi1TaCiDgSJoy2qtP";
import Portal from "@mui/material/Portal";
import { Link } from "@mui/material";
import { debounce } from "lodash";
import { updateLoadFromUrl } from "slices/fieldsValue";

interface loadFromUrlProps {
  editor: Editor;
  editor2?: Editor;
  editor3?: Editor;
  editor4?: Editor;
}

export const LoadFromUrl: FC = ({
  editor,
  editor2,
  editor3,
  editor4,
}: loadFromUrlProps) => {
  //hooks must be outside of the function
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const fieldValues = useSelector((state) => state.fieldsValue);
  const editors = [editor, editor2, editor3, editor4];
  const [show, setShow] = React.useState(false);

  const handleGenerate = (e) => {
    e.preventDefault();
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(SITE_KEY, { action: "submit" })
        .then((gtoken) => {
          dispatch(updateProgressValue(15));
          useFetchUrl2Insert(
            dispatch,
            enqueueSnackbar,
            editors,
            gtoken,
            "58",
            fieldValues
          );
        });
    });
  };

  const handleClick = () => {
    setShow(!show);
  };
  const container = React.useRef(null);

  return (
    <>
      <div>
        <Typography color='textSecondary' variant='body2' sx={{ my: 1 }}>
          <Link href='#' onClick={handleClick}>
            Load from URL
          </Link>
        </Typography>
      </div>
      {show ? (
        <Portal container={container.current}>
          <TextField
            placeholder='https://example.com'
            size='small'
            sx={{
              my: 1,
              flexGrow: 1,
            }}
            onChange={debounce((e) => {
              e.preventDefault();
              const content = JSON.stringify(e.target.value);
              localStorage.setItem("url", content);
              dispatch(updateLoadFromUrl(e.target.value));
            }, 300)}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <HttpOutlinedIcon fontSize='small' />
                </InputAdornment>
              ),
            }}
          />
          <LoadingButtonProgress
            size='small'
            sx={{ m: 1.5 }}
            color='primary'
            variant='contained'
            title='Load from URL'
            onClick={handleGenerate}
          />
        </Portal>
      ) : null}
      <Box
        sx={{
          alignItems: "flex-start",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          my: 1,
        }}
        ref={container}
      />
    </>
  );
};
