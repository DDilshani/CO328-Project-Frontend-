import React, { Component } from 'react'
import { login } from './UserFunctions'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      phoneNo: '',
      password: '',
      submit: false,
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    this.setState({ submit: true });
    e.preventDefault();

    const customer = {
      phoneNo: this.state.phoneNo,
      password: this.state.password
    }
    let allowSubmit = true;
    for(let object in customer) {
      if(customer[object].length === 0){
        allowSubmit = false;
        break;
      }
    }
    if(allowSubmit){
      login(customer).then(res => {
        if (res) {
          this.props.history.push(`/profile`);
        }
      })
    }
    else{
      console.log('empty inputs');
    }
  }

  emptyUserInput(inputValue) {
    let className = "w3-input ";
    if(inputValue.length === 0 && this.state.submit) {
      className += "w3-rightbar w3-border-red";
    }
    return className;
  }

  render() {
    return (
      <div className="w3-container w3-light-grey login-form form">
        <form noValidate onSubmit={this.onSubmit}>
          <h1>SIGN IN</h1>
            <div className = 'input-container'>
              <input
                type="tel"
                className= {this.emptyUserInput(this.state.phoneNo)}
                name="phoneNo"
                placeholder="Phone number"
                value={this.state.phoneNo}
                onChange={this.onChange}
              />
              <input
                type="password"
                className={this.emptyUserInput(this.state.password)}
                name="password"
                placeholder="Password"
                value={this.state.password}
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

export default Login
