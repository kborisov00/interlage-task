import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store/store";

export interface SubmissionState {
  [key: string]: string | null;
  firstName: string;
  lastName: string;
  email: string;
  address1: string | null;
  city: string | null;
  state: string | null;
  zip: string | null;
  phone: string;
  jobTitle: string | null;
  reason: string | null;
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
});

export const { setSubmission } = submissionSlice.actions;

export const selectSubmission = (state: RootState) => state.submission;

export default submissionSlice.reducer;
