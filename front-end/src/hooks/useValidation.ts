import { useState } from "react";

import { FieldSet } from "components/form/form.interface";
import { SubmissionState } from "features/submission/submission.slice";

const patterns: Record<string, { pattern: RegExp; errorMessage: string }> = {
  email: {
    pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
    errorMessage: "Invalid Email",
  },
  phone: {
    pattern: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
    errorMessage: "Invalid Phone Number"
  }
};

const initialState = {
  firstName: [],
  lastName: [],
  email: [],
  address1: [],
  city: [],
  state: [],
  zip: [],
  phone: [],
  jobTitle: [],
  reason: [],
};

function useValidation() {
  const [errorsState, setErrorsState] =
    useState<Record<string, string[]>>(initialState);

  const validate = (fieldset: FieldSet, state: SubmissionState) => {
    const flatFieldSet = fieldset.flat();

    const errorMap: Record<string, string[]> = flatFieldSet.reduce(
      (acc, item) => {
        const value = state[item.id] || "";
        const isRequired = !!item.required;
        const hasPattern = !!patterns[item.id];

        const errors = [];

        if (isRequired && !value) {
          errors.push(`${item.placeholder} is required`);
        }

        if (hasPattern && !patterns[item.id].pattern.test(value)) {
          errors.push(patterns[item.id].errorMessage);
        }

        // @ts-expect-error
        const hasErrors = acc.hasErrors || errors.length;

        return { ...acc, hasErrors, [item.id]: errors };
      },
      {}
    );

    setErrorsState(errorMap);

    return errorMap.hasErrors;
  };

  return { errors: errorsState, validate };
}

export default useValidation;
