import * as React from "react";
import { debounce } from "lodash";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { useSelector, useDispatch } from "react-redux";
import {
  updateTemperature,
  updateFrequencyPenalty,
  updatePresencePenalty,
  updateMaxTokens,
  updateEngineId,
} from "../../slices/fieldsValue";

export default function InputSettings({
  temperature,
  tokenL,
  frequencyP,
  presenceP,
  engineId,
}) {
  const dispatch = useDispatch();
  return (
    <Grid
      container
      spacing={2}
      direction='row'
      justifyContent='center'
      alignItems='center'
    >
      {temperature && (
        <Grid
          item
          sx={{
            mb: 2,
          }}
          xs={6}
        >
          <Typography variant='caption' color='initial'>
            Creactivity Temperature
          </Typography>
          <Slider
            size='small'
            defaultValue={0}
            aria-label='Small'
            min={0.0}
            step={0.01}
            max={0.99}
            onChange={debounce((e) => {
              e.preventDefault();
              dispatch(updateTemperature(e.target.value));
            }, 300)}
            valueLabelDisplay='auto'
          />
        </Grid>
      )}
      {tokenL && (
        <Grid
          item
          sx={{
            mb: 2,
          }}
          xs={6}
        >
          <Typography variant='caption' color='initial'>
            Length Token
          </Typography>
          <Slider
            size='small'
            defaultValue={0}
            aria-label='Small'
            min={10}
            step={1}
            max={4000}
            onChange={debounce((e) => {
              e.preventDefault();
              dispatch(updateMaxTokens(e.target.value));
            }, 300)}
            valueLabelDisplay='auto'
          />
        </Grid>
      )}
      {frequencyP && (
        <Grid
          item
          sx={{
            mb: 2,
          }}
          xs={6}
        >
          <Typography variant='caption' color='initial'>
            Words Diversity
          </Typography>

          <Slider
            size='small'
            defaultValue={0}
            aria-label='Small'
            min={0.0}
            step={0.01}
            max={1.99}
            onChange={debounce((e) => {
              e.preventDefault();
              dispatch(updateFrequencyPenalty(e.target.value));
            }, 300)}
            valueLabelDisplay='auto'
          />
        </Grid>
      )}
      {presenceP && (
        <Grid
          item
          sx={{
            mb: 2,
          }}
          xs={6}
        >
          <Typography variant='caption' color='initial'>
            Subject Distraction
          </Typography>
          <Slider
            size='small'
            defaultValue={0}
            aria-label='Small'
            min={0.0}
            step={0.01}
            max={1.99}
            onChange={debounce((e) => {
              e.preventDefault();
              dispatch(updatePresencePenalty(e.target.value));
            }, 300)}
            valueLabelDisplay='auto'
          />
        </Grid>
      )}
      {engineId && (
        <Grid
          item
          sx={{
            mb: 2,
          }}
          xs={6}
        >
          <Typography variant='caption' color='initial'>
            Engine Id:
          </Typography>
          <Slider
            size='small'
            defaultValue={0}
            aria-label='Small'
            min={0}
            step={1}
            max={100}
            onChange={debounce((e) => {
              e.preventDefault();
              dispatch(updateEngineId(e.target.value));
            }, 300)}
            valueLabelDisplay='auto'
          />
        </Grid>
      )}
    </Grid>
  );
}
