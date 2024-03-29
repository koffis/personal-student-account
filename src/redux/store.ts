import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import userSlice from "./user-slice";
import coursesSlice from "./courses-slice";

const rootReducer = combineReducers({
  auth: authSlice,
  user: userSlice,
  courses: coursesSlice,
});

const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

export default setupStore;
