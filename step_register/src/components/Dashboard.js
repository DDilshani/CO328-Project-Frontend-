import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import jwt_decode from 'jwt-decode'

class Dashboard extends Component {
    state = { 
        firstName: '',
        lastName: '',
        phoneNo: '',
        email: '',
        address1: '',
        address2: '',
        city: '',
        regDate: '',
        customerType: '',
        errors: {}
    }

    componentDidMount() {
        if(localStorage.usertoken){
            const token = localStorage.usertoken;
            const decoded = jwt_decode(token);
            console.log(decoded);
            this.setState({
              firstName: decoded.firstName,
              lastName: decoded.lastName,
              phoneNo: decoded.phoneNo,
              email: decoded.email,
              address1: decoded.address1,
              address2: decoded.address2,
              city: decoded.city,
              regDate: decoded.regDate,
              customerType: decoded.customerType
            })

        }
    }
    
    render() { 
        return (
            <MuiThemeProvider>
                <React.Fragment>

                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}
 
export default Dashboard;
