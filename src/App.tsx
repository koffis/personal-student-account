import { FC } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { ROUTES } from "./const";
import LoginPage from "./modules/login-page";
import AccountPage from "./modules/account-page";
import "./styles/index.scss";
import { useAppSelector } from "./hooks/redux";

const App: FC = ({}) => {
  const { root, login, home, course, pageNotFound } = ROUTES;

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
      {/* <Route path={course} element={<Overview />} /> */}
      <Route path={root} element={<Navigate to={home} replace />} />
      {/* <Route path={pageNotFound} element={<Oops />} /> */}
    </Routes>
  );
};

export default App;
