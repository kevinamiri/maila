import React from "react";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ToggleButtonList from "./ToggleButtonList";
import { Node as SlateNode } from "slate";

const serialize = (editorname) => {
  return editorname.children.map((x) => SlateNode.string(x)).join("\n");
};

const CopyToClipboard = ({ editor }) => {
  const [isCopied, setIsCopied] = React.useState(false);

  const copyToClipboard = React.useCallback(() => {
    navigator.clipboard.writeText(serialize(editor));
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  }, []);
  return (
    <ToggleButtonList
      title={isCopied ? "Copied!" : "Copy"}
      icon={<FileCopyIcon fontSize='inherit' />}
      onClick={copyToClipboard}
      disabled={serialize(editor).length < 1}
    />
  );
};

export default CopyToClipboard;
