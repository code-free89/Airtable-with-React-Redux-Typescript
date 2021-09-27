import { RootState } from "..";

export const selectLoginStatus = (state: RootState) => state.auth.loggedIn;