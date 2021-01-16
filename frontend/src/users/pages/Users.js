import React from 'react';
import UserList from '../components/UserList';
import i from '../../images/1.png';
import j from '../../images/2.png';
import k from '../../images/3.png';
// import AnimBack from '../../shared/components/AnimBack';

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
        },
        {
            id : 'u3',
            name : 'Chaitu',
            image : k,
            posts : 3
        },
        {
            id : 'u4',
            name : 'Utsav',
            image : i,
            posts : 1 
        },
        {
            id : 'u5',
            name : 'Vipul',
            image : j,
            posts : 3
        },
        {
            id : 'u6',
            name : 'Chaitu',
            image : k,
            posts : 3
        }
        
    ];

    return <UserList items = {USERS} />;
}

export default Users;