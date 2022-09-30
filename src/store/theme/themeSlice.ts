import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
  isDarkMode: boolean;
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState = {
  isDarkMode: false,
  loading: "idle",
} as ThemeState;

const themesSlice = createSlice({
  name: "themes",
  initialState,
  reducers: {
    toogle_theme: (state, action) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { toogle_theme } = themesSlice.actions;

export default themesSlice.reducer;
