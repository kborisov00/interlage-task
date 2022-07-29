import "styles/reset.css";

import React from "react";
import styled from "styled-components";

import Form from "components/form/form";

import fieldSet from "./field-set.json";

const StyledCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
  overflow-x: hidden;
`;

function App() {
  return (
    <StyledCenter>
      <Form fieldSet={fieldSet as any} />
    </StyledCenter>
  );
}

export default App;
