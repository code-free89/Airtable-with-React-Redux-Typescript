import { RootState } from "..";

export const selectDashboardStatus = (state: RootState) => state.dashboard.status;

export const selectDashboardData = (state: RootState) => state.dashboard.classInfos;