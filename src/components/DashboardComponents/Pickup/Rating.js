import React, { useState } from 'react';
import Star from 'react-icons/lib/fa/star';
const Rating = () => {
   const [rating, setRating] = useState(null);
   const [hover, setHover] = useState(null);

   return (
      <div>{[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;

            return (
               <label>
                  <input
                     type="radio"
                     name="rating"
                     value={ratingValue}
                     onClick={() => setRating(ratingValue)}
                     />

                  <Star
                     className="star"
                     color={ratingValue <= rating ? "#ffc107" : "e4e5e9"}
                     onMouseEnter={() => setHover(ratingValue)}
                     onMouseLeave={() => setHover(null)}
                     size={20}
                     />
               </label>
            )
         })}
      </div>
   )
}
export default Rating;
