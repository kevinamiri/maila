import React, { useRef, useState } from "react";
import Grid from "@mui/material/Grid";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import { useSelector } from "react-redux";
import ToggleButtonList from "./toggle-button-list";

export const audioAWS = async ({ text }: any) => {
  const url = `https://6uk77gp2holg7cmjh5zfjatydq0wtxpe.lambda-url.us-east-2.on.aws`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
      body: JSON.stringify({ text }),
    });
    const buffer = await response.arrayBuffer();
    // const typedArray = new Uint8Array(buffer);
    return buffer;
  } catch (err) {
    throw err;
  }
};

export default function Play() {
  const { selectedTextValue } = useSelector((state: any) => state.editorParams);
  const audioSrc = useRef(null);
  const audioElement = useRef(null)

  const playAudio = async () => {
    try {
      const arrayBuffer = await audioAWS({ text: selectedTextValue });
      const blob = new Blob([new Uint8Array(arrayBuffer)], {
        type: "audio/mpeg",
      });
      const url = URL.createObjectURL(blob);
      audioSrc.current = url;
      audioElement.current.load();
    } catch (err) {
      console.error(err);
    }
  };

  React.useEffect(() => {
    if (audioElement.current) {
      audioElement.current.src = audioSrc.current;
    }
  }, [audioSrc.current]);

  return (
    <>
      <Grid hidden item>
        <div>
          <button onClick={playAudio}>Play</button>
          <audio ref={audioElement} controls />
        </div>
      </Grid>
      <ToggleButtonList
        icon={<PlayCircleOutlineRoundedIcon fontSize='inherit' />}
        title='Listen'
        onClick={playAudio}
        disabled={selectedTextValue.length > 2 ? false : true}
      />
    </>
  );
}
