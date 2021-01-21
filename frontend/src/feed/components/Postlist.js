import React, { useReducer } from 'react'

import './Postlist.css'
import Card from '../../shared/components/UI/Card'
import Postitem from "./Postitem"

const Postlist = (props) => {
    let style = {
        height : "700px"
    }

    if(props.items.length === 0) {
        return <div style = {style}>
            <Card>
                Bruh! your <i>Now What</i> game is wweak 
            </Card>
        </div>
    }

    style = {
        // .remove-margin {
        marginLeft: "0px",
        marginRight: "0px",
        textAlign: "center"
        // }
    }

    return <div style = {style} className = "row">
        {
            props.items.map(post => {
                return <Postitem
                    key = {post.id} 
                    id = {post.id}
                    image = {post.image}
                    caption = {post.caption}
                    coordinates = {post.location}
                    address = {post.address}
                    creatorId = {post.creator}
                />;
            })
        }
    </div>
}

export default Postlist;