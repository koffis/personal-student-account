import { AppDispatch } from "../../redux/store";
import { loginUser, logoutUser } from "../../redux/auth-slice";
import { UserParams } from "./types";

export const signInUser =
  (params: UserParams) => async (dispatch: AppDispatch) => {
    try {
      if (params.rememberMe) {
        localStorage.setItem("email", params.email);
        localStorage.setItem("password", params.password);
        localStorage.setItem("isAuth", "true");
      }
      dispatch(loginUser(params));
    } catch (error: any) {
      throw error;
    }
  };

export const signOutUser = () => async (dispatch: AppDispatch) => {
  try {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    localStorage.removeItem("isAuth");
    dispatch(logoutUser());
  } catch (error: any) {
    throw error;
  }
};
