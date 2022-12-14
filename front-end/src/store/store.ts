import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import submissionReducer from "features/submission/submission.slice";
import { submissionsAPI } from "features/submission/submission.service";

export const store = configureStore({
  reducer: {
    submission: submissionReducer,

    [submissionsAPI.reducerPath]: submissionsAPI.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(submissionsAPI.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
