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






/**
 * 
=======================================================================
New Code as replacement for the above code
=======================================================================
*/

// Extracts and returns the selected text along with its offset and path
export const getSelectedTextDetails = async (editor: Editor) => {
  if (!editor.selection) return;
  
  const [node]: any = Editor.node(editor, editor.selection);
  if (!node.text) return;
  
  const { anchor, focus } = editor.selection;
  const startOffset = Math.min(anchor.offset, focus.offset);
  const endOffset = Math.max(anchor.offset, focus.offset);
  const selectedText = node.text.slice(startOffset, endOffset);
  
  const textDetails = {
    offset: startOffset,
    path: anchor.path,
    text: selectedText,
  };
  
  console.log(`Selected text: ${selectedText.length} characters`);
  return textDetails;
};

// Example usage:
// const details = await getSelectedTextDetails(editor);

export const getSelectionDetails = async (editor: Editor) => {
  if (!editor.selection) return;
  
  const { anchor, focus } = editor.selection;
  
  const selectionDetails = {
    anchor: { path: anchor.path, offset: anchor.offset },
    focus: { path: focus.path, offset: focus.offset },
  };
  
  console.log(`Selection: Anchor at ${anchor.offset}, Focus at ${focus.offset}`);
  return selectionDetails;
};

// Example usage:
// const selection = await getSelectionDetails(editor);

export const getSelectedText = (editor: Editor) => {
  if (!editor.selection) return;
  
  const [node]: any = Editor.node(editor, editor.selection);
  if (!node.text) return;
  
  const { anchor, focus } = editor.selection;
  const startOffset = Math.min(anchor.offset, focus.offset);
  const endOffset = Math.max(anchor.offset, focus.offset);
  const selectedText = node.text.slice(startOffset, endOffset);
  
  console.log(`Selected text: ${selectedText.length} characters`);
  return selectedText;
};

// Example usage:
// const text = getSelectedText(editor);

export const serializeEditor = (editor: Editor) => {
  const serializedContent = editor.children.map(node => SlateNode.string(node)).join("\n");
  
  console.log(`Serialized content: ${serializedContent.length} characters`);
  return serializedContent;
};

// Example usage:
// const content = serializeEditor(editor);
