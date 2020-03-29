import React, { Component } from "react";

export default class RegisterSubscription extends Component {
    render() {
        return (
            <form>
                <h3>Register</h3>

                <br></br>
                <div className="form-group">
                    <label>Select a subscription plan</label>
                    <br></br>
                    
                    <input type="plan" className="form-control" placeholder="Enter your subscription plan" />
                </div>

                <button type="next" className="btn btn-success btn-block">Next</button>



            </form>
        );
    }
}