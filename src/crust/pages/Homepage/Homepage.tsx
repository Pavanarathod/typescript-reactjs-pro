import { authActions } from "core/feature/auth/authSlice";
import React from "react";

import { useAppDispatch, useAppSelector } from "hooks/authHooks";

interface Props {}

const Homepage = (props: Props) => {
  const user = useAppSelector((state) => state.authUser);
  console.log(user);

  const dispatch = useAppDispatch();

  const signIn = () => {
    dispatch(authActions.setAuthState());
  };

  return (
    <div>
      <h1>this is homepage..</h1>
      <button onClick={signIn}>
        To go to about page plese click the button.
      </button>
    </div>
  );
};

export default Homepage;
