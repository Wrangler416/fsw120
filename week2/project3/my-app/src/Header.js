import React from "react"
import Navbar from "./Navbar"

function Header() {
    return (

        <header>
            <div className="head">
                <Navbar />
                <h1 style={{fontSize: 70 }}>Clean Blog</h1>
                <h2>A Blog Theme by Start Bootstrap </h2>
            </div>
        </header>

    )
}
export default Header