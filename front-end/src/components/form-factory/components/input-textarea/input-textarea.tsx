import styled from "styled-components";

import { InputTextAreaProps } from "./input-textarea.interface";

const StyledTextArea = styled.textarea<{hasError?: boolean}>`
  border: 1px solid ${props => props.hasError ? "red" : "black"};
  flex: 1;
`;

function InputTextAreaComponent({ data, value, onChange, hasError }: InputTextAreaProps) {
  return (
    <StyledTextArea
      value={value}
      name={data.id}
      onChange={onChange}
      placeholder={data.placeholder}
      hasError={hasError}
    ></StyledTextArea>
  );
}

export default InputTextAreaComponent;
