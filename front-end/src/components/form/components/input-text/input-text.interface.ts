import { ChangeEventHandler } from "react";
import { InputText } from "components/form/form.interface";

export interface InputTextProps {
  data: InputText;
  onChange?: ChangeEventHandler<HTMLInputElement>
  value?: string;
}
