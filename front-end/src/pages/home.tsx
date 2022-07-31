import styled from "styled-components";

import Form from "components/form/form";

const StyledCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
  overflow-x: hidden;
`;

function HomePage() {
  return (
    <StyledCenter>
      <h1>submission form</h1>
      <Form />
    </StyledCenter>
  );
}

export default HomePage;
