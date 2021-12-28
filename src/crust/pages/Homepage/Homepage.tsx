import { authActions } from "core/feature/auth/authSlice";
import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "hooks/authHooks";
import { getPostsData } from "core/actions/postActions";

interface Props {}

const Homepage = (props: Props) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPostsData());
  }, [dispatch]);

  return (
    <div>
      <h1>this is homepage..</h1>
      <button>To go to about page plese click the button.</button>
    </div>
  );
};

export default Homepage;
