import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "Auth",
  initialState: {
    loading: false,
    userId: null,
    userToken: null,
    error: null,
    success: false,
    isLoggedIn: false,
  },
  reducers: {
    FETCH_START: (state) => {
      state.loading = true;
    },
    FETCH_SUCCESS: (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.userId = action.payload.userId;
      state.userToken = action.payload.accessToken;
      state.isLoggedIn= true;
    },
    FETCH_FAIL: (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
    },
  },
});

export default authSlice.reducer;
export const { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } = authSlice.actions;
