import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store/store";

export interface SubmissionState {
  [key: string]: string | undefined;

  firstName: string;
  lastName: string;
  email: string;
  address1: string | undefined;
  city: string | undefined;
  state: string | undefined;
  zip: string | undefined;
  phone: string;
  jobTitle: string | undefined;
  reason: string | undefined;
}

const initialState: SubmissionState = {
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

export const submissionSlice = createSlice({
  name: "submission",
  initialState,
  reducers: {
    setSubmission: (
      state,
      action: PayloadAction<{ name: string; value: string }>
    ) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
  },
});

export const { setSubmission } = submissionSlice.actions;

export const selectSubmission = (state: RootState) => state.submission;

export default submissionSlice.reducer;
