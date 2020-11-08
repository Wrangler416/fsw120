import React from "react"

class DiceBox extends React.Component {

    constructor(){
        super()
        this.state = {
            num1: 0,
            num2: 0,
            num3: 0,
            num4: 0,
            num5: 0
        }
        this.clickEvent = this.clickEvent.bind(this)
    }

        clickEvent() {

            this.setState(prevState => {
                return {
                    num1: prevState.num1 + Math.floor(Math.random() * 3),
                    num2: prevState.num1 + Math.floor(Math.random() * 3),
                    num3: prevState.num1 + Math.floor(Math.random() * 3),
                    num4: prevState.num1 + Math.floor(Math.random() * 3),
                    num5: prevState.num1 + Math.floor(Math.random() * 3),
                    num6: prevState.num1 + Math.floor(Math.random() * 3)
                }
            })
        }

    render () {
        return (
            <div>
                <h2>{this.state.num1}</h2>
                <h2>{this.state.num2}</h2>
                <h2>{this.state.num3}</h2>
                <h2>{this.state.num4}</h2>
                <h2>{this.state.num5}</h2>
                <h2>{this.state.num6}</h2>
                <button onClick={this.clickEvent}>Click Me</button>
            </div>
        )
    }
}

export default DiceBox