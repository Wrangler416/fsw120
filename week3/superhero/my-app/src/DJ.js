import React from "react"
import Squares from "./Squares"

class DJ extends React.Component {
    constructor(props){
        super(props)
            this.state  =  {
                box: 1,
                colorArray: ["white", "white", "white", "white"],
                colors: ["black", "purple", "blue"]
            }
    }
        clickPurple() {
            this.setState(prevState => ({
               
            }))

        }

render() {
        return (
            <div className="page">

                    <div >
                    <button className="box1" onClick={() => this.clickPurple()}>Small Time DJ</button>
                    </div>

                    <div >
                    <button className="box2" onClick={() => this.clickPurple()}>Party DJ</button>
                    </div>

                    <div >
                    <button className="box3" onClick={() => this.clickPurple()}>Profesional DJ</button>
                    </div>

                    <div >
                    <button className="box4" onClick={() => this.clickPurple()}>Big Time DJ</button>
                    </div>

            </div>
        )
    }
}
export default DJ