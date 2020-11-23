import React from "react"
import {Link, Switch, Route} from "react-router-dom"
import {BrowserRouter} from "react-router-dom"
import Contact from "./Contact"
import About from "./About"
import Services from "./Services"

import "./plumb.css"

function Navbar() {
    return (
        <div>
        <div className="navbar">
            <BrowserRouter>
            <Link to="/">Contact</Link>
            <br></br>
            <Link to="./About">About</Link>
            <br></br>
            <Link to="./Services">Services</Link>

            <Switch>
                <Route exact path="/">
                    <Contact /> 
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/services">
                    <Services /> 
                </Route>
            </Switch>
          
            </BrowserRouter>
        </div>

    <div className="header">
        <h1>VI Plumbing</h1>
        </div>

        </div>
    )
}
export default Navbar
