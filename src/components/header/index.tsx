import { FC } from "react";
import logo from "../../assets/images/logo.svg";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { startLoader } from "../../redux/auth-slice";
import { signOutUser } from "../../modules/login-page/login-actions";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../const";
import "./index.scss";

const Header: FC = ({}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { name } = useAppSelector((state) => state.user);

  const handleSignOut = (): void => {
    dispatch(startLoader());
    setTimeout(() => {
      dispatch(signOutUser()).then(() => navigate(ROUTES.login));
    }, 2000);
  };

  return (
    <div className="header">
      <Link to={ROUTES.home}>
        <img src={logo} alt="personal student account" />
      </Link>
      <div className="grow header__user">
        <span>
          {name.at(0)}. {name.split(" ")[1]}
        </span>
        <AccountCircleIcon />
        <div className="header__user-logout" onClick={handleSignOut}>
          <LogoutIcon />
          <span className="grow-signout">sign out</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
