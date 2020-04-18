import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap';
import Trash from 'react-icons/lib/fa/trash-o';
import PropTypes from 'prop-types'

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
      const pickupId = this.props.pickupId;

      return (
         <div>
            <Button variant="light" onClick={() => { this.delete() }} block><Trash size={25} /></Button>
            <Modal show={this.state.show} onHide={() => { this.delete() }}>
               <Modal.Header closeButton>
                  <h4><b>Delete</b></h4>
               </Modal.Header>
               <Modal.Body>
                  <br/>
                  Are you sure to delete the pickup #001145
                  <br/>
               </Modal.Body>
               <Modal.Footer>
                  <Button variant="success" >Delete</Button>
               </Modal.Footer>
            </Modal>
         </div>
      )
   }
}

Delete.propTypes = {
   pickupId: PropTypes.number.isRequired
}

export default Delete;
