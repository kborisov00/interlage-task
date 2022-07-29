import { useFormContext } from "contexts/form.context";

import InputTextComponent from "../input-text/input-text";
import InputSelectComponent from "../input-select/input-select";
import InputTextAreaComponent from "../input-textarea/input-textarea";

import { FormInputProps } from "./form-input.interface";

function FormInput({ item }: FormInputProps) {
  const { state, handleChange } = useFormContext();

  if (item.type === "text") {
    return (
      <InputTextComponent
        data={item}
        onChange={handleChange}
        value={state[item.id]}
      />
    );
  }

  if (item.type === "select") {
    return (
      <InputSelectComponent
        data={item}
        onChange={handleChange}
        value={state[item.id]}
      />
    );
  }

  if (item.type === "textarea") {
    return (
      <InputTextAreaComponent
        data={item}
        onChange={handleChange}
        value={state[item.id]}
      />
    );
  }

  return null;
}

export default FormInput;
