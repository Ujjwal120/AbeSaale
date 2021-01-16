import React from 'react';
import './UserList.css';
import UserItem from './UserItem';

const UserList = (props) => {
    if(props.items.length === 0) {
        return  <div className = "center"> 
            <h2> No Users found </h2>
        </div>;
    }

    return <div className = "row remove-margin">
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