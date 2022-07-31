import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store/store";

type SubmissionProperties =
  | "firstName"
  | "lastName"
  | "email"
  | "address1"
  | "city"
  | "state"
  | "zip"
  | "phone"
  | "jobTitle"
  | "reason";

export type SubmissionState = Record<SubmissionProperties, string>;

const initialState: SubmissionState = {
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

export const submissionSlice = createSlice({
  name: "submission",
  initialState,
  reducers: {
    setSubmission: (
      state,
      action: PayloadAction<{ name: SubmissionProperties; value: string }>
    ) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
  },
});

export const { setSubmission } = submissionSlice.actions;

export const selectSubmission = (state: RootState) => state.submission;

export default submissionSlice.reducer;
