import styled from "styled-components";

import FormInput from "../form-input/form-input";
import { FormRowProps } from "./form-row.interface";

const StyledRow = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & > *:not(:last-child) {
    margin-right: 10px;
  }

  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

function FormRow({ items }: FormRowProps) {
  return (
    <StyledRow>
      {items.map((item) => (
        <FormInput key={item.id} item={item} />
      ))}
    </StyledRow>
  );
}

export default FormRow;
