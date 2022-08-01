import { createContext, useContext, ChangeEvent, FormEvent } from "react";

import { StyledFieldSet } from "styles/misc.styles";
import { SubmissionState } from "features/submission/submission.slice";

export interface FormContextState {
  state: SubmissionState["submission"];
  handleChange?: (
    event: ChangeEvent<
      HTMLTextAreaElement | HTMLSelectElement | HTMLInputElement
    >
  ) => void;
  errors?: Record<string, string[]>;
  isReadonly?: boolean;
}

export const FormContext = createContext<FormContextState | null>(null);

export const FormProvider: React.FC<FormProviderProps> = ({
  state,
  errors,
  onSubmit,
  isReadonly,
  isDisabled,
  handleChange,
  children,
}) => {
  return (
    <FormContext.Provider value={{ state, errors, handleChange, isReadonly }}>
      <StyledFieldSet disabled={isReadonly || isDisabled}>
        <form onSubmit={onSubmit}>{children}</form>
      </StyledFieldSet>
    </FormContext.Provider>
  );
};

export function useFormContext() {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }

  return context;
}

interface FormProviderProps extends FormContextState {
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
  isDisabled?: boolean;
}
