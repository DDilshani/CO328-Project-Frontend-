import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Fillup extends Component {
    
    render() {
        return (
            <form>
                <h3>Sign Up</h3>
                <div className="form-group">
                    <label>Address</label>
                    <input type="text" className="form-control" placeholder="Enter address" />
                </div>

                <div className="form-group">
                    <label>Mobile Number</label>
                    <input type="text" className="form-control" placeholder="Enter mobile number" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <label>Re-enter Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <Link to="/guide" className="btn btn-success btn-block">Sign up</Link>
            </form>
        );
    }
}