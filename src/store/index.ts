import { configureStore } from '@reduxjs/toolkit';
import authReducer from "./auth";
import dashboardReducer from "./dashboard";
const store = configureStore({
  reducer: {
    auth: authReducer,
    dashboard: dashboardReducer,
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export default store;