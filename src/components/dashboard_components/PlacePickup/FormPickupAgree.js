import React, { Component } from 'react';
import { Button, Form, Card, ButtonGroup, Container, Row, Col } from 'react-bootstrap';

class FormPickupAgree extends Component {

   continue (e) {
      e.preventDefault();
      this.props.nextStep();
   }

   back = e => {
      e.preventDefault();
      this.props.prevStep();
   }
   
   render(){

      return (
         <Card>
            <Form onSubmit = {e => this.continue(e)}>
                  <Card.Body>
                     <Card.Title className='text-center'>
                        Shedule a pickup
                     </Card.Title>
                     <b>Your order will be picked up within 3 days.</b>
                     <Card.Text>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.
                     </Card.Text>
                     <br />
                     <Button variant="success" type="submit" block>
                        I Agree
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

export default FormPickupAgree;
