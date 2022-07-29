import styled from "styled-components";

import { FormProps } from "./form.interface";
import FormRow from "./components/form-row/form-row";
import FormInput from "./components/form-input/form-input";

const StyledColumn = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;

function Form({ fieldSet }: FormProps) {
  return (
    <StyledColumn>
      {fieldSet.map((item) => (
        <>
          {Array.isArray(item) && item.length > 0 && (
            <FormRow key={item[0].id} items={item as any} />
          )}

          {!Array.isArray(item) && <FormInput item={item as any} />}
        </>
      ))}
    </StyledColumn>
  );
}

export default Form;