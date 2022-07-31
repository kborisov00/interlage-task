import { createContext, useContext, ChangeEvent } from "react";
import { SubmissionState } from "features/submission/submission.slice";

export const FormContext = createContext<{
  state: SubmissionState;
  handleChange: (
    event: ChangeEvent<
      HTMLTextAreaElement | HTMLSelectElement | HTMLInputElement
    >
  ) => void;
} | null>(null);

export const FormProvider = FormContext.Provider;

export function useFormContext() {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }

  return context;
}
