import { FC, useState } from "react";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  LinearProgress,
  TextField,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import logo from "../../assets/images/logo.svg";
import { startLoader } from "../../redux/auth-slice";
import { signInUser } from "./login-actions";
import { UserParams } from "./types";
import "./index.scss";

const LoginPage: FC = ({}) => {
  const dispatch = useAppDispatch();
  let navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [remember, setRemember] = useState<string>("");

  const { loading } = useAppSelector((state) => state.auth);

  const handleSignIn = (params: UserParams) => {
    dispatch(startLoader());
    setTimeout(() => {
      dispatch(signInUser(params)).then(() => navigate("/home"));
    }, 2000);
  };

  return (
    <div className="login">
      {loading && (
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      )}
      <img src={logo} alt="personal student account" />
      <div className="login__form">
        <div className="login__avatar">
          <LockOpenIcon />
        </div>
        <h3>Sign in</h3>
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          id="filled-basic"
          label="Email adress"
          variant="standard"
          fullWidth
        />
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          id="filled-basic"
          label="Password"
          type="password"
          variant="standard"
          fullWidth
        />
        <FormControlLabel
          control={<Checkbox onChange={(e) => setRemember(e.target.value)} />}
          label="Remember me"
        />
        <Button
          variant="contained"
          fullWidth
          onClick={() =>
            handleSignIn({
              email,
              password,
              rememberMe: true,
            })
          }
        >
          Sign in
        </Button>
        <div className="login__form-actions">
          <a href="/login">Forgot password?</a>
          <a href="/login">Sign up!</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
