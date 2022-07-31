import { FormEvent } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector, useValidation } from "hooks";
import { FormContextState, FormProvider } from "contexts/form.context";
import {
  setSubmission,
  selectSubmission,
} from "features/submission/submission.slice";
import { useCreateSubmissionMutation } from "features/submission/submission.service";

import { FormProps } from "./form.interface";
import FormRow from "./components/form-row/form-row";
import FormInput from "./components/form-input/form-input";

const StyledColumn = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;

function Form({ fieldSet }: FormProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const submissionState = useAppSelector(selectSubmission);
  const [createSubmission, { isLoading }] = useCreateSubmissionMutation();

  const { errors, validate } = useValidation();

  const handleChange: FormContextState["handleChange"] = (event) => {
    const { name, value } = event.target;
    dispatch(setSubmission({ name, value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const hasErrors = validate(fieldSet, submissionState);

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
    <form onSubmit={handleSubmit}>
      <FormProvider value={{ state: submissionState, handleChange, errors }}>
        <StyledColumn>
          {fieldSet.map((item) => {
            if (Array.isArray(item) && item.length > 0) {
              return <FormRow key={item[0].id} items={item} />;
            }

            if (!Array.isArray(item)) {
              return <FormInput key={item.id} item={item} />;
            }

            return null;
          })}
        </StyledColumn>

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "submit"}
        </button>
      </FormProvider>
    </form>
  );
}

export default Form;
