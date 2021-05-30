import React from "react"
import Spot from "./Spot"
import spotsData from "./spotsData"
import "./project2.css"

function App() {

    const vacaComponents = spotsData.map(spot => <Spot 
        key={spot.id} 
        place={spot.place} 
        price={spot.price} 
        timeToGo={spot.timeToGo} />)

        return (
            <div>
                
                {vacaComponents}
                
            </div>
        )
    }

export default App 






