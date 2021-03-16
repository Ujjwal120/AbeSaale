import React from 'react';

import UserItem from './UserItem';
import Card from "../../shared/components/UI/Card"

const UserList = (props) => {
    let style = {
        height : "700px"
    }

    if(props.items.length === 0) {
        return  <div style = {style}>
            <Card style = {{borderRadius : '15px'}}> 
                <h2> No Users found </h2>
            </Card>
        </div>;
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
            props.items.map( user => {
                return <UserItem key = {user.id} 
                    id = {user.id} 
                    image = {user.image}
                    name = {user.name}
                    postcount = {user.posts}
                />
            })
        }
    </div>;
}

export default UserList;