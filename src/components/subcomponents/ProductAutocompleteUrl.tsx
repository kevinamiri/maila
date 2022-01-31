/* eslint-disable @typescript-eslint/no-use-before-define */
import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { navigate } from "gatsby";
import Autocomplete from "@mui/material/Autocomplete";
import productPath from "../account/productPath";

/**
 * searching Product
 */
interface productPathType {
  url: string;
  label: string;
}

interface ProductAutocompleteUrlProps {
  placeholder?: string;
}

export default function ProductAutocompleteUrl({
  placeholder = "Search",
}: ProductAutocompleteUrlProps) {
  const [inputValue, setInputValue] = React.useState("");
  return (
    <Stack spacing={2} sx={{ width: 500 }}>
      <Autocomplete
        size='small'
        freeSolo
        disableClearable
        id='checkboxes-language'
        onChange={(event: any, newValue: any) => {
          navigate(newValue.url);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        options={productPath as productPathType[]}
        autoHighlight
        getOptionLabel={(option) => option.label}
        renderOption={(props, option) => <li {...props}>{option.label}</li>}
        renderInput={(params) => (
          <TextField
            {...params}
            label={placeholder}
            color='primary'
            variant='outlined'
            inputProps={{
              ...params.inputProps,
              // disable autocomplete and autofill
              type: "search",
              autoComplete: "new-password",
            }}
          />
        )}
      />
    </Stack>
  );
}
