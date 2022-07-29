import React, { useState, FormEvent } from "react";
import styled from "styled-components";

import { FormProvider } from "contexts/form.context";

import { FormProps } from "./form.interface";
import FormRow from "./components/form-row/form-row";
import FormInput from "./components/form-input/form-input";

const StyledColumn = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;

const DEFAULT_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  address1: "",
  city: "",
  state: "",
  zip: "",
  phone: "",
  jobTitle: "",
  reason: "",
};

function Form({ fieldSet }: FormProps) {
  const [formState, setFormState] = useState(DEFAULT_STATE);

  const handleChange = (event: any) => {
    const { name, value } = event.target;

    setFormState((prevState) => ({...prevState, [name]: value}));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormProvider value={{ state: formState, handleChange }}>
        <StyledColumn>
          {fieldSet.map((item) => (
            <React.Fragment key={Array.isArray(item) ? item[0].id : item.id}>
              {Array.isArray(item) && item.length > 0 && (
                <FormRow items={item as any} />
              )}

              {!Array.isArray(item) && <FormInput item={item as any} />}
            </React.Fragment>
          ))}
        </StyledColumn>

        <button type="submit">submit</button>
      </FormProvider>
    </form>
  );
}

export default Form;
