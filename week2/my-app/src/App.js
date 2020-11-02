
import React from "react"

import Boxes from "./Boxes"

import "./project.css"

function App() {
    return (
        <div className="items">

            <div className="one">
            <Boxes
                box={{title: "Box 1", subtitle: "Blue", information: "Blah blah blah", backgroundColor: "blue"}}
            />
            </div>

            <div className="two">
            <Boxes
                box={{title: "Box 2", subtitle: "Green", backgroundColor: "green", information: "Blah blah blah"}}
            />
            </div>

            <div className="three">
            <Boxes 
                box={{title: "Box 3", subtitle: "Yellow", backgroundColor: "yellow", information: "Blah blah blah"}}
            />
            </div>

            <div className="four">
            <Boxes 
                box={{title: "Box 4", subtitle: "Red", backgroundColor: "red", information: "Blah blah blah"}}
            />
            </div>

            <div className="five">
            <Boxes 
                box={{title: "Box 5", subtitle: "Black", backgroundColor: "black", information: "Blah blah blah"}}
            />
            </div>

            <div className="six">
            <Boxes 
                box={{title: "Box 6", subtitle: "Orange", backgroundColor: "orange", information: "Blah blah blah"}}
            />
            </div>

            <div className="seven">
                <Boxes
                box={{title: "Box 7", subtitle: "Purple", backgroundColor: "purple", information: "Blah blah blah"}}
            />
            </div>
            
            <div className="eight">
            <Boxes 
                box={{title: "Box 8", subtitle: "White", backgroundColor: "white", information: "Blah blah blah"}}
            />
            </div>

            <div className="nine">
            <Boxes 
                box={{title: "Box 9", subtitle: "Teal", backgroundColor: "teal", information: "Blah blah blah"}}
            />
            </div>

            <div className="ten">
            <Boxes 
                box={{title: "Box 10", subtitle: "Brown", backgroundColor: "brown", information: "Blah blah blah"}}
            />
            </div>
        </div>
    )
}

export default App 
