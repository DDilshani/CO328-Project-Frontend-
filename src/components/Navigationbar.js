import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

class Navigationbar extends Component {
	render() {
		return (
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Navbar.Brand>Collector</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav class="navbar-nav ml-auto">
						<NavDropdown title="User Name" id="username">
							<NavDropdown.Item href="#action/3.1">Settings</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Log Out</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Navbar>

		)
	}
}

export default Navigationbar;
