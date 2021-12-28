import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface UserState {
  isAuthenticated: boolean;
}

const initialState: UserState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthState: (state) => {
      state.isAuthenticated = true;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
