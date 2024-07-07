import React, { useState, useCallback } from "react";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ToggleButtonList from "./ToggleButtonList";
import { Node, Editor } from "slate";

// Serialize editor content to string
const serializeContent = (editor: Editor): string => 
  editor.children.map(node => Node.string(node)).join("\n");

interface CopyToClipboardProps {
  editor: Editor;
}

const CopyToClipboard: React.FC<CopyToClipboardProps> = ({ editor }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    const content = serializeContent(editor);
    try {
      await navigator.clipboard.writeText(content);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.log("Failed to copy:", error);
      // TODO: Add user-friendly error notification
    }
  }, [editor]);

  return (
    <ToggleButtonList
      icon={<FileCopyIcon fontSize="inherit" />}
      onClick={handleCopy}
      disabled={editor.children.length === 0}
      aria-label={isCopied ? "Copied!" : "Copy to clipboard"}
    />
  );
};

export default CopyToClipboard;

// Usage example:
// <CopyToClipboard editor={slateEditor} />