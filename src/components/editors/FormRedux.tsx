import React from "react";
import { debounce } from "lodash";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import MultipleOptions from "components/subcomponents/MultipleOptions";
import { useDispatch } from "react-redux";
import ToggleButtonGroupOptions from "components/subcomponents/ToggleButtonGroupOptions";
import {
  updateBusinessNameValue,
  updatePurposeValue,
} from "slices/fieldsValue";
// import TextAreaRedux from "./textAreaRedux";

const FormRedux = ({ tonsOptions, labelsLists, extraFields }) => {
  // order of this dispatchers are important and we had defined them before in the mardown file
  const dispatchers = [
    {
      id: 0,
      dispatcher: updateBusinessNameValue,
    },
    {
      id: 1,
      dispatcher: updatePurposeValue,
    },
  ];

  const dispatch = useDispatch();
  const elementList = labelsLists;

  //function that takes two array of fieldLists and extraFields and return the merging object when 'name' is share key
  //function that get an object and return an array of objects values
  const getValues = (obj) => Object.values(obj);
  const fields =
    extraFields && getValues(extraFields).filter((item) => item !== null);
  console.log(fields);
  const dispatchersLists: any = dispatchers.map(
    (x) => getValues(x)[1]
  ); /* [ updateBusinessNameValue, updatePurposeValue] */

  const filteredFields =
    fields &&
    fields.length > 0 &&
    fields.filter(
      (field) =>
        field?.id &&
        dispatchers.find((dispatcher) => dispatcher.id === field.id)
    );

  /**
   * This making sure that when the component rendered for the first time,
   * and redux state is empty, we fill the redux state with the values from browser local storage
   */
  React.useEffect(() => {
    filteredFields &&
      filteredFields.length > 0 &&
      filteredFields.map((field, i) => {
        dispatch(
          dispatchers[i].dispatcher(
            JSON.parse(
              typeof window !== "undefined" &&
                window.localStorage.getItem(field.name)
            ) || ""
          )
        );
      });
  }, []);

  return (
    <>
      <Grid
        container
        spacing={2}
        direction='row'
        justifyContent='center'
        alignItems='center'
      >
        {fields &&
          fields.length > 0 &&
          fields.map((field, index) => {
            const feildId = field.id;
            console.log(field);
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
                {field.type === "text" && (
                  <TextField
                    onChange={debounce((e) => {
                      e.preventDefault();
                      const content = JSON.stringify(e.target.value);
                      localStorage.setItem(`${field["name"]}`, content);
                      dispatch(dispatchersLists[feildId](e.target.value));
                    }, 300)}
                    size='small'
                    variant='outlined'
                    //default values must be in the browser local storage.
                    defaultValue={
                      JSON.parse(
                        typeof window !== "undefined" &&
                          window.localStorage.getItem(field["name"])
                      ) || ""
                    }
                    label={field["label"]}
                    placeholder={field["placeholder"]}
                  />
                )}
                {field.type === "toggleButtons" && (
                  <ToggleButtonGroupOptions options={field["options"]} />
                )}
                {/* {field.type === "textarea" && <TextAreaRedux />} */}
              </Grid>
            );
          })}

        <Grid
          item
          sx={{
            mb: 2,
          }}
          xs={12}
        >
          {tonsOptions && <MultipleOptions />}
        </Grid>
      </Grid>
    </>
  );
};

export default FormRedux;
