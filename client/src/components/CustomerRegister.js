import React, { Component } from 'react'
import { register } from './UserFunctions'
import { MemoryRouter as Router, withRouter } from 'react-router-dom'

class CustomerRegister extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fName: '',
      lName: '',
      phoneNo: '',
      address1: '',
      address2: '',
      city: '',
      regDate: this.formatDate(new Date().toLocaleString()),
      password: '',
      confirmPassword: '',
      customerType: this.props.customerType,
      submit: false,
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  emptyUserInput(inputValue) {
    let className = "w3-input ";
    if(inputValue.length === 0 && this.state.submit) {
      className += "w3-rightbar w3-border-red";
    }
    return className;
  }

  formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    this.setState({ submit: true });
    e.preventDefault()

    const customer = {
      fName: this.state.fName,
      lName: this.state.lName,
      phoneNo: this.state.phoneNo,
      address1: this.state.address1,
      address2: this.state.address2,
      city: this.state.city,
      regDate: this.state.regDate,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      customerType: this.state.customerType
    }

    let allowSubmit = true;
    for(let object in customer) {
      if(customer[object].length === 0){
        allowSubmit = false;
        break;
      }
    }
    if(allowSubmit){
      register(customer).then(res => {
        this.props.history.push(`/login`)
      })
    }
    else{
      //console.log('empty inputs');
    }
  }

  render() {
    return (
      <div className="w3-container w3-light-grey register-form form">
        <form noValidate onSubmit={this.onSubmit}>
          <h1>Register</h1>
          <div className = 'input-container'>
            <input
              type="text"
              className= {'name-input ' + this.emptyUserInput(this.state.fName)}
              name="fName"
              placeholder='first name'
              value={this.state.fName}
              onChange={this.onChange}
            />
            <input
              type="text"
              className={'name-input ' + this.emptyUserInput(this.state.lName)}
              name="lName"
              placeholder="last name"
              value={this.state.lName}
              onChange={this.onChange}
            />
            <input
              type="tel"
              className={this.emptyUserInput(this.state.phoneNo)}
              name="phoneNo"
              placeholder="phone number"
              value={this.state.phoneNo}
              onChange={this.onChange}
            />
            <input
              type="text"
              className={this.emptyUserInput(this.state.address1)}
              name="address1"
              placeholder="address 1"
              value={this.state.address1}
              onChange={this.onChange}
            />
            <input
              type="text"
              className={this.emptyUserInput(this.state.address2)}
              name="address2"
              placeholder="address 2"
              value={this.state.address2}
              onChange={this.onChange}
            />
            <input
              type="text"
              className={this.emptyUserInput(this.state.city)}
              name="city"
              placeholder="city"
              value={this.state.city}
              onChange={this.onChange}
            />
            <input
              type="password"
              className={this.emptyUserInput(this.state.password)}
              name="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.onChange}
            />
            <input
              type="password"
              className={this.emptyUserInput(this.state.confirmPassword)}
              name="confirmPassword"
              placeholder="confirm password"
              value={this.state.confirmPassword}
              onChange={this.onChange}
            />
        </div>
        <div className= 'button-container'>
          <button
            type="submit"
            className="w3-btn w3-blue"
          >
            Sign in
          </button>
        </div>
        </form>
      </div>
    )
  }
}
export default withRouter(CustomerRegister);
