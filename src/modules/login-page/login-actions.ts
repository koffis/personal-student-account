import { AppDispatch } from "../../redux/store";
import { loginUser, logoutUser, startLoader } from "../../redux/auth-slice";
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
    dispatch(startLoader());
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    localStorage.removeItem("isAuth");
    setTimeout(() => {
      dispatch(logoutUser());
    }, 2000);
  } catch (error: any) {
    throw error;
  }
};
