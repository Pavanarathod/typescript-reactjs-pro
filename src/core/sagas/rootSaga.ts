import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { IPost } from "models/IPosts";

import {
  fetchPostsFailure,
  fetchPostsSuccess,
} from "../actions/postActions/postActions";
import { postTypes } from "core/ActionTypes/postsTypes";

const getPosts = () =>
  axios.get<IPost[]>("https://jsonplaceholder.typicode.com/todos");

function* fetchPostsSaga() {
  try {
    const response = yield call(getPosts);
    yield put(
      fetchPostsSuccess({
        posts: response.data,
      })
    );
  } catch (error: any) {
    yield put(
      fetchPostsFailure({
        error: error.message,
      })
    );
  }
}

function* postsSaga() {
  yield all([takeLatest(postTypes.FETCH_POST_REQUEST, fetchPostsSaga)]);
}

export default postsSaga;
