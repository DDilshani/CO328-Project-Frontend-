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
import Navigation from './components/layout/Navigation';

function App() {
  return (<Router>
    <div className="App">
      <Navigation></Navigation>
      
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

