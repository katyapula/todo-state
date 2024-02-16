import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
  date: "dd/mm/yyyy",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    toggleDateFormat(state, action: PayloadAction<string>) {
      state.date = action.payload;
    },
  },
});

export const { toggleTheme, toggleDateFormat } = appSlice.actions;

export default appSlice.reducer;
export const selectTheme = (state: any) => state.app.theme;
export const selectDate = (state: any) => state.app.date;
