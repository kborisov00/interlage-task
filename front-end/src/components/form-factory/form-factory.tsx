import styled from "styled-components";

import FormRow from "./components/form-row/form-row";
import FormInput from "./components/form-input/form-input";
import { FormFactoryProps } from "./form-factory.interface";

const StyledColumn = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;

function FormFactory({ fieldSet }: FormFactoryProps) {
  return (
    <StyledColumn>
      {fieldSet.map((item: any) => {
        if (Array.isArray(item) && item.length > 0) {
          return <FormRow key={item[0].id} items={item} />;
        }

        if (!Array.isArray(item)) {
          return <FormInput key={item.id} item={item} />;
        }

        return null;
      })}
    </StyledColumn>
  );
}

export default FormFactory;
