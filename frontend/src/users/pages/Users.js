import React from 'react';
import UserList from '../components/UserList';

// import AnimBack from '../../shared/components/AnimBack';

const Users = () => {
    let USERS = [
        {
            id : 'u1',
            name : 'Ujju',
            image : '/images/1.png',
            posts : 2
        },
        {
            id : 'u2',
            name : 'Vipul',
            image : '/images/2.png',
            posts : 3
        },
        {
            id : 'u3',
            name : 'Chaitu',
            image : '/images/3.png',
            posts : 3
        },
        {
            id : 'u4',
            name : 'Utsav',
            image : '/images/1.png',
            posts : 1 
        },
        {
            id : 'u5',
            name : 'Vipul',
            image : '/images/1.png',
            posts : 3
        },
        {
            id : 'u6',
            name : 'Chaitu',
            image : '/images/1.png',
            posts : 3
        }
        
    ];

    // USERS = [];

    return <UserList items = {USERS} />;
}

export default Users;