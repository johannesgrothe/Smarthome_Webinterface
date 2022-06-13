import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'

import { setupListeners } from "@reduxjs/toolkit/query";

import { getDataSlice } from '../services/getDataSlice';
import authReducer from '../services/authSlice';

export const store = configureStore({
  reducer: {
    [getDataSlice.reducerPath]: getDataSlice.reducer,
    auth: authReducer,
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