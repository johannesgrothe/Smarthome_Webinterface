import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../services/authSlice";
import { gadgetSlice } from "../services/gadgetApiSlice";
import { bridgeSlice } from "../services/bridgeApiSlice";
import { clientSlice } from "../services/clientApiSlice";

export const store = configureStore({
  reducer: {
    [bridgeSlice.reducerPath]: bridgeSlice.reducer,
    [clientSlice.reducerPath]: clientSlice.reducer,
    [gadgetSlice.reducerPath]: gadgetSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      gadgetSlice.middleware,
      bridgeSlice.middleware,
      clientSlice.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
