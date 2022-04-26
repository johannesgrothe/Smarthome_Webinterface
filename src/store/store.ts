import {Action, configureStore, getDefaultMiddleware, ThunkAction,} from '@reduxjs/toolkit'

import {setupListeners} from "@reduxjs/toolkit/query";

import InfoReducer from "../services/InfoReducer";
import {infoSlice} from "../services/infoSlice";

export const store = configureStore({
  reducer: {
    infos: InfoReducer,
    [infoSlice.reducerPath]: infoSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(infoSlice.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
  RootState,
  unknown,
  Action<string>>;

// setupListeners(store.dispatch)