import React from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import '../node_modules/react';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import Login from "./components/login.component";
import Fillup from "./components/fillup.component";
import Register from "./components/register.component";
import Subscription from "./components/subscription.component";
import Fogotpw from "./components/fogotpw.component";
import ResetCode from "./components/resetCode.component";
import IncorrectCode from "./components/incorrectCode.component";
import ResetPW from "./components/resetPW.component";
import Guide from "./components/guide.component";
import Schedule from "./components/schedule.component";
import Terms from "./components/terms.component";

function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>positronX.io</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/register"}>Register</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/incorrectCode"}>IncorrectCode</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/resetPW"}>ResetPW</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/schedule"}>Schedule</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/terms"}>Terms</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/fillup" component={Fillup} />
            <Route path="/register" component={Register} />
            <Route path="/subscription" component={Subscription} />
            <Route path="/fogotpw" component={Fogotpw} />
            <Route path="/resetCode" component={ResetCode} />
            <Route path="/incorrectCode" component={IncorrectCode} />
            <Route path="/resetPW" component={ResetPW} />
            <Route path="/guide" component={Guide} />
            <Route path="/schedule" component={Schedule} />
            <Route path="/terms" component={Terms} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;

