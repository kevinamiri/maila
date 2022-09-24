import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import SlateTextEditor from "components/editors/editor-slate";

const TestPage = () => {
  return (
    <Container>
      <SlateTextEditor />
    </Container>
  );
};

export default TestPage;
