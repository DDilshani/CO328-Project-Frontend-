import axios from 'axios'

export const register = newCustomer => {
  return axios
    .post('customers/register', {
      firstName: newCustomer.firstName,
      lastName: newCustomer.lastName,
      phoneNo: newCustomer.phoneNo,
      email: newCustomer.email,
      address1: newCustomer.address1,
      address2: newCustomer.address2,
      city: newCustomer.city,
      regDate: newCustomer.regDate,
      password: newCustomer.password,
      customerType: newCustomer.customerType,
    })
    .then(response => {
      console.log('Registered')
    })
}

export const login = newCustomer => {
  return axios
    .post('customers/login', {
      phoneNo: newCustomer.phoneNo,
      password: newCustomer.password
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}
