import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
  email: typeof window !== "undefined" ? localStorage.getItem("email") : null,
  token: typeof window !== "undefined" ? localStorage.getItem("token") : null,
  userId: typeof window !== "undefined" ? localStorage.getItem("userId") : null,
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
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("userId", action.payload);
      }
      state.isAuthenticated = true;
    },
    setToken: (state, action) => {
      state.token = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("token", action.payload);
      }
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setUser, logout, setEmail, clearEmail, setToken, setUserId } =
  authSlice.actions;
export default authSlice.reducer;
