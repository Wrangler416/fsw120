import React from "react"

function Site(props) {

    return (

        <div className="post">
           
           <h2 className="title" style={{fontSize: 30 }}>{props.title}</h2>
           <h2 className="subTitle"style={{fontSize: 15 }}>{props.subTitle}</h2>
           <h2 className="authorDate"style={{fontSize: 10 }}>Posted by {props.author}</h2>
           <h2 className="authorDate"style={{fontSize: 10 }}>on {props.date}</h2>

       </div>

    )
}
export default Site
