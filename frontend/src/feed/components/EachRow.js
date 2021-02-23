import React from 'react'

import './EachRow.css'
import EachPost from './EachPost'

const EachRow = (props) => {
    return <div className = "con">
        {
            props.row.map(post => {
                return <EachPost 
                    key = {post.ind} 
                    id = {post.id}
                    image = {post.image}
                    caption = {post.caption}
                    coordinates = {post.location}
                    address = {post.address}
                    creatorId = {post.creator}
                    ind = {post.ind}
                />
            })
        }
    </div>;
}

export default EachRow;