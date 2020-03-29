import React, { Component } from "react";

export default class ResetCode extends Component {
    render() {
        return (
            <form>
                <h3>Reset your password</h3>

                <p className="forgot-password text-center">
                    Enter your verification code.
                </p>
                <br></br>

                <div className="form-group">
                    <label>Code</label>
                    <input type="text" className="form-control" placeholder="Enter the code" />
                </div>


                <br></br>
                <button type="next" className="btn btn-success btn-block">Next</button>



            </form>
        );
    }
}