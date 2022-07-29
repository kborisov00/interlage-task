import styled from "styled-components";

import { InputTextProps } from "./input-text.interface";

const StyledInput = styled.input`
  border: 1px solid black;
  flex: 1;
`;

function InputTextComponent({ data, value, onChange }: InputTextProps) {
  return (
    <StyledInput
      value={value}
      name={data.id}
      type="text"
      onChange={onChange}
      placeholder={data.placeholder}
    />
  );
}

export default InputTextComponent;
