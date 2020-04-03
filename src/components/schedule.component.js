import React, { Component } from "react";
export default class Schedule extends Component {
    render() {
        return (
            <form>
                <h3>Schedule a pickup</h3>

                <div className="form-group">
                    <label>Schedule Date</label>
                    <input type="date" className="form-control" />
                </div>

                <div className="form-group">
                    <label>Location</label>
                    <input type="text" className="form-control" placeholder="Select Location" />
                </div>

                <div className="form-group">
                    <label>Provincial Council</label>
                    <select type="text" className="form-control" placeholder="Select Provincial Council" >
                        <option value="">Colombo</option>
                        <option value="">Dehiwala</option>
                        <option value="">Galkissa</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Contact Number</label>
                    <input type="text" className="form-control" placeholder="Contact number" />
                </div>

                <button type="back" className="btn btn-success btn-block">Pick Up</button>



            </form>
        );
    }
}

