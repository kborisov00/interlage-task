import { useFormContext } from "contexts/form.context";

import {
  StyledInput,
  StyledColumn,
  StyledErrorText,
} from "./form-input.styles";
import { FormInputProps } from "./form-input.interface";

function FormInput({ item }: FormInputProps) {
  const { state, handleChange, errors, isReadonly } = useFormContext();

  const commonProps = {
    id: item.id,
    name: item.id,
    onChange: isReadonly ? undefined : handleChange,
    readOnly: isReadonly,
    value: state[item.id],
    hasError: !!errors?.[item.id].length,
  };

  const componentSwitch = () => {
    const selectOptionMap = (option: string) => (
      <option key={option} value={option}>
        {option}
      </option>
    );

    switch (item.type) {
      case "text":
        return <StyledInput as="input" {...commonProps} />;
      case "textarea":
        return <StyledInput as="textarea" {...commonProps} />;
      case "select":
        return (
          <StyledInput as="select" {...commonProps}>
            {item.options.map(selectOptionMap)}
          </StyledInput>
        );
    }
  };

  return (
    <StyledColumn>
      <label htmlFor={item.id}>{item.placeholder}</label>

      {componentSwitch()}

      {!isReadonly && !!errors?.[item.id].length && (
        <StyledErrorText>{errors?.[item.id]?.[0]}</StyledErrorText>
      )}
    </StyledColumn>
  );
}

export default FormInput;
