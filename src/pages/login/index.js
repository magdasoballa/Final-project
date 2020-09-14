import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import AccountCircle from "@material-ui/icons/AccountCircle";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import Button from "@material-ui/core/Button";
import { CustomPageWrapper } from "ui";

import { validateEmail, validatePass } from "helpers";
import { loginUser } from "store/actions";
import "./styles.scss";

export const Login = () => {
  const [login, setLogin] = useState("");
  const [loginErr, setLoginErr] = useState("");
  const [authErr, setAuthErr] = useState("");
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [wasSubmit, setWasSubmit] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (wasSubmit) {
      validate();
    }
  }, [login, password, wasSubmit]);

  const onSubmit = (e) => {
    e.preventDefault();
    setWasSubmit(true);
    if (!validate()) {
      dispatch(loginUser(login, password)).then(() => {
        history.push("/home");
      })
      .catch((err) => {
        setAuthErr(err);
      });
    }
  };

  
  const validate = () => {
    const validateMail = validateEmail(login);
    const validatePassword = validatePass(password);
    setLoginErr(validateMail);
    setPasswordErr(validatePassword);
    const notValidate = !!validateMail || !!validatePassword;
    return notValidate;
  };

  return (
    <CustomPageWrapper title="Login" additions="registerLink" className="login_general">
      <div className="login-form-wrapper">
        <form className="center-column" onSubmit={onSubmit} autoComplete="off">
          <FormControl className="login-form-input-wrapper">
            <TextField
              label="Login"
              className="login-form-input"
              value={login}
              error={!!loginErr}
              onChange={(e) => {
                setLogin(e.target.value);
              }}
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            {loginErr && <div className="error-text">{loginErr}</div>}
          </FormControl>
          <FormControl className="login-form-input-wrapper">
            <TextField
              className="login-form-input"
              error={!!passwordErr}
              type="Password"
              value={password}
              label="Password  "
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <VpnKeyIcon />
                  </InputAdornment>
                ),
              }}
            />
             {passwordErr && <div className="error-text">{passwordErr}</div>}
          </FormControl>
          {authErr && <div className="error-text-auth">{authErr}</div>}
          <Button
            className="login-form-btn"
            variant="contained"
            color="primary"
            type="submit"
            disabled={!(login && password)}
          >
            Sign in
          </Button>
        </form>
      </div>
    </CustomPageWrapper>
  );
};
