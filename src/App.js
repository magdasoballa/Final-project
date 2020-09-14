import React, { useEffect } from "react";
import firebase from "firebase";
import { Switch, Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Dashboard } from "./pages/dashboard";
import { Loader } from "ui";
import { setUserData } from "store/actions";

export const PrivateRoute = ({ component: Component, path, exact }) => {
  const isUserLogged = localStorage.getItem("user");
  console.log(typeof  isUserLogged)
  console.log(isUserLogged)
  return (
    <Route
      exact={exact}
      path={path}
      render={() => {
        return isUserLogged ? (
          <Component />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  exact: PropTypes.bool,
  path: PropTypes.string,
};

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
        console.log(user, 'user')
      if (user) {
        dispatch(setUserData(user.email));
        localStorage.setItem("user", user.email);
      } else {
          localStorage.setItem("user", "");
      }
    });
  }, []);

  const loading = useSelector((state) => state.user.status);
  return (
    <>
      <Loader loading={loading === "FETCHING"} />
      <Switch>
        <PrivateRoute path="/home" exact component={Dashboard}  />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Redirect path="*" to="/home" />
      </Switch>
    </>
  );
};

export default App;
