import React, { useRef } from "react";
import { Grid, IconButton, Tooltip } from "@mui/material";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import { useSelector } from "react-redux";
import ToggleButtonList from "./ToggleButtonList";
//Mui theme

export default function Play() {
  const { selectionStatus, selectedTextValue } = useSelector(
    (state) => state.editorParams
  );
  const serverAudioStreamControl = useRef(null);

  const streamQueryString = `phrase=${selectedTextValue}`;
  let url = `${"https://audio.maila.ai:1920/text-to-speech"}?${streamQueryString}`;
  return (
    <>
      <Grid hidden item>
        <audio ref={serverAudioStreamControl}>
          <source src={url} />
        </audio>
      </Grid>
      <Tooltip title='Listen' arrow>
        <ToggleButtonList
          icon={<PlayCircleOutlineRoundedIcon fontSize='inherit' />}
          onClick={() => {
            serverAudioStreamControl.current.load();
            serverAudioStreamControl.current.play();
          }}
          disabled={selectedTextValue.length > 2 ? false : true}
        />
        {/* <IconButton
          size='small'
          color='primary'
          sx={{
            p: 0.0,
          }}
          component='span'
          disabled={selectedTextValue.length > 2 ? false : true}
          onClick={() => {
            serverAudioStreamControl.current.load();
            serverAudioStreamControl.current.play();
          }}
        >
          <PlayCircleOutlineRoundedIcon />
        </IconButton> */}
      </Tooltip>
    </>
  );
}
