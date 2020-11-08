import React from "react"
import MoreData from "./data/data.json"

class Heros extends React.Component {
    render() {
        return (
            <div> 
                
                {MoreData.map((detail, index) => {
                    return <div> 
                        <h1 onClick={() => alert(detail.catchPhrase)}>{detail.name}</h1> 
                        <h2 onClick={() => alert(detail.catchPhrase)}>{detail.show}</h2>
                        <img alt="" src={detail.imageName} onClick={() => alert(detail.catchPhrase)}></img>
                        </div>
                })} 
           </div>
        )
    }
}

export default Heros


