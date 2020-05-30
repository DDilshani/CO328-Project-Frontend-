import React from "react";
import { Nav } from "react-bootstrap";

class SideBar extends React.Component {

  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-header">
          <h3>Settings</h3>
        </div>

        <Nav className="flex-column pt-2">

          <Nav.Item className="active">
            <Nav.Link href="#">
              Account
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="#">
              Privacy
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="#">
              FAQ
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="#">
              Contact
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}

export default SideBar;
