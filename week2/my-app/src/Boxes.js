import React from "react"

function Boxes(props) {

    return (

        <div className="box-stuff">
            <h1>Title: {props.box.title}</h1>
            <h2>Sub Title: {props.box.subtitle}</h2>
            <p>Background Color: {props.box.backgroundColor}</p>
            <p>Information: {props.box.information}</p>
        </div>
    )
}
export default Boxes



