import { useFormContext } from "contexts/form.context";

import {
  StyledInput,
  StyledColumn,
  StyledErrorText,
} from "./form-input.styles";
import { FormInputProps } from "./form-input.interface";

function FormInput({ item }: FormInputProps) {
  const { state, handleChange, errors } = useFormContext();

  const commonProps = {
    name: item.id,
    placeholder: item.placeholder,
    onChange: handleChange,
    value: state[item.id],
    hasError: errors[item.id].length > 0,
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
      {componentSwitch()}

      {errors[item.id].length > 0 && (
        <StyledErrorText>{errors[item.id][0]}</StyledErrorText>
      )}
    </StyledColumn>
  );
}

export default FormInput;
