import React, { Component } from 'react';
import { Button, Form, Card, ButtonGroup, Container, Row, Col } from 'react-bootstrap';

class StepThree extends Component {


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
                     <div><b>Please confirm your pickup</b></div>
                     <br></br>
                     <div>Details:</div>
                     <br/><br/>
                     <div>(Pick will be collected within three days)</div>
                     <br/>
                     <Container>
                        <Row>
                           <Col>
                              <Button variant="light" block onClick={this.back}>Back</Button>
                           </Col>
                           <Col>&nbsp;</Col>
                           <Col>
                              <Button variant="success" type="submit" block>Confirm</Button>
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

export default StepThree;
