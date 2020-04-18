import React, { Component } from 'react';
import { Button, Form, Card, Alert} from 'react-bootstrap';
import { newPickup } from './UserFunctions';

class Confirm extends Component {
   state = {
      validServer: true,
   }

   continue = e => {
      e.preventDefault();

      const { values: {phoneNo, time, address} } = this.props;
      const pickup = {
         phoneNo: phoneNo,
         time: time,
         address: address,
      }
      newPickup(pickup).then(res => {
         if (res) {
            let statusCode = res.statusCode;
            console.log(statusCode);
            if(statusCode === 'S2000'){
               console.log('Success')
               this.setState({validServer :true});
               window.location.href = '/home';
            }
            else if(statusCode === 'E5000'){
               console.log('Error')
               this.setState({validServer : false});
            }
         }
         else{
            this.setState({validServer: false});
         }
      })
   }

   back = e => {
      e.preventDefault();
      this.props.prevStep();
   }
   

   render(){
      const { values: {phoneNo, address, time} } = this.props;
      const { validServer} = this.state;

      const invalidServerMsg = (
         <Alert variant='danger'>
            Database error!
         </Alert>
      )

      return (
         <Card>
            <Form onSubmit = {e => this.continue(e)}>
               <Card.Body>
                  <Card.Title className='text-center'>
                     Confirm Pickup
                  </Card.Title>
                  <Form.Group>
                     <Form.Label>Mobile Number</Form.Label>
                     <Form.Control type="text" value = {phoneNo} readOnly/>
                  </Form.Group>
                  <Form.Group>
                        <Form.Label>Address</Form.Label>
                        <Form.Control as="textarea" rows='3' value = {address} readOnly/>
                  </Form.Group>
                  <Form.Group>
                     <Form.Label>Pickup Time</Form.Label>
                     <Form.Control type="text" value = {time} readOnly/>
                  </Form.Group>
                  <br/>
                  {validServer? null : invalidServerMsg}
                  <Button variant="success" type="submit" block>
                     Confirm
                  </Button>
                  <Button variant="light" onClick = {this.back} block>
                     Back
                  </Button>
               </Card.Body>
            </Form>
         </Card>
      )
   }
}

export default Confirm;
