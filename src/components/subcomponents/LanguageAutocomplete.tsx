/* eslint-disable @typescript-eslint/no-use-before-define */
import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { updateDefaultLanguage } from "../../slices/fieldsValue";
import { useDispatch } from "react-redux";
import countries from "../../components/account/countries";

interface CountryType {
  code: string;
  label: string;
  LangCode: string;
}

export default function LanguageAutocomplete() {
  const [inputValue, setInputValue] = React.useState("");
  const dispatch = useDispatch();

  console.log("countries", countries);

  return (
    <Stack spacing={2} sx={{ width: 200 }}>
      <Autocomplete
        size='small'
        onChange={(event: any, newValue: any) => {
          console.log("countries", countries);
          dispatch(updateDefaultLanguage(newValue));
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        options={countries as CountryType[]}
        autoHighlight
        getOptionLabel={(option) =>
          option && option?.LangCode.toUpperCase() + " - " + option.label
        }
        renderOption={(props, option) => (
          <li {...props}>
            {option && option?.LangCode.toUpperCase() + " - " + option.label}
          </li>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label='Language'
            color='secondary'
            variant='outlined'
            inputProps={{
              ...params.inputProps,
              // disable autocomplete and autofill
              autoComplete: "new-password",
            }}
          />
        )}
      />
    </Stack>
  );
}
