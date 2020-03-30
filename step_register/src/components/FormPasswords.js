import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

export class FormPasswords extends Component {
    state = { 
        errorMsgPassword: ''
     }

    continue = e => {
        const {password, confirmPassword} = this.props.values;
        e.preventDefault();
        if(password === confirmPassword){
            this.setState({errorMsgPassword: ''});
            this.props.nextStep();
        }else{
            this.setState({errorMsgPassword: 'passwords do not match'});
        }
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
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
                    <TextField 
                        hintText = "Enter Password"
                        type="password"
                        floatingLabelText="Password"
                        onChange = {handleChange('password')}
                        defaultValue = {values.password}
                    />
                    <br />
                    <TextField 
                        hintText = "Confirm Password"
                        type="password"
                        floatingLabelText="Confirm Password"
                        onChange = {handleChange('confirmPassword')}
                        defaultValue = {values.confirmPassword}
                        errorText={this.state.errorMsgPassword}
                    />
                    <br />
                    <RaisedButton 
                        label='Back'
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />
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
        margin: 15,
        marginTop: 20,
        marginBottom: 40
    },
    root: {
        maxWidth: 345,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '5%'  
    }
}
 
export default FormPasswords;