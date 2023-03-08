import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Interface {
  appId: string | null;
  inApp: boolean;
  statusBarColor: "light" | "dark";
}

const initialState: Interface = {
  appId: null,
  inApp: false,
  statusBarColor: "light",
};

export const interfaceSlice = createSlice({
  name: "interface",
  initialState,
  reducers: {
    changeCurrentApp: (state, action: PayloadAction<string>) => {
      state.appId = action.payload;
      state.inApp = true;
    },
    exitApp: (state) => {
      state.appId = null;
      state.inApp = false;
      state.statusBarColor = "light";
    },
    changeStatusBarColor: (state, action: PayloadAction<"light" | "dark">) => {
      state.statusBarColor = action.payload;
    },
  },
});

export const interfaceActions = interfaceSlice.actions;

export default interfaceSlice.reducer;
