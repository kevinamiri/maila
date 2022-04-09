/* eslint-disable @typescript-eslint/no-use-before-define */
import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { navigate } from "gatsby";
import Autocomplete from "@mui/material/Autocomplete";
// import productPath from "../account/productPath";
import useToolsPathes from "../../hooks/useToolsPathes";

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
  const toolsPathes = useToolsPathes();
  const toolsPathe = toolsPathes.map((x) => x.node.frontmatter);
  const [inputValue, setInputValue] = React.useState("");
  return (
    <Stack spacing={2} sx={{ width: { xs: "80%", md: "70%" } }}>
      <Autocomplete
        size='small'
        freeSolo
        disableClearable
        onChange={(event: any, newValue: any) => {
          navigate(newValue.url);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        options={toolsPathe as productPathType[]}
        autoHighlight
        getOptionLabel={(option) => option.title}
        renderOption={(props, option) => <li {...props}>{option.title}</li>}
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
