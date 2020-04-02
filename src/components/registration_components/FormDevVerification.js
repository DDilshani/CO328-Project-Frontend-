import React, { Component } from 'react';
import { Button, Form,Card, Alert } from 'react-bootstrap';
import { devVerification } from './UserFunctions';

class FormDevVerification extends Component {
    state = {  
        token: '',
        validInput: true,
        validPhoneNo: true,
        validToken: true
    }

    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    }

    continue = e => {
        e.preventDefault();

        const customer = {
            token: this.state.token,
            phoneNo: this.props.values.phoneNo
        }

        devVerification(customer).then(res => {
            if (res) {
                console.log(res.statusCode);
                let statusCode = res.statusCode;
                if(statusCode == 'S1000'){
                    this.setState({validToken: true, validPhoneNo: true, validInput : true});
                    this.props.nextStep();
                }
                else if(statusCode == 'E3002'){
                    this.setState({validToken: false, validPhoneNo: true, validInput : true});
                }
                else{
                    this.setState({validToken: true, validPhoneNo: true, validInput : false});
                }
            }
            else{
                this.setState({validInput: false});
            }
        })
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() { 
        const {values,handleChange} = this.props;
        const { validInput, validPhoneNo, validToken } = this.state;

        const invalidInputMsg = (
            <Alert variant='danger'>
                Server Error. Please try again later!
            </Alert>
        )

        const invalidPhoneNoMsg = (
            <Alert variant='danger'>
                Device is not registered on the system!
            </Alert>
        )

        const invalidTokenMsg = (
            <Alert variant='danger'>
                Incorrect verification code!
            </Alert>
        )

        return (
            
            <Card>
                <Form onSubmit = {e => this.continue(e)}>
                    <Card.Body>
                        <Card.Title className='text-center'>
                            Mobile number verification
                        </Card.Title>
                        <br />
                        <Form.Group controlId="forDeviceVerification">
                            <Form.Label>Device Verification Code</Form.Label>
                            <Form.Control type="text" placeholder="" value={this.state.token} onChange = {this.handleChange('token')} required/>
                            <Form.Text className="text-muted">
                            Do not share this code with anyone else
                            </Form.Text>
                        </Form.Group>
                        <br />
                        <Card.Text>
                        The device verification code has been sent to you when you registered your mobile number using ssd.
                        </Card.Text>
                        {validInput? validPhoneNo? validToken? null : invalidTokenMsg : invalidPhoneNoMsg : invalidInputMsg}
                        <Button variant="success" type="submit" block>
                            Verify & Continue
                        </Button>
                        <Button variant="light" onClick = {this.back} block>
                            Back
                        </Button>
                    </Card.Body>
                </Form>
            </Card>
        );
    }
}
 
export default FormDevVerification;