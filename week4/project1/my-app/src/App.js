import React from "react"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            input: "",
            todos: [],
            newItem: ""
        }
        this.clickEvent = this.clickEvent.bind(this)
        this.addItem = this.addItem.bind(this)
    }

clickEvent(event) {
    const {name, value} = event.target
    this.setState({
        [name]: value
    })
}

addItem(event) {
    event.preventDefault() 
    let todos = [...this.state.todos]; 
    todos.push(this.state.input)
    this.setState({todos})
}

render() {
    return (
        <div>
            <form>
                <input type="text" 
                       value={this.state.input}
                       placeholder="Add Input Here"
                       name="input"
                       onChange={this.clickEvent}
                /> 

                <h1>{this.state.input}</h1>

                <button 
                       name="todos" 
                       value={this.state.newItem} 
                       onClick={this.addItem}
                       placeholder="Add to List">
                        
                </button>

                <ol>
                        {this.state.todos.map(function(todos, index) {
                        return <li key={index}>{todos}</li>
                        })}
                </ol>

            </form>
        </div>
    )}
}
export default App 
