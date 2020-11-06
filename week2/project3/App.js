import React from "react"
import Site from "./Site"
import siteData from "./siteData"
import "./project3.css"

function App () {

    const blogPost = siteData.map(site => <Site key={site.id} title={site.title} subtitle={site.subTitle} author={site.author} date={site.date} /> ) 

    return (

        {blogPost}

    )
}

export default App 

