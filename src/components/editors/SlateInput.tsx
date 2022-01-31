import Paper from "@mui/material/Paper";
import React from "react";
import { Node as SlateNode } from "slate";
// Import the Slate components and React plugin.
import { Slate, Editable } from "editable-slate-react";

const SlateInput = (props) => {
  const editor5 = props.editor;
  // Add the initial value when setting up our state.
  const [value11, setValue11] = props.values;

  const handleChange = (value: SlateNode[]) => {
    setValue11(value);
  };

  const reference = React.useRef();
  // const handleF = () => {
  //   reference.current.focus = true;
  //   reference.current.style.border = "2px solid #ced4da";
  // };
  return (
    <Paper
      elevation={2}
      sx={{
        border: (theme) => `2px solid ${theme.palette.divider}`,
      }}
    >
      <Slate editor={editor5} value={value11} onChange={handleChange}>
        <Editable
          style={{ display: "inline" }}
          placeholder={props.placeholder}
          spellCheck
          autoFocus
        />
      </Slate>
    </Paper>
  );
};

export default SlateInput;
