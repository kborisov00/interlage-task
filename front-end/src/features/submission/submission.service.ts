import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SubmissionState } from "./submission.slice";

type CreateSubmissionRequest = SubmissionState["submission"];
type CreateSubmissionResponse = SubmissionState["submission"] & { id: string };

type GetSubmissionRequest = string;
interface GetSubmissionResponse {
  data: {
    Item: SubmissionState["submission"] & { id: string };
  };
}

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
      transformResponse: ({data}) => data.Item
    }),
  }),
});

export const { useCreateSubmissionMutation, useGetSubmissionQuery } =
  submissionsAPI;
