import React from "react"
import Site from "./Site"
import siteData from "./siteData"

function BlogPost(props) {

    const blog = siteData.map(site => <Site key={site.id} title={site.title} subTitle={site.subTitle} author={site.author} date={site.date} /> ) 

    return (

        <div>
                {blog}
        </div>
    )
}

export default BlogPost