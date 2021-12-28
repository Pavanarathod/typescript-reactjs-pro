import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./feature/auth/authSlice";
import postsSlice from "./feature/posts/postsSlice";

export const store = configureStore({
  reducer: {
    authUser: authSlice,
    posts: postsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
