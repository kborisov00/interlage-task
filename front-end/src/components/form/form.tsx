import React, { FormEvent } from "react";
import styled from "styled-components";

import { FormProvider } from "contexts/form.context";
import { useAppDispatch, useAppSelector } from "hooks";
import {
  selectSubmission,
  setSubmission,
} from "features/submission/submission.slice";

import { FormProps } from "./form.interface";
import FormRow from "./components/form-row/form-row";
import FormInput from "./components/form-input/form-input";

const StyledColumn = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;

function Form({ fieldSet }: FormProps) {
  const dispatch = useAppDispatch();
  const submissionState = useAppSelector(selectSubmission);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    dispatch(setSubmission({ name, value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormProvider value={{ state: submissionState, handleChange }}>
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

        <button type="submit">submit</button>
      </FormProvider>
    </form>
  );
}

export default Form;
