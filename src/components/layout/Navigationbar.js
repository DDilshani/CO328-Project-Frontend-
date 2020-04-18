import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap';

class Navigationbar extends Component {
   logOut(e) {
      e.preventDefault()
      localStorage.removeItem('usertoken')
      this.props.history.push(`/`)
   }

   render() {
      const loginRegLink = (
         <Nav>
            <Nav.Link>
               <Link to="/login" className="nav-link">
                  Sign In
               </Link>
            </Nav.Link>

            <Nav.Link>
               <Link to="/register" className="nav-link">
                  Sign Up
               </Link>
            </Nav.Link>
         </Nav>

      )

      const userLink = (
         <Nav>
            <a href="#" onClick={this.logOut.bind(this)} className="nav-link">
               Logout
            </a>
         </Nav>
      )

      return (
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Zero Trash</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="mr-auto">

               </Nav>
               {localStorage.usertoken ? userLink : loginRegLink}
            </Navbar.Collapse>
         </Navbar>
      )
   }
}

export default withRouter(Navigationbar)
