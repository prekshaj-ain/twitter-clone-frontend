import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import userSlice from "./userSlice";
import PostsSlice from "./PostsSlice";

const store = configureStore({
  reducer: {
    Auth: authSlice,
    UserInfo: userSlice,
    Posts: PostsSlice,
  },
});

export default store;
