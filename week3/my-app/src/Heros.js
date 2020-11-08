import React from "react"

function Heros (props) {

    return (

        <div className="content">
           
           <h1>{props.name}</h1>
           <h2>{props.show}</h2>
           <h2>{props.catchPhrase}</h2>
           <h2>{props.imageName}</h2>

        
       </div>

    )
}

export default Heros