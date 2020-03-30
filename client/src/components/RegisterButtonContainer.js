import React, { Component } from 'react';

class RegisterButtonContainer extends Component {

    showRegCustomer() {
    
    }

    showOrganization() {
        this.setState({showRegCustomer: false,showOrganization: true});
    }

    render() { 
        return ( 
            <div className='button-container-link' id='button-container-registration'>   
                <button className="w3-button w3-blue btn-link" onClick = {this.props.functionShowRegCustomer}>Regular Customer</button>
                <button className="w3-button w3-blue btn-link" onClick = {this.props.functionShowOrganization}>Organization</button>
            </div>
         );
    }
}
 
export default RegisterButtonContainer;