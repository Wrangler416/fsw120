import React from "react"
import "./badge.css"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            fName: "",
            lName: "",
            email: "",
            birthPlace: "",
            phone: "",
            favFood: "",
            textArea: "",
            badge: "",
            badges: []
        }
        this.change = this.change.bind(this)
        this.submit = this.submit.bind(this)
    }

change(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

submit(event) {
    event.preventDefault()
    let badges = [...this.state.badges]; 
    badges.push(this.state.fName)
    badges.push(this.state.lName)
    badges.push(this.state.email)
    badges.push(this.state.birthPlace)
    badges.push(this.state.phone)
    badges.push(this.state.favFood)
    badges.push(this.state.textArea)
    this.setState({badges})
}

    render() {
        return (
            <div>
                <form id="form" action="./badgesubmit" method="post">
                     <input 
                        type="text"
                        value={this.state.fName}
                        name="fName"
                        placeholder="First Name"
                        className="f"
                        onChange={this.change}
                        required
                    />
                    <input 
                        type="text"
                        value={this.state.lName}
                        name="lName"
                        placeholder="Last Name"
                        className="l"
                        onChange={this.change}

                        required
                    />
                    <br/>
                    <input 
                        type="text"
                        value={this.state.email}
                        name="email"
                        placeholder="Email"
                        className="e"
                        onChange={this.change}
                        required
                    />
                    <input 
                        type="text"
                        value={this.state.birthPlace}
                        name="birthPlace"
                        placeholder="Place of Birth"
                        className="b"
                        onChange={this.change}
                        required
                    />
                    <br/>
                    <input 
                        type="number"
                        value={this.state.phone}
                        name="phone"
                        placeholder="Phone Number"
                        className="p"
                        onChange={this.change}
                        required
                    />
                    <input 
                        type="text"
                        value={this.state.favFood}
                        name="favFood"
                        placeholder="Favorite Food"
                        classname="ff"
                        onChange={this.change}
                        required
                    />
                    <br/>
                    <textarea 
                        rows="15" 
                        cols="30"
                        type="textarea"
                        value={this.state.textArea}
                        name="textArea"
                        placeholder="Tell Us About Yourself"
                        className="a"
                        onChange={this.change}
                        required
                    />  
                    <br/>
                    <button 
                        type="submit"
                        name="submit"
                        value={this.state.badge}
                        onClick={this.submit}
                    >Submit
                    </button>

                </form>
                    <h2>Badge: </h2> 
                    <br></br>
                    <br></br>
                    <br></br>

                <div className="badgeContainer">

                    <div className="fn">
                        Name: {this.state.badges[0]} {this.state.badges[1]}
                    </div>

                    <div className="ph">
                        Phone: {this.state.badges[4]}
                    </div>

                    <div className="bp">
                        Birth Place: {this.state.badges[3]}
                    </div>

                    <div className="fav">
                        Favorite Food: {this.state.badges[5]}
                    </div>

                    <div className="em">
                        Email: {this.state.badges[2]}
                    </div>

                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                    <div className="text">
                     {this.state.badges[6]}
                    </div>

                </div>


                
            </div>
        )
    }

}

export default App 