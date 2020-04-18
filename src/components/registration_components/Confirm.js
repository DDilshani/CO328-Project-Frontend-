import React, { Component } from "react";
import { register } from './UserFunctions';
import { Button, Form,Card, Alert } from 'react-bootstrap';

export class Confirm extends Component {

   state = {
      validServer: true,
      validInput : true
   }

   continue = e => {
      e.preventDefault();

      const { values: {firstName, lastName, phoneNo, email, customerType, password, address1, address2, city, regDate, language, municipalCouncil} } = this.props;
      console.log(this.props.values);
      const customer = {
         firstName: firstName,
         lastName: lastName,
         phoneNo: phoneNo,
         email: email,
         customerType: customerType,
         password: password,
         address1: address1,
         address2: address2,
         city: city,
         regDate: regDate,
         language: language,
         municipalCouncil: municipalCouncil,
      }
      console.log(customer);
      register(customer).then(res => {
         if (res) {
            let statusCode = res.statusCode;
            console.log(statusCode);
            if(statusCode === 'S2000'){
               console.log('Success')
               this.setState({validInput: true, validServer :true});
               window.location.href = '/login';
            }
            else if(statusCode === 'E4001'){
               console.log('Wrong')
               this.setState({validInput: false, validServer : true});
            }
            else if(statusCode === 'E5000'){
               console.log('Error')
               this.setState({validInput: true, validServer : false});
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

   render() {

      const invalidInputMsg = (
         <Alert variant='danger'>
            A user with these account details already exists!
         </Alert>
      )

      const invalidServerMsg = (
         <Alert variant='danger'>
            Database error!
         </Alert>
      )

      const { values: {firstName, lastName, phoneNo, email, address1, address2, city} } = this.props;
      const { validInput, validServer} = this.state;

      return (

         <Card>
            <Form onSubmit = {e => this.continue(e)}>
               <Card.Body>
                  <Card.Title className='text-center'>
                     Confirm Information
                  </Card.Title>
                  <Form.Group >
                     <Form.Label>Name</Form.Label>
                     <Form.Control type="text"  value = {firstName + " " + lastName} readOnly/>
                  </Form.Group>
                  <Form.Group >
                     <Form.Label>Email</Form.Label>
                     <Form.Control type="text" value = {email} readOnly />
                  </Form.Group>
                  <Form.Group>
                     <Form.Label>Mobile Number</Form.Label>
                     <Form.Control type="text" value = {phoneNo} readOnly/>
                  </Form.Group>
                  <Form.Group>
                     <Form.Label>Address</Form.Label>
                     <Form.Control type="text"  value = {address1+ ", "+address2 + ", " + city} readOnly/>
                  </Form.Group>
                  <br/>
                  {validServer? (validInput? null : invalidInputMsg) : invalidServerMsg}
                  <Button variant="success" type="submit" block>
                     Confirm & Submit
                  </Button>
                  <Button variant="light" onClick = {this.back} block>
                     Back
                  </Button>
                  <Card.Text>
                     Already have an account?&ensp;
                     <a href="#">Login Here!</a>
                  </Card.Text>
               </Card.Body>
            </Form>
         </Card>
      );
   }
}

export default Confirm;
