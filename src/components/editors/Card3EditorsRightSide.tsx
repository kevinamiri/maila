import React from "react";
import ChildText from "./ChildText";

const Card3EditorsRightSide = ({ editor, editor2, editor3, editor4 }) => {
  return (
    <>
      <ChildText
        mainEditor={editor}
        correspondedEditor={editor2}
        storageName='content22'
      />
      <ChildText
        mainEditor={editor}
        correspondedEditor={editor3}
        storageName='content33'
      />
      <ChildText
        mainEditor={editor}
        correspondedEditor={editor4}
        storageName='content44'
      />
    </>
  );
};

export default Card3EditorsRightSide;
