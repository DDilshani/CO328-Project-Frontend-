import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navigationbar from './components/layout/Navigationbar'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import Landing from './components/pages/Landing'

import Dashboard from './components/Dashboard';
import Step from './components/Step';

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
