import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import {
  setSubmission,
  selectSubmission,
} from "features/submission/submission.slice";
import FormFactory from "components/form-factory";
import fieldSet from "field-sets/generic-form.json";
import { useAppDispatch, useAppSelector, useValidation } from "hooks";
import { FormContextState, FormProvider } from "contexts/form.context";
import { useCreateSubmissionMutation } from "features/submission/submission.service";

import { FieldSet } from "./form.interface";

function Form() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { errors, validate } = useValidation();
  const [createSubmission, { isLoading }] = useCreateSubmissionMutation();

  const submissionState = useAppSelector(selectSubmission);

  const handleChange: FormContextState["handleChange"] = (event) => {
    const { name, value } = event.target;
    dispatch(setSubmission({ name, value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const hasErrors = validate(fieldSet as FieldSet, submissionState);

    if (hasErrors) {
      return;
    }

    try {
      await createSubmission(submissionState).unwrap();
      navigate("/thank-you", { replace: true });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormProvider
      errors={errors}
      isDisabled={isLoading}
      state={submissionState}
      onSubmit={handleSubmit}
      handleChange={handleChange}
    >
      <FormFactory fieldSet={fieldSet as FieldSet} />
      <button type="submit">{isLoading ? "Loading..." : "Submit"}</button>
    </FormProvider>
  );
}

export default Form;
