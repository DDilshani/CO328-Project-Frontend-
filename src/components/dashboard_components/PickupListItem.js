import React, { Component } from 'react'

import Feedback from './Pickup/Feedback';
import Delete from './Pickup/Delete';

var PropTypes = require('prop-types');

class PickupListItem extends Component {

   renderPickupState(s){
      switch(s) {
         case 'PENDING':
         return <td className="await">Awaiting Pickup</td>;
            case 'COMPLETED':
            return (<td className="complete">Completed</td>);
               case 'INCOMPLETED':
               return (<td className="incomplete">Incompleted</td>);
               }
            }

            renderPickupOption(s, pickupId, rating){
               if(this.props.pickupState==='PENDING'){
                  return <Delete pickupId={pickupId}/>
               }else if(rating==null){
                  return <Feedback pickupId={pickupId}></Feedback>
               }else{
                  return <p>Rating: {rating}</p>
               }
            }
            render() {
               const pickupId = this.props.pickupId;
               const pickupTime = this.props.pickupTime;
               const pickupDate = this.props.pickupDate;
               const pickupState = this.props.pickupState;
               const pickupRating = this.props.rating;

               return (
                  <tr>
                     {this.renderPickupState(pickupState)}
                     <td><b>{pickupDate}</b><br/><small>{pickupTime}</small></td>
                     <td>{this.renderPickupOption(pickupState,pickupId, pickupRating)} </td>
                  </tr>
               );
            }
         }

         Feedback.propTypes = {
            pickupId: PropTypes.number.isRequired,
            pickupId: PropTypes.string.isRequired,
            pickupState: PropTypes.string.isRequired,
            pickupTime:PropTypes.string.isRequired,
            pickupDate:PropTypes.string.isRequired,
         }

         export default PickupListItem;
