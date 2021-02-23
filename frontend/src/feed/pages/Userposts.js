import React from 'react'
import { useParams } from 'react-router-dom';

import FeedGroup from '../components/FeedGroup'

let POSTS = [
    {
        id : 'p1',
        image : `${process.env.PUBLIC_URL}/images/pizza.jpg`,
        caption : 'Margharita',
        address : 'Domino\'s',
        location : {
            lat : 28.8383372,
            lng : 78.2418124
        },
        creator : 'u1'
    },
    {
        id : 'p1',
        image : `${process.env.PUBLIC_URL}/images/pizza.jpg`,
        caption : 'Margharita',
        address : 'Domino\'s',
        location : {
            lat : 28.8383372,
            lng : 78.2418124
        },
        creator : 'u1'
    },
    {
        id : 'p1',
        image : `${process.env.PUBLIC_URL}/images/pizza.jpg`,
        caption : 'Margharita',
        address : 'Domino\'s',
        location : {
            lat : 28.8383372,
            lng : 78.2418124
        },
        creator : 'u1'
    },
    {
        id : 'p2',
        image : `${process.env.PUBLIC_URL}/images/pizza.jpg`,
        caption : 'Margharita',
        address : 'Domino\'s',
        location : {
            lat : 28.8383372,
            lng : 78.2418124
        },
        creator : 'u1'
    },
    {
        id : 'p3',
        image : `${process.env.PUBLIC_URL}/images/pizza.jpg`,
        caption : 'Margharita',
        address : 'Domino\'s',
        location : {
            lat : 28.8383372,
            lng : 78.2418124
        },
        creator : 'u2'
    }
];

const Userposts = () => {
    
    const userId = useParams().userId;
    const loadposts = POSTS.filter(post => post.creator === userId);
    var i = 0;
    loadposts.forEach( post => {
        post['ind'] = i;
        i++;
    });
    
    return <FeedGroup items = {loadposts} />;
}

export default Userposts;