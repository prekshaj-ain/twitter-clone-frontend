import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "UserInfo",
  initialState: {
    userInfo: {
      userId: null,
      username: "",
      name: "",
      profilePicture: "",
    },
    loading: false,
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
      state.userInfo = action.payload;
      state.error = null;
    },
    FETCH_FAIL: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { FETCH_FAIL, FETCH_START, FETCH_SUCCESS } = userSlice.actions;
