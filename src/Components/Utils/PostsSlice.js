import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: "Posts",
  initialState: {
    posts: [],
    success: false,
    page: 1,
  },
  reducers: {
    addPosts: (state, action) => {
      state.posts = [...state.posts, ...action.payload];
      state.success = true;
    },
    updatePage: (state) => {
      state.page = state.page + 1;
      state.success = false;
    },
  },
});

export default postsSlice.reducer;
export const { addPosts, updatePage } = postsSlice.actions;
