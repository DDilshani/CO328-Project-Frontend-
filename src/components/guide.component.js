import React, { Component } from "react";

export default class Guide extends Component {
    render() {
        return (
            <form>
                <h3>Guide to Register</h3>

                <p className="forgot-password text-center">
                    Register with the mobile platform as......... and we will send you a token. 
                </p>
                <br></br>

                <div className="form-group">
                    <label>Token</label>
                    <input type="text" className="form-control" placeholder="Enter the token" />
                </div>

                <button type="back" className="btn btn-success btn-block">Register</button>



            </form>
        );
    }
}