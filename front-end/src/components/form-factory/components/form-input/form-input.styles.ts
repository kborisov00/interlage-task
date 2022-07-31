import styled from "styled-components";

export const StyledColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
`;

export const StyledInput = styled.textarea<{ hasError?: boolean }>`
  border: 1px solid ${(props) => (props.hasError ? "red" : "black")};
  flex: 1;
  border-radius: 4px;
  padding: 5px 10px;
`;

export const StyledErrorText = styled.p`
  color: red;
`;