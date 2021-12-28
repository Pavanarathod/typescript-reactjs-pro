import { postTypes } from "core/ActionTypes/postsTypes";
import { PostsActions, PostsState } from "core/types/types";

const initialState: PostsState = {
  pending: false,
  posts: [],
  error: null,
};

const postReducers = (state = initialState, action: PostsActions) => {
  switch (action.type) {
    case postTypes.FETCH_POST_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case postTypes.FETCH_POST_SUCCESS:
      return {
        ...state,
        pending: false,
        posts: action.payload.posts,
        error: null,
      };

    case postTypes.FETCH_POST_FAILURE:
      return {
        ...state,
        pending: false,
        posts: [],
        error: action.payload.error,
      };
  }
};

export default postReducers;
