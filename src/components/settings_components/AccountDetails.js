import React, { Component } from 'react'
import { getUserData } from './UserFunctions'
import Table from 'react-bootstrap/Table'
import { Alert } from 'react-bootstrap';

class AccountDetails extends Component {


    state = {
        step: 1,
        name: '',
        phoneNo:'',
        email: '',
        address:'',
        municipalCouncil: '',
    };


   handleUserData = () => {
        getUserData().then(res => {
            if (res.statusCode==='S2000') {
                let name = res.first_name + ' ' + res.last_name;
                this.setState({name: name});
                this.setState({phoneNo: res.phone});
                this.setState({email: res.email});
                let address = res.address.address1 + ' ' + res.address.address2 + ' ' + res.address.city;
                this.setState({address: address});
                this.setState({municipalCouncil: res.address.municipalCouncil});
            }
        })
    }

    componentDidMount(){
        this.handleUserData();
    }
    handleClick(){
        console.log('hp')
    }

    render() {
        const { name, phoneNo, email, address, municipalCouncil } = this.state;
        return (

                <Table striped borderless hover>
                <div className="table-header">
                    <h3>Account Details</h3>
                </div>
                <tbody>
                    <tr>
                        <td>Name: </td>
                        <td>{name}</td>
                        <td><a href='#' onClick={this.handleClick}>Edit</a></td>
                    </tr>
                    <tr>
                        <td>email: </td>
                        <td>{email}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Mobile No: </td>
                        <td>{phoneNo}</td>
                        <td><a href='#' onClick={this.handleClick}>Edit</a></td>
                    </tr>
                    <tr>
                        <td>Address: </td>
                        <td>{address}</td>
                        <td><a href='#' onClick={this.handleClick}>Edit</a></td>
                    </tr>
                    <tr>
                        <td>Municipal Council: </td>
                        <td>{municipalCouncil}</td>
                        <td><a href='#' onClick={this.handleClick}>Edit</a></td>
                    </tr>
                </tbody>
                </Table>
        );
    }
}

export default AccountDetails;
