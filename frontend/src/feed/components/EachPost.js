import React from 'react'
import { Link } from 'react-router-dom'

const EachPost = (props) => {

    // <Link to = {`/${props.creatorId}/feed/#${props.ind}`}>
    // </Link>

    return  <div className="card">
            <div className = "parent">
                <div className = "child">
                    {props.address}
                </div>
                <div>{props.creatorId}</div>
            </div>
            <div className = "post-image">
                <img src = {props.image} alt = "what was that"/>
            </div>
            <div className = "caption">
                {props.caption}
            </div>
        </div>;
}

export default EachPost;