import React, { Component } from 'react'
import { getUserData } from './UserFunctions'
import Table from 'react-bootstrap/Table'
import { Form } from 'react-bootstrap';

class AccountDetails extends Component {


    state = {
        step: 1,
        first_name: '',
        last_name: '',
        address1:'',
        address2:'',
        city: '',
        phoneNo:'',
        email: '',
        municipalCouncil: '',
        displayRow : 0,
    };

    handleChange = input => e => {
        this.setState({
           [input]: e.target.value
        });
     }


   handleUserData = () => {
        getUserData().then(res => {
            if (res.statusCode==='S2000') {
                this.setState({first_name: res.first_name});
                this.setState({last_name: res.last_name});
                this.setState({phoneNo: res.phone});
                this.setState({email: res.email});
                this.setState({address1: res.address.address1});
                this.setState({address2: res.address.address2});
                this.setState({city: res.address.city});
                this.setState({municipalCouncil: res.address.municipalCouncil});
            }
        })
    }

    componentDidMount(){
        this.handleUserData();
    }
    displayRow = row => {
        this.setState({displayRow: row});
    }


    render() {

        const { first_name,last_name, phoneNo, email, municipalCouncil, displayRow,address1,address2,city} = this.state;
        const full_name = first_name + ' ' + last_name;
        const address = address1+ ' ' + address2+' ' + city;

        const updateName = (
            <tr className = "hidden_rows">
                <td></td>
                <td>
                <Form.Group >
                     <Form.Label>First Name</Form.Label>
                     <Form.Control className = "input" type="text"  value = {first_name} onChange = {this.handleChange('first_name')} placeholder={first_name} required/>
                  </Form.Group>
                  <Form.Group >
                     <Form.Label>Last Name</Form.Label>
                     <Form.Control className = "input" type="text"  value = {last_name} onChange = {this.handleChange('last_name')} placeholder={last_name} required/>
                  </Form.Group>
                </td>
                <td></td>
            </tr>
        )

        const updataAddress = (
            <tr className = "hidden_rows">
                <td></td>
                <td>
                <Form.Group >
                     <Form.Label>Address 1</Form.Label>
                     <Form.Control className = "input" type="text"  value = {address1} onChange = {this.handleChange('address1')} placeholder={address1} required/>
                  </Form.Group>
                  <Form.Group >
                     <Form.Label>Address 2</Form.Label>
                     <Form.Control className = "input" type="text"  value = {address2} onChange = {this.handleChange('address2')} placeholder={address2} required/>
                  </Form.Group>
                  <Form.Group >
                     <Form.Label>City</Form.Label>
                     <Form.Control className = "input" type="text"  value = {city} onChange = {this.handleChange('city')} placeholder={city} required/>
                  </Form.Group>
                </td>
                <td></td>
            </tr>
        )
        const updateMunicipal = (
            <tr className = "hidden_rows">
                <td></td>
                <td>
                <Form.Group>
                    <Form.Label>Municipal Council</Form.Label>
                        <Form.Control as="select" value = {municipalCouncil} onChange = {this.handleChange('municipalCouncil')} required>
                            <option>Colombo</option>
                            <option>Kandy</option>
                            <option>Bandarawela</option>
                        </Form.Control>
                    </Form.Group>
                </td>
                <td></td>
            </tr>
        )


        return (

                <Table striped borderless hover>
                <div className="table-header">
                    <h3>Account Details</h3>
                </div>
                <tbody>
                    <tr>
                        <td>Name: </td>
                        <td>{full_name}</td>
                        <td><a href='#' onClick={ () => this.displayRow(1) }>Edit</a></td>
                    </tr>
                    {(displayRow == 1)? updateName : null}
                    <tr>
                        <td>email: </td>
                        <td>{email}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Mobile No: </td>
                        <td>{phoneNo}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Address: </td>
                        <td>{address}</td>
                        <td><a href='#' onClick={ () => this.displayRow(2) }>Edit</a></td>
                    </tr>
                    {(displayRow == 2)? updataAddress : null}
                    <tr>
                        <td>Municipal Council: </td>
                        <td>{municipalCouncil}</td>
                        <td><a href='#' onClick={ () => this.displayRow(3) }>Edit</a></td>
                    </tr>
                    {(displayRow == 3)? updateMunicipal : null}
                </tbody>
                </Table>
        );
    }
}

export default AccountDetails;
