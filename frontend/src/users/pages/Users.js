import React from 'react';
import UserList from '../components/UserList';
import i from '../../images/1.png';
import j from '../../images/2.png';

const Users = () => {
    let USERS = [
        {
            id : 'u1',
            name : 'Ujju',
            image : i,
            posts : 2
        },
        {
            id : 'u2',
            name : 'Vipul',
            image : j,
            posts : 3
        }
    ];

    return <UserList items = {USERS}/>;
}

export default Users;