import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap';
import Trash from 'react-icons/lib/fa/trash-o';

class Delete extends Component {
  constructor() {
    super()
    this.state = {
      show: false
    }
  }
 
  delete() {
    this.setState({ show: !this.state.show })
  }
  
  render() {
    return (
      <div>
        <Button variant="light" onClick={() => { this.delete() }} block><Trash size={25} /></Button>
        <Modal show={this.state.show} onHide={() => { this.delete() }}>
          <Modal.Header closeButton>
            <h4><b>Delete</b></h4>
          </Modal.Header>
          <Modal.Body>Are you sure to delete the pickup #001145</Modal.Body>
          <Modal.Footer>
            <Button variant="success" >Delete</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default Delete;

