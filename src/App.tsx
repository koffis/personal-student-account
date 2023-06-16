import { FC } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { ROUTES } from "./const";
import LoginPage from "./modules/login-page";
import AccountPage from "./modules/account-page";
import { useAppSelector } from "./hooks/redux";
import CoursePage from "./modules/course-page";
import "./styles/index.scss";

const App: FC = ({}) => {
  const { root, login, home, course } = ROUTES;

  const { isAuth } = useAppSelector((state) => state.auth);

  return (
    <Routes>
      <Route
        path={login}
        element={isAuth ? <Navigate to={home} replace /> : <LoginPage />}
      />
      <Route
        path={home}
        element={isAuth ? <AccountPage /> : <Navigate to={login} replace />}
      />
      <Route
        element={isAuth ? <CoursePage /> : <Navigate to={login} replace />}
        path={course}
      />
      <Route path={root} element={<Navigate to={home} replace />} />
    </Routes>
  );
};

export default App;
