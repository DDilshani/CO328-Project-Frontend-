import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Register extends Component {
   
    
    render() {
        return (
            <form>
                <h3>Register</h3>

                <br></br>
                <div className="form-group">
                    <label>Select a language</label>
                    <br></br>
                    <br></br>
                    <div className="radio">
                        <label>
                            <input type="radio" value="sinhala" /> &nbsp;Sinhala
                            <br></br>
                            <br></br>
                            <input type="radio" value="english" /> &nbsp;English
                        </label>
                    </div>
                </div>

                <Link to="/subscription" className="btn btn-success btn-block">Next</Link>
                <p className="forgot-password text-right">
                    Already registered <a href="/login">sign in?</a>
                </p>
                <br></br>



            </form>
        );
    }
}