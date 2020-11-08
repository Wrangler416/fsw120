import React from "react"
import Heros from "./Heros"
import data from "./data.JSON"
import "./hero.css"


// function clickEvent() {
//     console.log("it worked")
// }

// class App extends React.Component {

//     render() {

//         const info = data.map(heros => <Heros key={heros.id} name={heros.name} show={heros.show} catchPhrase={heros.catchPhrase} imageName={heros.imageName}/>)

//         return ( 

//             {info}
//         )
//     }
// }

function App () {

    const info = data.map(heros => <Heros key={heros.id} name={heros.name} show={heros.show} catchPhrase={heros.catchPhrase} imageName={heros.imageName}/>)

      return (

          {info}

      )
}

export default App


