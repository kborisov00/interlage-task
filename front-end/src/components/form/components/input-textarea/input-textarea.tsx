import styled from "styled-components";

import { InputTextAreaProps } from "./input-textarea.interface";

const StyledTextArea = styled.textarea`
  border: 1px solid black;
  flex: 1;
`;

function InputTextAreaComponent({ data, value, onChange }: InputTextAreaProps) {
  return (
    <StyledTextArea
      value={value}
      name={data.id}
      onChange={onChange}
      placeholder={data.placeholder}
    ></StyledTextArea>
  );
}

export default InputTextAreaComponent;
