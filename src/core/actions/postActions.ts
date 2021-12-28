import axios from "axios";
import { postActions } from "core/feature/posts/postsSlice";

const getPostsData = () => async (dispatch: any) => {
  try {
    dispatch(postActions.fetchPostsLoading());

    const posts = await axios.get<any[]>(
      "https://jsonplaceholder.typicode.com/posts"
    );

    dispatch(postActions.fetchPostsSuccess(posts.data));
  } catch (error: any) {
    dispatch(postActions.fetchPostsError(error.message));
  }
};

export { getPostsData };
