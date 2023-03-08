import { configureStore } from "@reduxjs/toolkit";
import interfaceSlice from "./interface";
import notificationSlice from "./notification";

export const store = configureStore({
  reducer: {
    interface: interfaceSlice,
    notification: notificationSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
