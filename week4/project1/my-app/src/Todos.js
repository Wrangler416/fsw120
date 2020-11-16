import React from "react"

class Todos extends React.Component {
    constructor(props) {
      super(props);
      this.state= {
        todos:[]
      };
    }
    
    save() {
      var todos = [...this.state.todos];
      todos.push(this.newText.value);
      this.setState({todos})
    }

    render(){
        return(
            <div className="list">
              <input type="text" ref={(ip) => {this.newText = ip}}/>
              <button onClick={this.save.bind(this)}>Add to List
              </button>
              <ol>
                {this.state.todos.map(function(todo) {
                      return <li>{todo}</li>
                 })}
                
              </ol>
            </div>
        )
    }
}

export default Todos