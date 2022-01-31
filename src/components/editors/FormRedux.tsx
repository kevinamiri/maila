import React from "react";
import { debounce } from "lodash";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import MultipleOptions from "components/subcomponents/MultipleOptions";
import { useDispatch } from "react-redux";

const FormRedux = ({ toneTextField, labelsLists }) => {
  const dispatch = useDispatch();
  const elementList = labelsLists;

  return (
    <>
      <Grid
        container
        spacing={2}
        direction='row'
        justifyContent='center'
        alignItems='center'
      >
        {elementList.map((element, index) => {
          const { dispatcher } = element;
          return (
            <Grid
              item
              key={index}
              xs={12}
              sm={6}
              sx={{
                "& > *": {
                  width: "99%",
                },
              }}
            >
              <TextField
                onChange={debounce((e) => {
                  e.preventDefault();
                  dispatch(dispatcher(e.target.value));
                }, 300)}
                size='small'
                variant='outlined'
                label={element["label"]}
                placeholder={element["placeholder"]}
              />
            </Grid>
          );
        })}
        {toneTextField ? (
          <Grid
            item
            sx={{
              mb: 2,
            }}
            xs={12}
          >
            <MultipleOptions />
          </Grid>
        ) : null}
      </Grid>
    </>
  );
};

export default FormRedux;
