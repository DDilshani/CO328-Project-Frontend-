import React, { Component } from 'react';
import { Button, Form, Card, ButtonGroup, Container, Row, Col } from 'react-bootstrap';

class StepOne extends Component {

   continue (e) {
      e.preventDefault();
      this.props.nextStep();
   }

   render(){

      const { handleChange } = this.props;

      return (
         <div className="steps">
            <Card>
               <Card.Body>
                  <Form onSubmit = {e => this.continue(e)}>
                     <Form.Group>
                        <Form.Label>Timeslot</Form.Label>
                        <Form.Control as="select" required>
                           <option value="">7.00 AM - 9.00 AM</option>
                           <option value="">9.00 AM - 11.00 AM</option>
                           <option value="">11.00 AM - 13.00 AM</option>
                           <option value="">13.00 AM - 15.00 AM</option>
                        </Form.Control>
                     </Form.Group>

                     <Form.Group>
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control type="text" placeholder="Enter mobile number" required/>
                     </Form.Group>

                     <Form.Group>
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="Pickup Address" as="textarea" rows="3" required />
                     </Form.Group>

                     <br />
                     <Container>
                        <Row>
                           <Col>
                              <Button variant="light" block>Back</Button>
                           </Col>
                           <Col>&nbsp;</Col>
                           <Col>
                              <Button variant="success" type="submit" block>Next</Button>
                           </Col>
                        </Row>
                     </Container>
                  </Form>
               </Card.Body>
            </Card>
            <br></br>
         </div>
      )
   }

}

export default StepOne;
