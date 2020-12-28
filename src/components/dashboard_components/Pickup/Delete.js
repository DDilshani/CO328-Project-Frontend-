import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap';
import Trash from 'react-icons/lib/fa/trash-o';
import PropTypes from 'prop-types'

import { deletePickup } from './../UserFunctions';

class Delete extends Component {
   constructor() {
      super()
      this.state = {
         show: false,
      }
   }

   delete() {
      this.setState({ show: !this.state.show })
   }

   continue = e => {

      const { pickupId } = this.props;

      const pickup = {
         pickupId: pickupId,
      }

      deletePickup(pickup).then(res => {
         if (res) {
            let statusCode = res.statusCode;
            console.log(statusCode);
            if(statusCode === 'S2000'){
               console.log('Success')
               window.location.href = '/home';
            }
            else if(statusCode === 'E5000'){
               console.log('Error')
            }
         }
         else{
            console.log('Error')
         }
      })


   }

   render() {
      const { pickupId }  = this.props;

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
                  <Button variant="success" onClick = {e => this.continue(e)}>Delete</Button>
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
