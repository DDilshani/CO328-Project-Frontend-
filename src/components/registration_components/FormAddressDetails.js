import React, { Component } from "react";

export class FormAddressDetails extends Component {

    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    }

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }


    render() {

        const { values,handleChange } = this.props;

        return (
            
            <div className='card'>

                <form onSubmit = {this.continue}>
                <div className = 'header'>
                        <h3>Sign Up</h3>
                    </div>
                    <div className="form-group">
                        <label>Address 1</label>
                        <input type="text"  value = {values.address1} onChange = {handleChange('address1')} className="form-control" placeholder="address 1" required />
                    </div>

                    <div className="form-group">
                        <label>Address 2</label>
                        <input type="text" value = {values.address2} onChange = {handleChange('address2')} className="form-control" placeholder="address 2" required />
                    </div>

                    <div className="form-group">
                        <label>City</label>
                        <input type="text" value = {values.city} onChange = {handleChange('city')} className="form-control" placeholder="City" required />
                    </div>

                    <button type="submit" className="btn btn-success btn-block">Continue</button>
                    <button onClick = {this.back} className="btn btn-light btn-block">Back</button>

                    <br></br>
                    <p className="login text-right">Already have an account ? <a href="#">Login Here!</a></p>

                </form>
            </div>
        );
    }
}

export default FormAddressDetails;