import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

export class FormPersonalDetails extends Component {
    state = { 
        errorMsgPhoneNo: '',
        errorMsgEmail: ''
     }

    continue = e => {
        const {phoneNo, email} = this.props.values;
        e.preventDefault();
        if(this.validateEmail(email)){
            this.setState({errorMsgEmail: ''});
            if(this.validatePhoneNo(phoneNo)){
                this.setState({errorMsgPhoneNo: ''});
                this.props.nextStep();
            }else{
                this.setState({errorMsgPhoneNo: 'invalid phone number'});
            }
        }else{
            this.setState({errorMsgEmail: 'invalid email address'});
        }
    }

    validatePhoneNo(phoneNo) {

        let regPhoneNo = /^07\d{8}$/;
        if(phoneNo.match(regPhoneNo))
            return true;
        else
            return false;   

    }

    validateEmail(email) {
        let regEmail =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(email.match(regEmail))
            return true
        else
            return false
    }

    render() { 
        const { values,handleChange } = this.props;

        return ( 
            <MuiThemeProvider>
                <React.Fragment>
                    <Card  style={styles.root}>
                    <CardHeader
                        title="Registration"
                    />
                    <br />
                    <TextField 
                        hintText = "Enter Your First Name"
                        floatingLabelText="First Name"
                        onChange = {handleChange('firstName')}
                        defaultValue = {values.firstName}
                    />
                    <br />
                    <TextField 
                        hintText = "Enter Your Last Name"
                        floatingLabelText="Last Name"
                        onChange = {handleChange('lastName')}
                        defaultValue = {values.lastName}
                    />
                    <br />
                    <TextField 
                        hintText = "Enter Your email"
                        floatingLabelText="email"
                        onChange = {handleChange('email')}
                        defaultValue = {values.email}
                        errorText={this.state.errorMsgEmail}
                    />
                    <br />
                    <TextField 
                        hintText = "Enter Your Phone Number"
                        floatingLabelText="Phone Number"
                        onChange = {handleChange('phoneNo')}
                        defaultValue = {values.phoneNo}
                        errorText={this.state.errorMsgPhoneNo}
                    />
                    <br />
                    <RaisedButton 
                        label='Continue'
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
        margin: 15
    },
    root: {
        maxWidth: 345,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '5%'  
    }

}


export default FormPersonalDetails;