import React from "react"

function Spot(props) {
    return (
       <div className="places">
           
           <h1>Place: {props.place}</h1>
           <h2>Price in USD: {props.price}</h2>
           <h2>When to Visit: {props.timeToGo}</h2>
        
       </div>
    )
}

export default Spot 

