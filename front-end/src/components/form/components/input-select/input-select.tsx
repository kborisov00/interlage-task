import styled from "styled-components";

import { InputSelectProps } from "./input-select.interface";

const StyledSelect = styled.select`
  border: 1px solid black;
  flex: 1;
`;

function InputSelectComponent({ data, value, onChange }: InputSelectProps) {
  return (
    <StyledSelect
      value={value}
      name={data.id}
      onChange={onChange}
      placeholder={data.placeholder}
    >
      {data.options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </StyledSelect>
  );
}

export default InputSelectComponent;
