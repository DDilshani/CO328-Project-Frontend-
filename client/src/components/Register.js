import React, { Component } from 'react';
import CustomerRegister from './CustomerRegister';
import RegisterButtonContainer from './RegisterButtonContainer';

class Register extends Component {

    state = {
        showRegCustomer: false,
        showOrganization: false
    };

    functionShowRegCustomer(){
        this.setState({showRegCustomer: true});
    }

    functionShowOrganization(){
        this.setState({showOrganization: true});
    }

    showComponent(){
        if(this.state.showRegCustomer){
            return <CustomerRegister customerType = 'Regular Customer' />;
        }
        else if(this.state.showOrganization){
            return null;
        }
        else {
            return <RegisterButtonContainer 
            functionShowRegCustomer = {this.functionShowRegCustomer.bind(this)}
            functionShowOrganization = {this.functionShowOrganization.bind(this)}
            />
        }
    }

    render() { 
        var component = this.showComponent();
        return (
            <div>
                {component}
            </div>
        );
    }
}
 
export default Register;