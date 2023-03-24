/* eslint-disable @typescript-eslint/no-use-before-define */
import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { useSelector, useDispatch } from "react-redux";
import { updateToneOfVoiceValue } from "../../slices/fieldsValue";
import Voices from "./Voices";

interface VoiceOptionType {
  inputValue?: string;
  tone: string;
}

const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
const checkedIcon = <CheckBoxIcon fontSize='small' />;
const filter = createFilterOptions<VoiceOptionType>();
export default function CheckboxesTags() {
  const dispatch = useDispatch();
  const { defaultVoice } = useSelector((state: any) => state.fieldsValue);
  const [inputValue, setInputValue] = React.useState("");

  return (
    <Autocomplete
      multiple
      size='small'
      freeSolo
      onChange={(event, newValue) => {
        if (typeof newValue === "string") {
          dispatch(updateToneOfVoiceValue(newValue));
        } else if (newValue && inputValue) {
          const newvaluearr = [...defaultVoice];
          newvaluearr.push({ tone: inputValue });
          dispatch(updateToneOfVoiceValue(newvaluearr));
        } else {
          dispatch(updateToneOfVoiceValue(newValue));
        }
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      autoHighlight
      options={Voices}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        const { inputValue } = params;
        const isExisting = options.some((option) => inputValue === option.tone);
        if (inputValue !== "" && !isExisting) {
          filtered.push({
            inputValue,
            tone: `${inputValue}`,
          });
        }

        return filtered;
      }}
      disableCloseOnSelect
      getOptionLabel={(option) => option.tone}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 6 }}
            checked={selected}
          />
          {option.tone}
        </li>
      )}
      renderInput={(params) => (
        <TextField
          error={defaultVoice.length < 1 ? true : false}
          {...params}
          variant='outlined'
          label='Style and tone'
          placeholder='You may select one or more tone'
        />
      )}
    />
  );
}
