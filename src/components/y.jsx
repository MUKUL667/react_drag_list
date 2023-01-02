import React, { useState } from 'react'
import { FaStar } from "react-icons/fa" 

function ToggleSwitch() {
  const [rating, setrating] = useState(null);
  const [Hover, setHover] = useState(null);
  return (
    <div>
      {
      [...Array(5)].map((star, i) => {
        const ratingvalue = i + 1;
        return (
        <label>
          <input type="radio" value={ratingvalue} onClick={()=>setrating(ratingvalue)} name="rating" />
          <FaStar className="star" size={100} color={ratingvalue <= (Hover || rating) ? "#FFFF00" : "#808080"} onMouseEnter={() => setHover(ratingvalue)} onMouseLeave={() => setHover(null)} /></label>
       );



      })
      }
      <p>th rating is {rating}</p>


    </div>
  )
}

export default ToggleSwitch