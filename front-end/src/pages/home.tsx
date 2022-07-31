import styled from "styled-components";

import Form from "components/form/form";
import fieldSet from "field-sets/generic-form.json";
import { FieldSet } from "components/form/form.interface";

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
      <Form fieldSet={fieldSet as FieldSet} />
    </StyledCenter>
  );
}

export default HomePage;
