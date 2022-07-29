import styled from "styled-components";

import { InputTextProps } from "./input-text.interface";

const StyledInput = styled.input`
  border: 1px solid black;
  flex: 1;
  width: 100%;
`;

function InputTextComponent({ data }: InputTextProps) {
  return <StyledInput type="text" placeholder={data.placeholder} />;
}

export default InputTextComponent;
