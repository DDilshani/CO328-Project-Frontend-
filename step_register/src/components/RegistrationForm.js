import React, { Component } from 'react';
import FormPersonalDetails from './FormPersonalDetails';
import FormPasswords from './FormPasswords';
import FormAddressDetails from './FormAddressDetails';
import Confirm from './Confirm'

export class RegistrationForm extends Component {
    state = { 
        step: 1,
        customerType:  'Regular Customer',
        firstName: '',
        lastName: '',
        phoneNo: '',
        email: '',
        password: '',
        confirmPassword: '',
        address1: '',
        address2: '',
        city: '',
        regDate: this.formatDate(new Date().toLocaleString())
    };


    formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    }

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

    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    }

    render() { 

        const { step } = this.state;
        const {firstName, lastName, email, phoneNo, password, confirmPassword, address1, address2, city, regDate, customerType} = this.state;
        const values = {firstName, lastName, email, phoneNo, password, confirmPassword, address1, address2, city, regDate, customerType};

        switch(step) {
            case 1:
                return (
                    <FormPersonalDetails 
                        nextStep = {this.nextStep}
                        handleChange = {this.handleChange}
                        values = {values}
                    />
                )
            case 2:
                return (
                    <FormPasswords 
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    handleChange = {this.handleChange}
                    values = {values}
                    />
                )
            case 3:
                return (
                    <FormAddressDetails 
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    handleChange = {this.handleChange}
                    values = {values}
                    />
                )
            case 4:
                return (
                    <Confirm 
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    values = {values}
                    />
                )
            case 5:
                return <h1>Success</h1>
        }
    }
}
 
export default RegistrationForm;