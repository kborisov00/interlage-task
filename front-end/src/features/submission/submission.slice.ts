import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store/store";
import { submissionsAPI } from "./submission.service";

export interface SubmissionState {
  latestSubmissionId: string | undefined;

  submission: {
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
  };
}

const initialState: SubmissionState = {
  latestSubmissionId: undefined,
  submission: {
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
  },
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
      state.submission[name] = value;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      submissionsAPI.endpoints.createSubmission.matchFulfilled,
      (state, { payload }) => {
        state.latestSubmissionId = payload.id;
        state.submission = initialState.submission;
      }
    );
  },
});

export const { setSubmission } = submissionSlice.actions;

export const selectSubmission = (state: RootState) => state.submission.submission;
export const selectLatestSubmissionId = (state: RootState) => state.submission.latestSubmissionId;

export default submissionSlice.reducer;
