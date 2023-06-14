import { FC } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { ROUTES } from "./const";
import LoginPage from "./modules/login-page";
import "./styles/index.scss";

const App: FC = ({}) => {
  const { root, login, home, course, pageNotFound } = ROUTES;

  return (
    <Routes>
      <Route path={login} element={<LoginPage />} />
      {/* <Route path={home} element={<Overview />} />
      <Route path={course} element={<Overview />} /> */}
      <Route path={root} element={<Navigate to={home} replace />} />
      {/* <Route path={pageNotFound} element={<Oops />} /> */}
    </Routes>
  );
};

export default App;
