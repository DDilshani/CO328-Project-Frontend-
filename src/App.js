import React from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import '../node_modules/react';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import RegisterLanguage from "./components/registerLanguage.component";
import RegisterSubscription from "./components/registerSubscription.component";
import ResetPWSendCode from "./components/resetPWSendCode.component";
import ResetCode from "./components/resetCode.component";
import IncorrectCode from "./components/incorrectCode.component";
import ResetPW from "./components/resetPW.component";
import Guide from "./components/guide.component";
import Schedule from "./components/schedule.component";
import Terms from "./components/terms.component";
import Hotline from "./components/hotline.component";



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
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/registerLanguage"}>RegisterLanguage</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/registerSubscription"}>RegisterSubscription</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/resetPWSendCode"}>ResetPWSendCode</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/resetCode"}>ResetCode</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/incorrectCode"}>IncorrectCode</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/resetPW"}>ResetPW</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/guide"}>Guide</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/schedule"}>Schedule</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/terms"}>Terms</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/hotline"}>Hotline</Link>
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
            <Route path="/sign-up" component={SignUp} />
            <Route path="/registerLanguage" component={RegisterLanguage} />
            <Route path="/registerSubscription" component={RegisterSubscription} />
            <Route path="/resetPWSendCode" component={ResetPWSendCode} />
            <Route path="/resetCode" component={ResetCode} />
            <Route path="/incorrectCode" component={IncorrectCode} />
            <Route path="/resetPW" component={ResetPW} />
            <Route path="/guide" component={Guide} />
            <Route path="/schedule" component={Schedule} />
            <Route path="/terms" component={Terms} />
            <Route path="/hotline" component={Hotline} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;

