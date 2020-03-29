import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
            <br/>

          <Link className="navbar-brand" to={"/sign-in"}>zerotrash.com</Link>
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
        )
    }
}

export default Navigation
