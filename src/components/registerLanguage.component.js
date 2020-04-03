import React, { Component } from "react";

export default class RegisterLanguage extends Component {
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
                            <input type="radio" value="sinhala" /> &nbsp;Sinhala<br/>
                            <input type="radio" value="english" /> &nbsp;English
                        </label>
                    </div>
                </div>

                <button type="next" className="btn btn-success btn-block">Next</button>

                <br></br>



            </form>
        );
    }
}