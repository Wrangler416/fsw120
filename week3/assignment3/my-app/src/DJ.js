import React from "react"

class DJ extends React.Component {
    constructor(props){
        super(props)
            this.state  =  {
                box: 1,
                colorArray: ["white", "white", "white", "white"],
                colors: ["black", "purple", "blue"]
            }
            this.handleClick = this.handleClick.bind(this)
    }
        handleClick() {
            this.setState(prevState => ({
               
            }))

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