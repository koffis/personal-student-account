import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserParams } from "../modules/login-page/types";

interface IState {
  email: string;
  password: string;
  isAuth: boolean;
  loading: boolean;
}

const initialState: IState = {
  email: "",
  password: "",
  isAuth: localStorage.getItem("isAuth") === "true" ? true : false,
  loading: false,
};

const authSlice = createSlice({
  name: "auth-slice",
  initialState,
  reducers: {
    startLoader(state) {
      state.loading = true;
    },
    loginUser(state, action: PayloadAction<UserParams>) {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.isAuth = true;
      state.loading = false;
    },
    logoutUser(state) {
      state.email = "";
      state.password = "";
      state.isAuth = false;
      state.loading = false;
    },
  },
});

export default authSlice.reducer;
export const { loginUser, logoutUser, startLoader } = authSlice.actions;
