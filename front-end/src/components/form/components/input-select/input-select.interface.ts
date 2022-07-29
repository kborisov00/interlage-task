import { ChangeEventHandler } from "react";

import { InputSelect } from "components/form/form.interface";

export interface InputSelectProps {
  data: InputSelect;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  value?: string;
}
