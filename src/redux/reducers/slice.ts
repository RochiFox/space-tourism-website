import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  activeLink: string;
}

const initialState: AppState = {
  activeLink: localStorage.getItem("activeLink") || window.location.pathname,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setActiveLink: (state, action: PayloadAction<string>) => {
      state.activeLink = action.payload;
      localStorage.setItem("activeLink", action.payload);
    },
  },
});

export const { setActiveLink } = appSlice.actions;

export default appSlice.reducer;
