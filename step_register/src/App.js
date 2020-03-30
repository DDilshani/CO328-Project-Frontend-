import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import RegistrationForm from './components/RegistrationForm';
import NavigationBar from './components/NavigationBar'
import LoginForm from './components/LoginForm'

function App() {
  return (
    <Router>
    <div className="App">
      <NavigationBar />
      <Route exact path="/" component={Dashboard} />
          <div className="container form-container">
            <Route exact path="/register" component={RegistrationForm} />
            <Route exact path="/login" component={LoginForm} />
          </div>
    </div>
    </Router>
  );
}

export default App;
