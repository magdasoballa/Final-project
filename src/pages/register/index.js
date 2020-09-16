import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import AccountCircle from "@material-ui/icons/AccountCircle";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import FaceIcon from '@material-ui/icons/Face';
import Button from "@material-ui/core/Button";
import { CustomPageWrapper } from "ui";
import {
  validateEmail,
  validatePass,
  isTheSamePass,
  validateIsRequired,
} from "helpers";
import { registerUser } from "store/actions";
import "./styles.scss";

export const Register = () => {
  const [login, setLogin] = useState("");
  const [loginErr, setLoginErr] = useState("");
  const [authErr, setAuthErr] = useState("");
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [repeatPasswordErr, setRepeatPasswordErr] = useState("");
  const [isTheSamePassErr, setIsTheSamePassErr] = useState("");
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [wasSubmit, setWasSubmit] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(state => state.user.userData);

  useEffect(() => {
    if (user.name) {
      history.push("/home");
    }
  }, [user]);


  useEffect(() => {
    if (wasSubmit) {
      validate();
    }
  }, [login, password, repeatPassword, name, wasSubmit]);

  const onSubmit = (e) => {
    e.preventDefault();
    setWasSubmit(true);
    if (!validate()) {
      dispatch(registerUser(login, password, name)).then(() => {
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
    const validatePasswordRepeat = validatePass(repeatPassword);
    const validateName = validateIsRequired(name);
    const validateIsTheSamePass = isTheSamePass(password, repeatPassword);
    setLoginErr(validateMail);
    setPasswordErr(validatePassword);
    setRepeatPasswordErr(validatePasswordRepeat);
    setIsTheSamePassErr(validateIsTheSamePass);
    setNameErr(validateName);
    const notValidation = !!validateMail
                  || !!validatePassword
                  || !!validatePasswordRepeat
                  || !!validateName
                  || !!validateIsTheSamePass;
    return notValidation;
  };

  return (
    <CustomPageWrapper title="Register" additions="loginLink" >
      <div className="register-form-wrapper">
        <form className="center-column" onSubmit={onSubmit} autoComplete="off">
          <FormControl className="register-form-input-wrapper">
            <TextField
              label="E-mail"
              className="register-form-input"
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
          <FormControl className="register-form-input-wrapper">
            <TextField
              label="Login"
              className="register-form-input"
              value={name}
              error={!!nameErr}
              onChange={(e) => {
                setName(e.target.value);
              }}
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FaceIcon />
                  </InputAdornment>
                ),
              }}
            />
            {nameErr && <div className="error-text">{nameErr}</div>}
          </FormControl>
          <FormControl className="register-form-input-wrapper">
            <TextField
              className="register-form-input"
              error={!!passwordErr}
              type="Password"
              value={password}
              label="Password"
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
          <FormControl className="register-form-input-wrapper">
            <TextField
              className="register-form-input"
              error={!!repeatPasswordErr}
              type="Password"
              value={repeatPassword}
              label="Repeat password"
              onChange={(e) => {
                setRepeatPassword(e.target.value);
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
            {(repeatPasswordErr || isTheSamePassErr) && (
              <div className="error-text">
                {repeatPasswordErr}<br />
                {isTheSamePassErr}
              </div>
            )}
          </FormControl>
          {authErr && <div className="error-text-auth">{authErr}</div>}
          <Button
            className="register-form-btn"
            variant="contained"
            color="primary"
            type="submit"
            disabled={!(login && password && repeatPassword && name)}
          >
            Register
          </Button>
        </form>
      </div>
    </CustomPageWrapper>
  );
};
