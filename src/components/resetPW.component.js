import React, { Component } from "react";

export default class ResetPW extends Component {
    render() {
        return (
            <form>
                <h3>Reset your password</h3>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <label>Re-enter Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="reset" className="btn btn-success btn-block">Reset</button>
                
            </form>
        );
    }
}