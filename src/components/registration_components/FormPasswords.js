import React, { Component } from "react";

export class FormPasswords extends Component {

    state = { 
        validPassword: true,
        validConfirmPassword: true
    }

    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        });

    }

    continue = e => {
        e.preventDefault();

        const {password, confirmPassword} = this.props.values

        let allow = true;
        if(!this.validatePassword(password)) {
            this.setState({
                validPassword: false
            });
            allow = false;
        }
        else{
            this.setState({
                validPassword: true
            });
        }
        if(password != confirmPassword) {
            this.setState({
                validConfirmPassword: false
            });
            allow = false;
        }
        else{
            this.setState({
                validConfirmPassword: true
            });   
        }
        if(allow){
            this.props.nextStep();
        }
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    //password length must be [7,15], Must contain at least one numeric digit and a special character
    validatePassword(password) {

        let regPassword=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
        if(password.match(regPassword)) { 
            console.log('Correct'+ password)
            return true;
        }
        console.log('Incorrect' + password)
        return false;

    }

    render() {

        const { values,handleChange } = this.props;


        const validPasswordClass = (
            <div className="form-group">
                <label>Password</label>
                <input type="password" value = {values.password} onChange = {handleChange('password')} className = "form-control" placeholder="Enter password" required />
            </div>
        )

        const invalidPasswordClass = (
            <div className="form-group">
                <label>Password</label>
                <input type="password" value = {values.password} onChange = {handleChange('password')} className = "form-control is-invalid" placeholder="Enter password" required />
                <span class="error text-danger">Invalid Password</span>
            </div>
        )

        const validConfirmPasswordClass = (
            <div className="form-group">
                <label>Confirm password</label>
                <input type="password" value = {values.confirmPassword} onChange = {handleChange('confirmPassword')} className="form-control" placeholder="Confirm Password" required />
            </div>
        )


        const invalidConfirmPasswordClass = (
            <div className="form-group">
                <label>Confirm password</label>
                <input type="password" value = {values.confirmPassword} onChange = {handleChange('confirmPassword')} className="form-control is-invalid" placeholder="Confirm Password" required />
                <span class="error text-danger">Passwords do not match</span>
            </div>
        )

        return (

            <div className='card'>
            
                <form onSubmit = {this.continue}>
                    <h3>Sign Up</h3>

                    {this.state.validPassword? validPasswordClass : invalidPasswordClass}

                    {this.state.validConfirmPassword? validConfirmPasswordClass : invalidConfirmPasswordClass}

                    <button type="submit" className="btn btn-success btn-block">Continue</button>
                    <button onClick = {this.back} className="btn btn-light btn-block">Back</button>

                    <br></br>

                    <p className="login text-right">Already have an account ? <a href="#">Login Here!</a></p>

                </form>
            </div>
        );
    }
}

export default FormPasswords;