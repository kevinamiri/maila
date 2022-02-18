import {
  Editor,
  Node as SlateNode 
} from "slate";

export const commandCompatiblePointWords = async (editor:Editor) => {

  if (!editor.selection) return;
  let [node]: any = Editor.node(editor, editor.selection);
  if (!node.text) return;
  const selectedTextR = node.text.slice(
    editor.selection.anchor.offset,
    editor.selection.focus.offset
  );
  const selectedTextL = node.text.slice(
    editor.selection.focus.offset,
    editor.selection.anchor.offset
  );

  const whichPointisStarting = selectedTextR
    ? { offset: editor.selection.anchor.offset }
    : { offset: editor.selection.focus.offset };

  let selectedText = selectedTextR ? selectedTextR : selectedTextL;

  const commandCompatiblePointWords = {
    offset: whichPointisStarting.offset,
    path: editor.selection.anchor.path,
    text: selectedText,
  };
  return commandCompatiblePointWords
}


export const selectedPoint = async (editor:Editor) => {

  if (!editor.selection) return;
  let [node]: any = Editor.node(editor, editor.selection);
  if (!node.text) return;
  const selectedTextR = node.text.slice(
    editor.selection.anchor.offset,
    editor.selection.focus.offset
  );
  const selectedTextL = node.text.slice(
    editor.selection.focus.offset,
    editor.selection.anchor.offset
  );

  const whichPointisStarting = selectedTextR
    ? { offset: editor.selection.anchor.offset }
    : { offset: editor.selection.focus.offset };
  let selectedText = selectedTextR ? selectedTextR : selectedTextL;
  const commandCompatiblePointWords = {
    offset: whichPointisStarting.offset,
    path: editor.selection.anchor.path,
    text: selectedText,
  };

  let selectedPoint = {
    anchor: {
      path: editor.selection.anchor.path,
      offset: editor.selection.anchor.offset,
    },
    focus: {
      path: editor.selection.focus.path,
      offset: editor.selection.focus.offset,
    }
  };

  return selectedPoint

}

export const selectedText = (editor:Editor) => {

  if (!editor.selection) return;
  let [node]: any = Editor.node(editor, editor.selection);
  if (!node.text) return;
  const selectedTextR = node.text.slice(
    editor.selection.anchor.offset,
    editor.selection.focus.offset
  );
  const selectedTextL = node.text.slice(
    editor.selection.focus.offset,
    editor.selection.anchor.offset
  );
  let selectedText:string = selectedTextR ? selectedTextR : selectedTextL;
  return selectedText
}

export const serialize = (editorname:Editor) => {
  return editorname.children.map((x) => SlateNode.string(x)).join("\n");
};


export default selectedPoint;
