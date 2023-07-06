import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "Auth",
  initialState: {
    loading: false,
    userId: null,
    userToken: null,
    isLoggedIn: false,
    error: null,
    success: false,
  },
  reducers: {
    FETCH_START: (state) => {
      state.loading = true;
      state.error = null;
    },
    FETCH_SUCCESS: (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.userId = action.payload.userId;
      state.userToken = action.payload.accessToken;
      state.isLoggedIn = true;
    },
    FETCH_FAIL: (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
    },
    LOGOUT: (state) => {
      state.userId = null;
      state.userToken = null;
      state.isLoggedIn = false;
    },
  },
});

export default authSlice.reducer;
export const { FETCH_START, FETCH_SUCCESS, FETCH_FAIL, LOGOUT } =
  authSlice.actions;
