import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import counterReducer from 'features/counter/counterSlice';
import submissionReducer from 'features/submission/submissionSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    submission: submissionReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
