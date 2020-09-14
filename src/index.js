import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import { store } from "./store/rootReducer";
import "./styles/global.scss";

import { firebaseConfig } from "./config/firebase";

firebase.initializeApp(firebaseConfig);

const app = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));