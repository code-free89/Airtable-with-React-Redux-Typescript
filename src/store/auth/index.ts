import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { STATUSES } from "../../constants/redux";
import { AuthState } from "./types";

const initialState: AuthState = {
  status: STATUSES.INITIAL,
  loggedIn: false,
};

export const userSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<boolean>) => {
      state.loggedIn = action.payload;
    }
  },
});

export const { setLogin } = userSlice.actions;

export default userSlice.reducer;