import React, { useRef } from "react";
import Grid from "@mui/material/Grid";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import { useSelector } from "react-redux";
import ToggleButtonList from "./ToggleButtonList";
//Mui theme

export default function Play() {
  const { selectedTextValue } = useSelector((state) => state.editorParams);
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
      <ToggleButtonList
        icon={<PlayCircleOutlineRoundedIcon fontSize='inherit' />}
        title='Listen'
        onClick={() => {
          serverAudioStreamControl.current.load();
          serverAudioStreamControl.current.play();
        }}
        disabled={selectedTextValue.length > 2 ? false : true}
      />
    </>
  );
}
