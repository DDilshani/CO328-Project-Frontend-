import React, { Component, useEffect } from 'react';

import FormPickupDetails from './PlacePickup/FormPickupDetails';
import FormPickupAgree from './PlacePickup/FormPickupAgree'
import Confirm from './PlacePickup/Confirm'
import { getUserData } from './UserFunctions';


class NewPickup extends Component {
   state = {
      step: 1,
      time:'',
      phoneNo:'',
      address:'',
   };

   nextStep = () => {
      const { step } = this.state;
      this.setState({
         step: step + 1
      });
   }

   prevStep = () => {
      const { step } = this.state;
      this.setState({
         step: step - 1
      });
   }

   handleChange = input => e => {
      this.setState({
         [input]: e.target.value
      });
   }

   handleUserData = () => {
      getUserData().then(res => {
         if (res.statusCode==='S2000') {
            this.setState({phoneNo: res.phone});
            let address = res.address.address1 + ' ' + res.address.address2 + ' ' + res.address.city;
            this.setState({address: address}); 
         }
      })
   }
   
   componentDidMount(){
      this.handleUserData();
   }
    
   
   render() {


      const { step } = this.state;
      const {time, phoneNo, address, date} = this.state;
      const values = {time, phoneNo, address, date};

      switch(step) {
         case 1:
         return (
            <FormPickupDetails
               nextStep = {this.nextStep}
               handleChange = {this.handleChange}
               values = {values}
               />
         )
         case 2:
         return (
            <FormPickupAgree
                nextStep = {this.nextStep}
                prevStep = {this.prevStep}
                />

         )
         case 3:
         return (
            <Confirm
                values = {values}
                prevStep = {this.prevStep}
                />
         );
      }
   }
}

export default NewPickup;
