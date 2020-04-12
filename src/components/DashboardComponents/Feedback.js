import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap';
import Star from 'react-icons/lib/fa/star';
import Rating from './Rating';

class Feedback extends Component {
  constructor() {
    super()
    this.state = {
      show: false
    }
  }
  feedback() {
    this.setState({ show: !this.state.show })
  }

  render() {
    return (
      <div>
        <Button variant="light" onClick={() => { this.feedback() }} block><Star size={25} /></Button>
        <Modal show={this.state.show} onHide={() => { this.feedback() }}>
          <Modal.Header closeButton>
            <h4><b>Delete</b></h4>
          </Modal.Header>
          <Modal.Body>
            Make your feedback on pickup #001145
            <br></br>
            <br></br>
            <Rating />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" >Submit</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default Feedback;

