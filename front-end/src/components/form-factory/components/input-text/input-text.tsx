import styled from "styled-components";

import { InputTextProps } from "./input-text.interface";

const StyledInput = styled.input<{hasError?: boolean}>`
  border: 1px solid ${props => props.hasError ? "red" : "black"};
  flex: 1;
`;

function InputTextComponent({ data, value, onChange, hasError }: InputTextProps) {
  return (
    <StyledInput
      value={value}
      name={data.id}
      type="text"
      onChange={onChange}
      placeholder={data.placeholder}
      hasError={hasError}
    />
  );
}

export default InputTextComponent;
