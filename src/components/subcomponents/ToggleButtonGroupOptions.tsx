import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useDispatch, useSelector } from "react-redux";
import { updateOutputShape } from "slices/fieldsValue";
import { AppDispatch } from "store";

export default function ToggleButtonGroupOptions({ options }) {
  const dispatch = useDispatch<AppDispatch>();
  const fieldValues = useSelector((state: any) => state.fieldsValue);

  const handleChange = (
    e: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    dispatch(updateOutputShape(newAlignment));
  };

  return (
    <ToggleButtonGroup
      color='primary'
      value={fieldValues.outputShape}
      exclusive
      onChange={handleChange}
    >
      {options.map((option, index) => (
        <ToggleButton size='small' key={index} value={option}>
          {option}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}
