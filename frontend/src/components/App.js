import React, { Component, Fragment } from "react";

import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import Home from "./layout/Home";
import SystemDetails from "../components/system/SystemDetails";
import UserProfile from "./auth/UserProfile";
import SystemDashboard from "./system/SystemDashboard";
import NavBar from "./layout/NavBar";
import Alerts from "./layout/Alerts";
import Register from "./auth/Register";
import Login from "./auth/LogIn";
import PrivateRoute from "./common/PrivateRoute";

import { Provider } from "react-redux";
import store from "../store";
import { loadUser } from "../actions/auth";

import "./App.css";

// Alert Options
const alertOptions = {
  timeout: 3000,
  position: "top center"
};

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <NavBar />
              <Alerts />

              <Switch>
                <PrivateRoute exact path="/" component={SystemDashboard} />
                <PrivateRoute
                  exact
                  path="/conditions"
                  component={SystemDetails}
                />
                <PrivateRoute exact path="/profile" component={UserProfile} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
              </Switch>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
