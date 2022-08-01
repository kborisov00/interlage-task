import { render, screen } from "@testing-library/react";
import { FormProvider } from "contexts/form.context";

import fieldSet from "field-sets/generic-form.json";

import FormFactory from "./form-factory";
import { FieldSet } from "./form-factory.interface";

const submissionValid = {
  firstName: "John",
  lastName: "Doe",
  email: "test@test.com",
  address1: undefined,
  city: undefined,
  state: undefined,
  zip: undefined,
  phone: "123 123 1234",
  jobTitle: undefined,
  reason: undefined,
};

describe("form-factory", () => {
  it("should render correctly", async () => {
    render(
      <FormProvider isReadonly state={submissionValid}>
        <FormFactory fieldSet={fieldSet as FieldSet} />
      </FormProvider>
    );

    const firstNameLabel = await screen.findByText("First name");
    expect(firstNameLabel).toBeTruthy();

    const lastNameLabel = await screen.findByText("Last name");
    expect(lastNameLabel).toBeTruthy();

    const emailLabel = await screen.findByText("Email");
    expect(emailLabel).toBeTruthy();

    const address1Label = await screen.findByText("Address 1");
    expect(address1Label).toBeTruthy();

    const cityLabel = await screen.findByText("City");
    expect(cityLabel).toBeTruthy();

    const stateLabel = await screen.findByText("State");
    expect(stateLabel).toBeTruthy();

    const zipLabel = await screen.findByText("Zip Code");
    expect(zipLabel).toBeTruthy();

    const phoneLabel = await screen.findByText("Phone Number");
    expect(phoneLabel).toBeTruthy();

    const jobTitleLabel = await screen.findByText("Please select job title");
    expect(jobTitleLabel).toBeTruthy();

    const reasonLabel = await screen.findByText(
      "Describe why you are a good fit for the job you are applying for."
    );
    expect(reasonLabel).toBeTruthy();
  });
});
