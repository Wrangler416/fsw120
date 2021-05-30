import React from "react"
import Squares from "./Squares"

class DJ extends React.Component {
    constructor(props){
        super(props)
            this.state  =  {
                box: 1,
                colorArray: ["white", "black", "red", "blue"],
                colors: ["white", "white", "white"]
            }
    }


    handleClick = (event)=> {
            let setColors
            this.setState(prevState => {
               if(prevState.colors[0]!=="white"){
                   setColors = ["white", "white", "white", "white"]
               }
               else if(prevState.colors[0]=="white"){
                   setColors = ["black", "black", "black", "black"]
               }
               return {
                   colors: setColors
               }
            })

        }

handleClickParty = ()=> {
    let setColors
    this.setState((prevState) => {
        setColors = ["purple", "purple", prevState.colors[2], prevState.colors[3]]
        return 
    })
}

render() {
        return (
            <div className="page">

                    <div >
                    <button className="box1" onClick={() => this.handleClick()}>Small Time DJ</button>
                    </div>

                    <div >
                    <button className="box2" onClick={() => this.handleClick()}>Party DJ</button>
                    </div>

                    <div >
                    <button className="box3" onClick={() => this.handleClick()}>Professional DJ</button>
                    </div>

                    <div >
                    <button className="box4" onClick={() => this.handleClick()}>Big Time DJ</button>
                    </div>

            </div>
        )
    }
}
export default DJ