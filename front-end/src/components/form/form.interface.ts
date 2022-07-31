export type FieldSet = (InputItem | InputItem[])[];

export interface FormProps {
  fieldSet: FieldSet;
}

export interface InputText extends Input {
  type: "text";
}

export interface InputSelect extends Input {
  type: "select";
  options: string[];
}

export interface InputTextArea extends Input {
  type: "textarea";
}

export type InputItem = InputText | InputSelect | InputTextArea;

type InputType = "text" | "select" | "textarea";

interface Input {
  id: string;
  type: InputType;
  required?: boolean;
  placeholder?: string;
}
