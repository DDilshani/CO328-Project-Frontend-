import React, { Component } from "react";

export default class ResetPWSendCode extends Component {
    render() {
        return (
            <form>
                <h3>Reset your password</h3>

                <p className="forgot-password text-center">
                    Enter your accounts verified mobile number or email address and we will send you a reset code.
                </p>
                <br></br>

                <div className="form-group">
                    <label>Mobile number</label>
                    <input type="text" className="form-control" placeholder="Enter mobile number" />
                </div>

                <p className="forgot-password text-center">
                   <b>or</b></p>

                <br></br>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter your email" />
                </div>

                <br></br>
                <button type="next" className="btn btn-success btn-block">Next</button>



            </form>
        );
    }
}