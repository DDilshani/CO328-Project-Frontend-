import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap';
import Star from 'react-icons/lib/fa/star';
import Rating from './Rating';
import PropTypes from 'prop-types'

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

      const pickupId = this.props.pickupId;

      return (
         <div>
            <Button variant="light" onClick={() => { this.feedback() }} block><Star size={25} /></Button>
            <Modal show={this.state.show} onHide={() => { this.feedback() }}>
               <Modal.Header closeButton>
                  <h4><b>Feedbacks for pickup #{pickupId}</b></h4>
               </Modal.Header>
               <Modal.Body>
                  <br></br>
                  <div style={{paddingLeft:'10px'}}>
                     Make your feedback on pickup #{pickupId}
                     <br></br>
                     <Rating />
                  </div>
               </Modal.Body>
               <Modal.Footer>
                  <Button variant="success" >Submit</Button>
               </Modal.Footer>
            </Modal>
         </div>
      )
   }
}

Feedback.propTypes = {
   pickupId: PropTypes.number.isRequired
}

export default Feedback;
