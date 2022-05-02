import {Action, configureStore, getDefaultMiddleware, ThunkAction,} from '@reduxjs/toolkit'

import {setupListeners} from "@reduxjs/toolkit/query";

import { getDataSlice } from "../services/getDataSlice";

export const store = configureStore({
  reducer: {
    [getDataSlice.reducerPath]: getDataSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getDataSlice.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
  RootState,
  unknown,
  Action<string>>;

// setupListeners(store.dispatch)