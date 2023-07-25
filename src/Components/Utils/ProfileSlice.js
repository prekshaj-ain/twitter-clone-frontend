import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "Profile",
  initialState: {},
  reducers: {
    addProfile(state, action) {
      const { username, profileData } = action.payload;
      state[username] = profileData;
    },
  },
});

export default profileSlice.reducer;
export const { addProfile } = profileSlice.actions;
