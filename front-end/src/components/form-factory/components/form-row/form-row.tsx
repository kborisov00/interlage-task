import styled from "styled-components";

import FormInput from "../form-input/form-input";
import { FormRowProps } from "./form-row.interface";

const StyledRow = styled.div`
  display: flex;
  width: 100%;

  & > *:not(:last-child) {
    margin-right: 10px;
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
