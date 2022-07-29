import InputTextComponent from "../input-text/input-text";
import InputSelectComponent from "../input-select/input-select";
import InputTextAreaComponent from "../input-textarea/input-textarea";

import { FormInputProps } from "./form-input.interface";

function FormInput({ item }: FormInputProps) {
  if (item.type === "text") {
    return <InputTextComponent data={item} />;
  }

  if (item.type === "select") {
    return <InputSelectComponent data={item} />;
  }

  if (item.type === "textarea") {
    return <InputTextAreaComponent data={item} />;
  }

  return null;
}

export default FormInput;
