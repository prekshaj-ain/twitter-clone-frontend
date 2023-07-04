import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    Auth: authSlice,
    UserInfo: userSlice,
  },
});

export default store;
