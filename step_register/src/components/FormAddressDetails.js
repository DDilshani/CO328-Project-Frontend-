import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

export class FormAddressDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
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
                        hintText = "street address 1"
                        floatingLabelText="street address 1"
                        onChange = {handleChange('address1')}
                        defaultValue = {values.address1}
                    />
                    <br />
                    <TextField 
                        hintText = "street address 2"
                        floatingLabelText="street address 2"
                        onChange = {handleChange('address2')}
                        defaultValue = {values.address2}
                    />
                    <br />
                    <TextField 
                        hintText = "city"
                        floatingLabelText="city"
                        onChange = {handleChange('city')}
                        defaultValue = {values.city}
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
export default FormAddressDetails;