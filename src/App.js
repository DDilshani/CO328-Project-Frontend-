/*import React from 'react';

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
import Navbar from './components/layout/Navbar';

function App() {
  return (<Router>
    <div className="App">
      <Navbar />
      
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

export default App;*/

import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navigationbar from './components/layout/Navigationbar'
import Login from './components/Login'
import Register from './components/Register'
import Landing from './components/Landing'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigationbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
