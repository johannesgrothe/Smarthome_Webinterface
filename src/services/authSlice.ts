import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

export interface AuthState {
  username: string;
  password: string;
  isAuthorized: boolean;
}

const authSlice = createSlice({
  name: 'auth',
  initialState: {username: '', password: '', isAuthorized: false} as AuthState,
  reducers: {
    setCredentials: (
      state,
      {
        payload: {
          username,
          password,
          isAuthorized
        }
      }: PayloadAction<{ username: string, password: string, isAuthorized: boolean }>
    ) => {
      state.username = username
      state.password = password
      state.isAuthorized = isAuthorized
    },
    setAuthorizedState: (state, {payload: {isAuthorized}}: PayloadAction<{ isAuthorized: boolean }>) => {
      state.isAuthorized = isAuthorized
    },
  },
})

export const { setCredentials, setAuthorizedState } = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state: RootState) => state.auth.username