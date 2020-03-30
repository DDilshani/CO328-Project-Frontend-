import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Subscription extends Component {

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

                <Link to="/fillup" className="btn btn-success btn-block">Next</Link>

            </form>
        );
    }
}