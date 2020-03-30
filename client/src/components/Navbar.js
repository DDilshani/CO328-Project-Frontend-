import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Landing extends Component {
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
  }

  render() {
    const loginRegLink = (
      <div className="w3-bar w3-border w3-light-grey">
        <button className="w3-bar-item w3-button">
          <Link to="/login">
            Login
          </Link>
        </button>
        <button className="w3-bar-item w3-button">
          <Link to="/register">
            Register
          </Link>
        </button>
      </div>
    )

    const userLink = (
      <div className="w3-bar w3-border w3-light-grey">
        <button className="w3-bar-item w3-button">
          <Link to="/profile">
            User
          </Link>
        </button>
        <button onClick={this.logOut.bind(this)} className="w3-bar-item w3-button">
            Logout
        </button>
      </div>
    )

    return (
        <div className="w3-bar w3-border w3-light-grey" id="navbarsExample10">
          <button className="w3-bar-item w3-button">
            <Link to="/">
              Home
            </Link>
          </button>
          {localStorage.usertoken ? userLink : loginRegLink}
        </div>
    )
  }
}

