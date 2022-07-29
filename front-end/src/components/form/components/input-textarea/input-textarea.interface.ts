import { ChangeEventHandler } from "react";
import { InputTextArea } from "components/form/form.interface";

export interface InputTextAreaProps {
  data: InputTextArea;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  value?: string;
}
