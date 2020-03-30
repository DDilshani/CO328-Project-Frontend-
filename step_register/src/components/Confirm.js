import React, { Component } from 'react';
import { register } from './UserFunctions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

export class Confirm extends Component {

    continue = e => {
        e.preventDefault();

        const { values: {firstName, lastName, phoneNo, email, customerType, password, address1, address2, city, regDate} } = this.props;

        const customer = {
            firstName: firstName,
            lastName: lastName,
            phoneNo: phoneNo,
            email: email,
            customerType: customerType,
            password: password,
            address1: address1,
            address2: address2,
            city: city,
            regDate: regDate
        }
        register(customer).then(res => {
            console.log('Go to login');
        })

        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() { 
        const { values: {firstName, lastName, phoneNo, email, address1, address2, city} } = this.props;

        return ( 
            <MuiThemeProvider>
                <React.Fragment>
                    <Card  style={styles.root}>
                    <CardHeader
                        title="Registration"
                    />
                    <List>
                        <ListItem 
                            style={{}}
                            primaryText = 'First Name'
                            secondaryText = {firstName}
                        />
                        <ListItem
                            primaryText = 'Last Name'
                            secondaryText = {lastName}
                        />
                        <ListItem 
                            primaryText = 'email'
                            secondaryText = {email}
                        />
                        <ListItem 
                            primaryText = 'Phone Number'
                            secondaryText = {phoneNo}
                        />
                        <ListItem 
                            primaryText = 'Street Address 1'
                            secondaryText = {address1}
                        />
                        <ListItem 
                            primaryText = 'Street Address 2'
                            secondaryText = {address2}
                        />
                        <ListItem 
                            primaryText = 'City'
                            secondaryText = {city}
                        />
                    </List>
                    <RaisedButton 
                        label='Back'
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />
                    <RaisedButton 
                        label='Confirm'
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
 
export default Confirm;