import React, { Component } from "react";

export class FormPersonalDetails extends Component {

    state = { 
        validEmail: true,
        validPhoneNo: true,
    }

    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        });

    }

    continue = e => {
        e.preventDefault();

        const {phoneNo, email} = this.props.values

        let allow = true;
        if(!this.validatePhoneNo(phoneNo)) {
            this.setState({
                validPhoneNo: false
            });
            allow = false;
        }
        else{
            this.setState({
                validPhoneNo: true
            });
        }
        if(!this.validateEmail(email)) {
            this.setState({
                validEmail: false
            });
            allow = false;
        }
        else{
            this.setState({
                validEmail: true
            });   
        }
        if(allow){
            this.props.nextStep();
        }
    }

    validatePhoneNo(phoneNo) {

        let regPhoneNo = /^07\d{8}$/;
        if(phoneNo.match(regPhoneNo)) {
            return true;
        }
        return false;   

    }

    validateEmail(email) {
        let regEmail =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(email.match(regEmail)) {
            return true
        }
        return false
    }


    render() {

        const { values,handleChange } = this.props;


        const validEmailClass = (
            <div className="form-group">
                <label>Email</label>
                <input type="text" value = {values.email} onChange = {handleChange('email')} className = "form-control" placeholder="Enter email" required />
            </div>
        )

        const invalidEmailClass = (
            <div className="form-group">
                <label>Email</label>
                <input type="text" value = {values.email} onChange = {handleChange('email')} className = "form-control is-invalid" placeholder="Enter email" required />
                <span class="error text-danger">Invalid email address</span>
            </div>
        )

        const validPhoneNoClass = (
            <div className="form-group">
                <label>Mobile Number</label>
                <input type="text" value = {values.phoneNo} onChange = {handleChange('phoneNo')} className="form-control" placeholder="Enter mobile number" required />
            </div>
        )

        const invalidPhoneNoClass = (
            <div className="form-group">
                <label>Mobile Number</label>
                <input type="text" value = {values.phoneNo} onChange = {handleChange('phoneNo')} className="form-control is-invalid" placeholder="Enter mobile number" required />
                <span class="error text-danger">Invalid phone number</span>
            </div>
        )

        return (
            <div className='card'>
                <form onSubmit = {this.continue}>
                    <h3>Sign Up</h3>

                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text"  value = {values.firstName} onChange = {handleChange('firstName')} className="form-control" placeholder="Enter first name" required />
                    </div>

                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" value = {values.lastName} onChange = {handleChange('lastName')} className="form-control" placeholder="Enter last name" required />
                    </div>

                    {this.state.validEmail? validEmailClass : invalidEmailClass}

                    {this.state.validPhoneNo? validPhoneNoClass : invalidPhoneNoClass}

                    <button type="submit" className="btn btn-success btn-block">Continue</button>
                    <br></br>
                    <p className="login text-right">Already have an account ? <a href="#">Login Here!</a></p>

                </form>
            </div>
        );
    }
}

export default FormPersonalDetails;