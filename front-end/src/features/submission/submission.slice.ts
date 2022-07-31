import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store/store";

import { submissionsAPI } from "./submission.service";

export interface SubmissionState {
  [key: string]: string;
  firstName: string;
  lastName: string;
  email: string;
  address1: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  jobTitle: string;
  reason: string;
}

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
      action: PayloadAction<{ name: string; value: string }>
    ) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      submissionsAPI.endpoints.createSubmission.matchFulfilled,
      (state) => {
        // reset state
        Object.entries(initialState).forEach(([key, value]) => {
          state[key] = value;
        });
      }
    );
  },
});

export const { setSubmission } = submissionSlice.actions;

export const selectSubmission = (state: RootState) => state.submission;

export default submissionSlice.reducer;
