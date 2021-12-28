import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PostState {
  loading: boolean;
  error: string;
  posts: any[];
}
const initialState: PostState = {
  loading: false,
  error: "",
  posts: [],
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    fetchPostsLoading(state) {
      state.loading = true;
    },
    fetchPostsSuccess(state, action: PayloadAction<any[]>) {
      state.posts = action.payload;
      state.loading = false;
    },
    fetchPostsError(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
      state.posts = [];
    },
  },
});

export const postActions = postSlice.actions;

export default postSlice.reducer;
