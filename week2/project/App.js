import React from "react"

import Boxes from "./Boxes"

function App() {
    return (
        <div className="items">

            <Boxes
                box={{title: "Box 1", subtitle: "Blue", backgroundColor: "blue", information: "Blah blah blah"}}
            />
            <Boxes
                box={{title: "Box 2", subtitle: "Green", backgroundColor: "green", information: "Blah blah blah"}}
            />
            <Boxes 
                box={{title: "Box 3", subtitle: "Yellow", backgroundColor: "yellow", information: "Blah blah blah"}}
            />
            <Boxes 
                box={{title: "Box 4", subtitle: "Red", backgroundColor: "red", information: "Blah blah blah"}}
            />
            <Boxes 
                box={{title: "Box 5", subtitle: "Black", backgroundColor: "black", information: "Blah blah blah"}}
            />
            <Boxes 
                box={{title: "Box 6", subtitle: "Orange", backgroundColor: "orange", information: "Blah blah blah"}}
            />
            <Boxes 
                box={{title: "Box 7", subtitle: "Purple", backgroundColor: "purple", information: "Blah blah blah"}}
            />
            <Boxes 
                box={{title: "Box 8", subtitle: "White", backgroundColor: "white", information: "Blah blah blah"}}
            />
            <Boxes 
                box={{title: "Box 9", subtitle: "Teal", backgroundColor: "teal", information: "Blah blah blah"}}
            />
            <Boxes 
                box={{title: "Box 10", subtitle: "Brown", backgroundColor: "brown", information: "Blah blah blah"}}
            />
        </div>
    )
}

export default App 
