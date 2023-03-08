import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Notification {
  isActive: boolean;
  title: string;
  message: string;
  icon: string;
}

interface NewNotification {
  title: string;
  message: string;
  icon: string;
}

const initialState: Notification = {
  isActive: false,
  title: "",
  message: "",
  icon: "",
};

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    new(state, action: PayloadAction<NewNotification>) {
      const { icon, message, title } = action.payload;
      state.isActive = true;
      state.icon = icon;
      state.message = message;
      state.title = title;
    },
    discard(state) {
      state.isActive = false;
    },
  },
});

export const notificationActions = notificationSlice.actions;

export default notificationSlice.reducer;
