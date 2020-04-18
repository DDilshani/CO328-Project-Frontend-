import React, { Component } from 'react';

import FormPickupDetails from './../dashboard_components/PlacePickup/FormPickupDetails';
import FormPickupAgree from './../dashboard_components/PlacePickup/FormPickupAgree'
import Confirm from './../dashboard_components/PlacePickup/Confirm'

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

   render() {

      const { step } = this.state;
      const {time, phoneNo, address} = this.state;
      const values = {time, phoneNo, address};

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
