import React from "react";
import { ReactEditor } from "editable-slate-react";
import { Editor, Range } from "slate";
import { Portal, Menu } from "./components";
import SelectionTransformerBar from "./SelectionTransformerBar";

const HoveringToolbar = (props) => {
  console.log("HoveringToolbar rendered");
  const ref = React.useRef<HTMLDivElement | null>();
  const editor = props.editor;
  const editor2 = props.editor2;
  const editor3 = props.editor3;
  const editor4 = props.editor4;

  React.useEffect(() => {
    const el = ref.current;
    const { selection } = editor;

    if (!el) {
      return;
    }

    if (
      !selection ||
      !ReactEditor.isFocused(editor) ||
      Range.isCollapsed(selection) ||
      Editor.string(editor, selection) === ""
    ) {
      el.removeAttribute("style");
      return;
    }

    const domSelection = window.getSelection();
    const domRange = domSelection.getRangeAt(0);
    const rect = domRange.getBoundingClientRect();
    el.style.opacity = "1";
    el.style.top = `${rect.top + window.pageYOffset - el.offsetHeight}px`;
    el.style.left = `${
      rect.left + window.pageXOffset - el.offsetWidth / 2 + rect.width / 2
    }px`;
  });

  return (
    <Portal>
      <Menu
        ref={ref}
        sx={{
          position: "absolute",
          zIndex: 1,
          top: "-10000px",
          left: "-10000px",
          opacity: 0,
          border: (theme) => `1px solid ${theme.palette.divider}`,
          backgroundColor: (theme) => theme.palette.background.paper,
          transition: "opacity 0.75s",
        }}
      >
        <SelectionTransformerBar
          editor={editor}
          editor2={editor2}
          editor3={editor3}
          editor4={editor4}
        />
      </Menu>
    </Portal>
  );
};

export default HoveringToolbar;
