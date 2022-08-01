import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SubmissionState } from "./submission.slice";

type SubmissionRecord = SubmissionState["submission"] & { id: string };

type CreateSubmissionRequest = SubmissionState["submission"];
type CreateSubmissionResponse = SubmissionRecord;

type GetSubmissionRequest = string;
type GetSubmissionResponse = SubmissionRecord;

export const submissionsAPI = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  endpoints: (builder) => ({
    createSubmission: builder.mutation<
      CreateSubmissionResponse,
      CreateSubmissionRequest
    >({
      query: (body) => ({
        url: "/submissions",
        method: "POST",
        body,
      }),
    }),
    getSubmission: builder.query<GetSubmissionResponse, GetSubmissionRequest>({
      query: (id) => ({ url: `/submissions/${id}` }),
      transformResponse: ({ data }) => data.Item,
    }),
  }),
});

export const { useCreateSubmissionMutation, useGetSubmissionQuery } =
  submissionsAPI;
