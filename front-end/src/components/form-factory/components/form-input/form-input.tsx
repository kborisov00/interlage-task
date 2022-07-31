import styled from "styled-components";

import { useFormContext } from "contexts/form.context";

import InputTextComponent from "../input-text/input-text";
import InputSelectComponent from "../input-select/input-select";
import InputTextAreaComponent from "../input-textarea/input-textarea";

import { FormInputProps } from "./form-input.interface";

const StyledColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
`;

const StyledErrorText = styled.p`
  color: red;
`;

function FormInput({ item }: FormInputProps) {
  const { state, handleChange, errors } = useFormContext();

  return (
    <StyledColumn>
      {item.type === "text" && (
        <InputTextComponent
          data={item}
          onChange={handleChange}
          value={state[item.id]}
          hasError={errors[item.id].length > 0}
        />
      )}

      {item.type === "textarea" && (
        <InputTextAreaComponent
          data={item}
          onChange={handleChange}
          value={state[item.id]}
          hasError={errors[item.id].length > 0}
        />
      )}

      {item.type === "select" && (
        <InputSelectComponent
          data={item}
          onChange={handleChange}
          value={state[item.id]}
          hasError={errors[item.id].length > 0}
        />
      )}

      {errors[item.id].length > 0 && (
        <StyledErrorText>{errors[item.id][0]}</StyledErrorText>
      )}
    </StyledColumn>
  );
}

export default FormInput;
