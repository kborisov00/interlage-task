import React from "react";
import styled from "styled-components";

import "styles/reset.css";

const StyledCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
  overflow-x: hidden;
  background-color: red;
`;

function App() {
  return <StyledCenter>Hello, World!</StyledCenter>;
}

export default App;
