import styled from "styled-components";

import { InputSelectProps } from "./input-select.interface";

const StyledSelect = styled.select<{hasError?: boolean}>`
  border: 1px solid ${props => props.hasError ? "red" : "black"};
  flex: 1;
`;

function InputSelectComponent({ data, value, onChange, hasError }: InputSelectProps) {
  return (
    <StyledSelect
      value={value}
      name={data.id}
      onChange={onChange}
      placeholder={data.placeholder}
      hasError={hasError}
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
