import React, { Component } from "react";

export default class IncorrectCode extends Component {
    render() {
        return (
            <form>
                <h3>Reset your password</h3>

                <p className="forgot-password text-center">
                    The code you entered is incorrect.
                </p>
                <br></br>

                
                <button type="back" className="btn btn-success btn-block">Back</button>



            </form>
        );
    }
}