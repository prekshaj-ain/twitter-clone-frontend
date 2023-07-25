import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import userSlice from "./userSlice";
import PostsSlice from "./PostsSlice";
import ProfileSlice from "./ProfileSlice";

const store = configureStore({
  reducer: {
    Auth: authSlice,
    UserInfo: userSlice,
    Posts: PostsSlice,
    Profile: ProfileSlice,
  },
});

export default store;
