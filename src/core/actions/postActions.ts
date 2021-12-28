import axios from "axios";
import { postActions } from "core/feature/posts/postsSlice";

const getPostsData = () => async (dispatch: any) => {
  try {
    postActions.fetchPostsLoading();

    const posts = axios.get("");
  } catch (error) {}
};
