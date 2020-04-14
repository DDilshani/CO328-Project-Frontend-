import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Navigationbar from './Navigationbar';

//npm install react-multistep
import Multistep from 'react-multistep'


import StepOne from './Steps/StepOne'
import StepTwo from './Steps/StepTwo'
import StepThree from './Steps/StepThree'

const steps = [
    { name: 'Step 1 ', component: <StepOne /> },
    { name: 'Step 2 ', component: <StepTwo /> },
    { name: 'Step 3 ', component: <StepThree /> }
  ];
  

class Step extends Component {
    render() {
        return (
            <div>
                <Navigationbar></Navigationbar>
                <br></br>
                <br></br>

                <Container>
                    <Row>
                        <Col>
                            <div>
                                <Container className="stepperForm" fluid="m">
                                    <Multistep steps={steps} showNavigation={false} />
                                </Container>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Step;

