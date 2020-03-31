import React, { Component } from "react";
import { login } from './registration_components/UserFunctions';

export default class Login extends Component {

    state = { 
        phoneNo: '',
        password: '',
        validInput: true,
        rememberMe: false,
    }

    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        });

    }

    continue = e => {
        e.preventDefault();

        const {phoneNo, password, rememberMe } = this.state;
        const customer = {
            phoneNo: phoneNo,
            password: password
        }
        login({customer,rememberMe}).then(res => {
            if (res) {
                this.setState({validInput: true});
                //window.location.href = '/';
            }
            else{
                this.setState({validInput: false});
            }
        })
    }

    radioButtonChange = e => {
        console.log('Radio button Changed: '+ e.target.checked);
        if(e.target.checked){
            this.setState({ rememberMe: true });
        }
        else{
            this.setState({ rememberMe: false });
        }
    }

    render() {
        const values = this.state; 

        const alertMsg = (
            <div class="alert alert-danger" role="alert">
            Invalid mobile number or password!
            </div>
        )

        return (
            <form onSubmit = {this.continue}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Mobile number</label>
                    <input type="text"  value = {values.phoneNo} onChange = {this.handleChange('phoneNo')} className="form-control" placeholder="Enter mobile number" required />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" value = {values.password} onChange = {this.handleChange('password')} className="form-control" placeholder="Enter password" required />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" onChange = {this.radioButtonChange} className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                {values.validInput? null : alertMsg}
                <button type="submit" className="btn btn-success btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>

                <br></br>
                

                <p className="register text-right">
                    New to Zero Trash ? <a href="#">Register Here!</a>
                </p>

            </form>
        );
    }
}