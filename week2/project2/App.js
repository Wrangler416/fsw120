import React from "react"
import Vaca from "./Vaca"
import spotsData from "./spotsData"

import "./project2.css"

function App() {

        const vacationSpots = spotsData.map(vaca => <Vaca place={vaca.place} price={vaca.price} timeToGo={vaca.timeToGo} />)

        return (
            <div>
                <vacationSpots />

            </div>
        )
        
    }






