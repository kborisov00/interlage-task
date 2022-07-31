import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SubmissionState } from "./submission.slice";

export const submissionsAPI = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  endpoints: (builder) => ({
    createSubmission: builder.mutation<{}, SubmissionState>({
      query: (body) => ({
        url: "/submissions",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useCreateSubmissionMutation } = submissionsAPI;
