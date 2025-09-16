import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
  email: typeof window !== "undefined" ? localStorage.getItem("email") : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("email", action.payload);
      }
    },
    clearEmail: (state) => {
      state.email = null;
      if (typeof window !== "undefined") {
        localStorage.removeItem("email");
      }
    },
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout, setEmail, clearEmail } = authSlice.actions;
export default authSlice.reducer;
