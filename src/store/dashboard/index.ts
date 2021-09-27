import { Action, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { STATUSES } from "../../constants/redux";
import { getData } from "./actions";
import { ClassInfo, DashboardState } from "./types";

const initialState: DashboardState = {
  status: STATUSES.INITIAL,
  classInfos: [],
};

const isDashboardPendingAction = (action: Action) =>
  action.type.startsWith("getData") && action.type.endsWith("pending");
const isDashboardRejectAction = (action: Action) =>
  action.type.startsWith(`getData`) && action.type.endsWith("rejected");

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getData.fulfilled.type, (state: DashboardState, action: PayloadAction<Array<ClassInfo>>) => {
        state.status = STATUSES.FULFILLED;
        state.classInfos = action.payload;
      })
      .addMatcher(isDashboardPendingAction, (state: DashboardState) => {
        state.status = STATUSES.PENDING;
      })
      .addMatcher(isDashboardRejectAction, (state: DashboardState) => {
        state.status = STATUSES.REJECTED;
      })
  }
});

export default dashboardSlice.reducer;