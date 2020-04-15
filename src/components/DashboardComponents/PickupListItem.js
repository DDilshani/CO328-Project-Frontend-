import React, { Component } from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap';

import Feedback from './Pickup/Feedback';
import Delete from './Pickup/Delete';

var PropTypes = require('prop-types');

class PickupListItem extends Component {

   renderPickupState(s){
      switch(s) {
         case 'AWAITING':
         return <td className="await">Awaiting Pickup</td>;
         case 'COMPLETED':
         return <td className="complete">Completed</td>;
         case 'INCOMPLETED':
         return <td className="incomplete">Incompleted</td>;
      }
   }

   renderPickupOption(s, pickupId){
      if(this.props.pickupState==='AWAITING'){
         return <Delete pickupId={pickupId}/>
      }else{
         return <Feedback pickupId={pickupId}></Feedback>
      }
   }
   render() {
      const pickupId = this.props.pickupId;
      const pickupTime = this.props.pickupTime;
      const pickupDate = this.props.pickupDate;

      const pickupState = this.props.pickupState;

      return (
         <tr>
         {this.renderPickupState(pickupState)}
         <td><b>{pickupDate}</b><br/><small>{pickupTime}</small></td>
         <td>{this.renderPickupOption(pickupState,pickupId)} </td>
         </tr>
      );
   }
}


Feedback.propTypes = {
   pickupId: PropTypes.number.isRequired,
   pickupState: PropTypes.string.isRequired,
   pickupTime:PropTypes.string.isRequired,
   pickupDate:PropTypes.string.isRequired,
}

export default PickupListItem;
