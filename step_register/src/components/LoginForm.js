import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { login } from './UserFunctions'
import Alert from '@material-ui/lab/Alert';

class LoginForm extends Component {
    state = { 
        phoneNo: '',
        password: '',
        invalidPhoneNo: false,
        invalidInput: false,
    }

    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    }

    continue = e => {
        e.preventDefault();

        const {phoneNo, password } = this.state;

        if(this.validatePhoneNo(phoneNo)){
            this.setState({invalidPhoneNo: false});
            const customer = {
                phoneNo: phoneNo,
                password: password
            }
            login(customer).then(res => {
                if (res) {
                    this.setState({invalidInput: false});
                    window.location.href = '/';
                }
                else{
                    this.setState({invalidInput: true});
                }
            })
        }
        else{
            this.setState({invalidPhoneNo: true});
        }
    }

    validatePhoneNo(phoneNo) {

        let regPhoneNo = /^07\d{8}$/;
        if(phoneNo.match(regPhoneNo))
            return true;
        else
            return false;   

    }

    render() {

        const invalidPhoneNoMsg = (
            <Alert style={styles.alert} severity="error">Invalid phone number</Alert>
        )

        const invalidInputMsg = (
            <Alert style={styles.alert} severity="error">Incorrect phone number or password</Alert>
        )

        const values = this.state; 
        return ( 
            <MuiThemeProvider>
            <React.Fragment>
                <Card  style={styles.root}>
                <CardHeader
                    title="Login"
                />
                <br />
                <TextField 
                    hintText = "Enter Phone Number"
                    floatingLabelText="Phone Number"
                    onChange = {this.handleChange('phoneNo')}
                    defaultValue = {values.phoneNo}
                    errorText={this.state.errorMsgPhoneNo}
                />
                <br />
                <TextField 
                    hintText = "Enter Your Password"
                    type = "password"
                    floatingLabelText="password"
                    onChange = {this.handleChange('password')}
                    defaultValue = {values.Password}
                />
                <br />
                {values.invalidPhoneNo? invalidPhoneNoMsg : values.invalidInput ? invalidInputMsg : null }
                <br />
                <RaisedButton 
                    label='Login'
                    primary={true}
                    style={styles.button}
                    onClick={this.continue}
                />
                </Card>
            </React.Fragment>    
        </MuiThemeProvider>
        );
    }
}

const styles = {
    button: {
        margin: 15,
        marginTop: 20,
        marginBottom: 40
    },
    root: {
        maxWidth: 345,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '5%'  
    },
    alert: {
        marginTop: 20,
    }
}
 
export default LoginForm;