import React, { Component } from 'react';
import { Button, Form, Card, ButtonGroup, Container, Row, Col } from 'react-bootstrap';

class StepTwo extends Component {

   continue (e) {
      e.preventDefault();
      this.props.nextStep();
   }

   back = e => {
      e.preventDefault();
      this.props.prevStep();
   }
   
   render(){

      const { handleChange } = this.props;

      return (
         <div className="steps">
            <Card>
               <Card.Body>
                  <Form onSubmit = {e => this.continue(e)}>
                     <div><b>Order will pickup within 3 days.</b></div>
                     <br></br>
                     <Card.Text>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.
                     </Card.Text>
                     <br></br>

                     <Card.Text>
                        Need to learn more?&ensp;
                        <a href="#">Click here !</a>
                     </Card.Text>
                     <br></br>
                     <Container>
                        <Row>
                           <Col>
                              <Button variant="light" block onClick={this.back}>Back</Button>
                           </Col>
                           <Col>&nbsp;</Col>
                           <Col>
                              <Button variant="success" type="submit" block>I Agree</Button>
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

export default StepTwo;
