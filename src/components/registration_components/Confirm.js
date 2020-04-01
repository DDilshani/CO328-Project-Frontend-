import React, { Component } from "react";
import { register } from './UserFunctions';

export class Confirm extends Component {

    state = {
        validInput : true
    }

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
            if (res) {
                this.setState({validInput: true});
                window.location.href = '/login';
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

        const alertMsg = (
            <div class="alert alert-danger" role="alert">
            A user with these account details already exists!
            </div>
        )

        const { values: {firstName, lastName, phoneNo, email, address1, address2, city} } = this.props;

        return (

            <div className='card'>
            
                <form onSubmit = {this.continue}>
                <div className = 'header'>
                        <h3>Sign Up</h3>
                    </div>

                    <div className="form-group">
                        <label>Name</label>
                        <input type="text"  value = {firstName + " " + lastName} className="form-control" readOnly />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email"  value = {email} className="form-control" readOnly />
                    </div>
                    <div className="form-group">
                        <label>Phone Number</label>
                        <input type="text"  value = {phoneNo} className="form-control" readOnly />
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input type="text"  value = {address1+ ", "+address2 + ", " + city} className="form-control" readOnly />
                    </div>

                    {this.state.validInput? null : alertMsg}

                    <button type="submit" className="btn btn-success btn-block">Submit</button>
                    <button onClick = {this.back} className="btn btn-light btn-block">Back</button>

                    <br></br>
                    <p className="login text-right">Already have an account ? <a href="#">Login Here!</a></p>
        
                </form>
            </div>
        );
    }
}

export default Confirm;