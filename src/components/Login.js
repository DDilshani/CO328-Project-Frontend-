import React, { Component } from "react";
import { login } from './registration_components/UserFunctions';

class Login extends Component {

    state = { 
        username: '',
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

        const {username, password, rememberMe } = this.state;
        let customer = {};
        if(Number.isInteger(parseInt(username))){
            console.log('Number is integer')
            customer = {
                phoneNo: username,
                email: 'null',
                password: password
            }
        }
        else{
            console.log('Number is not integer')
            customer = {
                phoneNo: 'null',
                email: username,
                password: password
            }
        }
        login({customer,rememberMe}).then(res => {
            if (res) {
                this.setState({validInput: true});
                window.location.href = '/';
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
            <div class = 'card'>
                <form onSubmit = {this.continue}>
                    <h3>Sign In</h3>

                    <div className="form-group">
                        <label>Mobile number or Email</label>
                        <input type="text"  value = {values.username} onChange = {this.handleChange('username')} className="form-control" placeholder="Enter mobile number or email" required />
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
            </div>
        );
    }
}

export default Login;
