import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';

import StepOne from './PlacePickup/StepOne'
import StepTwo from './PlacePickup/StepTwo'
import StepThree from './PlacePickup/StepThree'

// CSS for multistep styling, this will be updated soon
import './Pickup/multiStep.css'

const steps = [
   { name: 'Step 1 ', component: <StepOne /> },
   { name: 'Step 2 ', component: <StepTwo /> },
   { name: 'Step 3 ', component: <StepThree /> }
];

class NewPickup extends Component {
   state = {
      step:1
   };

   nextStep = () => {
      const { step } = this.state;
      this.setState({
         step: step + 1
      });
   }

   prevStep = () => {
      const { step } = this.state;
      this.setState({
         step: step - 1
      });
   }

   getStep(){
      if(this.state.step==1){
         return <StepOne nextStep = {this.nextStep}/>;
      }else if(this.state.step==2){
         return <StepTwo nextStep = {this.nextStep} prevStep = {this.prevStep}/>;
      }else{
         return <StepThree nextStep = {this.nextStep} prevStep = {this.prevStep}/>;
      }
   }

   handleChange = input => e => {
      this.setState({
         [input]: e.target.value
      });
   }

   render() {

      return (
         <Container>
            <Row>

            </Row>
            <Row>
               <Col>
                  {this.getStep()}
               </Col>
            </Row>
         </Container>
      )
   }
}

export default NewPickup;
