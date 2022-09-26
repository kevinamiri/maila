import React, { useMemo } from "react";
import { withReact } from "editable-slate-react";
import { createEditor } from "slate";
import { withHistory } from "slate-history";

export const useEditors = () => {
  const editor1 = useMemo(() => withHistory(withReact(createEditor())), []);
  const editor2 = useMemo(() => withHistory(withReact(createEditor())), []);
  const editor3 = useMemo(() => withHistory(withReact(createEditor())), []);
  const editor4 = useMemo(() => withHistory(withReact(createEditor())), []);
  const editor5 = useMemo(() => withHistory(withReact(createEditor())), []);
  const editors = {
    editor1,
    editor2,
    editor3,
    editor4,
    editor5,
  };

  return editors;
};

export default useEditors;
