import React from "react"

function Site (props) {

    return (
        <div className="blogPost">
           
           <h1>{props.title}</h1>
           <h2>{props.subTitle}</h2>
           <h2>{props.author}</h2>
           <h2>{props.date}</h2>

        
       </div>

    )
}
export default Site
