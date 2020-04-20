import React, { Component } from 'react';
import BeautyStars from 'beauty-stars';

class Rating extends Component {
   state = { 
      value: 0 
   };

   render() {

      const { rating, handleChange}  = this.props;

     return (
       <BeautyStars
         value={rating}
         onChange = {handleChange('rating')}
       />
     );
   }

}
 
export default Rating;
