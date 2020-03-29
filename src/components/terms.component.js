import React, { Component } from "react";

export default class Guide extends Component {
    render() {
        return (
            <form>
                <h3>Guide to Register</h3>

                <p className="forgot-password text-center">
                    Terms and conditions 
                </p>
                <br></br>

                <div className="form-group">
                    <br></br>
                    <br></br>
                    <div className="radio text-left">
                        <label>
                            <input type="radio" value="agree" /> &nbsp;Agree
                            <br></br>
                            <br></br>
                            <input type="radio" value="notagree" /> &nbsp;I'm not sure
                        </label>
                    </div>
                </div>

                <button type="back" className="btn btn-success btn-block">Place the pick up</button>



            </form>
        );
    }
}