import { act, renderHook } from "@testing-library/react-hooks";

import fieldSet from "field-sets/generic-form.json";
import { FieldSet } from "components/form-factory/form-factory.interface";

import useValidation from "./useValidation";

const submissionInvalid = {
  firstName: "",
  lastName: "",
  email: "",
  address1: undefined,
  city: undefined,
  state: undefined,
  zip: undefined,
  phone: "",
  jobTitle: undefined,
  reason: undefined,
};

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

describe("useValidation", () => {
  it("should have errors", () => {
    const { result } = renderHook(() => useValidation());
    
    act(() => {
      const hasErrors = result.current.validate(fieldSet as FieldSet, submissionInvalid);
      expect(hasErrors).toEqual(6);
    });

    expect(result.current.errors.firstName.length).toEqual(1);
    expect(result.current.errors.firstName).toContain("First name is required");

    expect(result.current.errors.lastName.length).toEqual(1);
    expect(result.current.errors.lastName).toContain("Last name is required");

    expect(result.current.errors.email.length).toEqual(2);
    expect(result.current.errors.email).toContain("Email is required");
    expect(result.current.errors.email).toContain("Invalid Email");

    expect(result.current.errors.phone.length).toEqual(2);
    expect(result.current.errors.phone).toContain("Phone Number is required");
    expect(result.current.errors.phone).toContain("Invalid Phone Number");
  });

  it("should not have errors", () => {
    const { result } = renderHook(() => useValidation());

    act(() => {
      const hasErrors = result.current.validate(fieldSet as FieldSet, submissionValid);

      expect(hasErrors).toEqual(0);
    });

    expect(result.current.errors.firstName.length).toEqual(0);
    expect(result.current.errors.lastName.length).toEqual(0);
    expect(result.current.errors.email.length).toEqual(0);
    expect(result.current.errors.address1.length).toEqual(0);
    expect(result.current.errors.city.length).toEqual(0);
    expect(result.current.errors.state.length).toEqual(0);
    expect(result.current.errors.zip.length).toEqual(0);
    expect(result.current.errors.phone.length).toEqual(0);
    expect(result.current.errors.jobTitle.length).toEqual(0);
    expect(result.current.errors.reason.length).toEqual(0);
  });
});
