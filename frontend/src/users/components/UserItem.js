import React from 'react';
import './UserItem.css';

const UserItem = (props) => {
    return (
        <div className = "col-md-4">
           <img src = {props.image} alt = {props.name} />
            {props.postcount}
        </div>
    );
}

export default UserItem;