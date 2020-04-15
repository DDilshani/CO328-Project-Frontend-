import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Multistep from 'react-multistep'

import StepOne from './PlacePickup/StepOne'
import StepTwo from './PlacePickup/StepTwo'
import StepThree from './PlacePickup/StepThree'

const steps = [
   { name: 'Step 1 ', component: <StepOne /> },
   { name: 'Step 2 ', component: <StepTwo /> },
   { name: 'Step 3 ', component: <StepThree /> }
];

class NewPickup extends Component {
   render() {
      return (
         <div className="">
            <br/>
            <div >
               <div>
                  <Container className="stepperForm" fluid="m">
                     <Multistep steps={steps} showNavigation={false} />
                  </Container>
               </div>
            </div>
         </div>
      )
   }
}

export default NewPickup;
