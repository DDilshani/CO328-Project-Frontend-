import React, { Component } from 'react';
import { Button, Form, Card} from 'react-bootstrap';

class FormPickupDetails extends Component {
   state = {
      validPhoneNo: true,
   }

   continue (e) {
      e.preventDefault();

      const {phoneNo} = this.props.values

      let allow = true;
      if(!this.validatePhoneNo(phoneNo)) {
         this.setState({
            validPhoneNo: false
         });
         allow = false;
      }
      else{
         this.setState({
            validPhoneNo: true
         });
      }
      if(allow){
         this.props.nextStep();
      }
   }

   validatePhoneNo(phoneNo) {

      let regPhoneNo = /^07\d{8}$/;
      if(phoneNo.match(regPhoneNo)) {
         return true;
      }
      return false;

   }

   render(){

      const { values,handleChange } = this.props;
      const { validPhoneNo} = this.state;
      const invalidClass = 'is-invalid';

      const invalidPhoneNoMsg = (
         <Form.Text className="text-muted text-alert">
            Invalid phone No
         </Form.Text>
      )

      return (
         <Card>
            <Form onSubmit = {e => this.continue(e)}>
                  <Card.Body>
                     <Card.Title className='text-center'>
                        Shedule a pickup
                     </Card.Title>
                     <Form.Group>
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control type="text" className = {validPhoneNo ? null : invalidClass} defaultValue = {values.phoneNo} onChange = {handleChange('phoneNo')} required/>
                        {validPhoneNo ? null : invalidPhoneNoMsg}
                     </Form.Group>
                     <Form.Group>
                        <Form.Label>Address</Form.Label>
                        <Form.Control as="textarea" rows='3' defaultValue={values.address} onChange = {handleChange('adress')} required/>
                     </Form.Group>
                     <Form.Group >
                        <Form.Label>Pickup Time</Form.Label>
                        <Form.Control as="select" value = {values.time} onChange = {handleChange('time')} required>
                           <option>1:00 a.m.</option>
                           <option>2:00 a.m.</option>
                           <option>3:00 a.m.</option>
                           <option>4:00 a.m.</option>
                           <option>5:00 a.m.</option>
                           <option>6:00 a.m.</option>
                           <option>7:00 a.m.</option>
                           <option>8:00 a.m.</option>
                           <option>9:00 a.m.</option>
                           <option>10:00 a.m.</option>
                           <option>11:00 a.m.</option>
                           <option>12:00 p.m.</option>
                           <option>1:00 p.m.</option>
                           <option>2:00 p.m.</option>
                           <option>3:00 p.m.</option>
                           <option>4:00 p.m.</option>
                           <option>5:00 p.m.</option>
                           <option>6:00 p.m.</option>
                           <option>7:00 p.m.</option>
                           <option>8:00 p.m.</option>
                           <option>9:00 p.m.</option>
                           <option>10:00 p.m.</option>
                           <option>11:00 p.m.</option>
                        </Form.Control>
                     </Form.Group>
                     <br />
                     <Button variant="success" type="submit" block>
                        Continue
                     </Button>
               </Card.Body>
            </Form>
         </Card>
      )
   }

}

export default FormPickupDetails;
