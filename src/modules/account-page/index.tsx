import { FC } from "react";
import Header from "../../components/header";
import "./index.scss";
import { useAppSelector } from "../../hooks/redux";
import Loader from "../../components/loader";

const AccountPage: FC = ({}) => {
  const { loading } = useAppSelector((state) => state.auth);

  return (
    <div className="account">
      {loading && <Loader />}
      <Header />
    </div>
  );
};

export default AccountPage;
