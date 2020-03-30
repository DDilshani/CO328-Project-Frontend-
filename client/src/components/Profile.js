import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      fName: '',
      lName: '',
      phoneNo: '',
      address1: '',
      address2: '',
      city: '',
      regDate: '',
      customerType: '',
      errors: {}
    }
  }

  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    console.log(decoded);
    this.setState({
      fName: decoded.fName,
      lName: decoded.lName,
      phoneNo: decoded.phoneNo,
      address1: decoded.address1,
      address2: decoded.address2,
      city: decoded.city,
      regDate: decoded.regDate,
      customerType: decoded.customerType
    })
  }

  render() {
    return (
      <form className="w3-container w3-light-grey">
          <table>
            <tbody>
              <tr>
                <td>First Name</td>
                <td>{this.state.fName}</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>{this.state.lName}</td>
              </tr>
              <tr>
                <td>Phone No</td>
                <td>{this.state.phoneNo}</td>
              </tr>
              <tr>
                <td>Address1</td>
                <td>{this.state.address1}</td>
              </tr>
              <tr>
                <td>Address2</td>
                <td>{this.state.address2}</td>
              </tr>
              <tr>
                <td>City</td>
                <td>{this.state.city}</td>
              </tr>
              <tr>
                <td>Registration Date</td>
                <td>{this.state.regDate}</td>
              </tr>
              <tr>
                <td>Customer Type</td>
                <td>{this.state.customerType}</td>
              </tr>
            </tbody>
          </table>
      </form>
    )
  }
}

export default Profile
