import React, { useEffect, useState, useReducer } from 'react';
import { useParams } from 'react-router-dom'; 

import Card from '../../shared/components/UI/Card';
import './Newpost.css';
import Postform from '../../shared/components/DynamicForm/Postform';
import CameraSVG from '../../feed/components/CameraSVG';
import Loading from '../../shared/components/UI/Loading/Loading'

let POSTS = [
    {
        id : 'p1',
        image : `${process.env.PUBLIC_URL}/images/pizza.jpg`,
        caption : 'Margharita 1',
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
        caption : 'Margharita 2',
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
        caption : 'Margharita 3',
        address : 'Domino\'s',
        location : {
            lat : 28.8383372,
            lng : 78.2418124
        },
        creator : 'u1'
    },
    {
        id : 'p4',
        image : `${process.env.PUBLIC_URL}/images/pizza.jpg`,
        caption : 'Margharita 4',
        address : 'Domino\'s',
        location : {
            lat : 28.8383372,
            lng : 78.2418124
        },
        creator : 'u1'
    }
];


const formReducer = (state, action) => {
    switch(action.type) {
        case 'SET_DATA' : 
            return {
                isPostactive : true,
                src : action.src,
                caption : action.caption,
                address : action.address
            };
        default : 
         return state;
    }
}

const Updatepost = () => {

    const postId = useParams().postId;

    const [isLoading, setLoading] = useState(true);

    const [formState, dispatch] = useReducer(formReducer, {
        isPostactive : false,
        src : '',
        caption : '',
        address : '',
    });

    const setFormData = (src, caption, address) => {
        dispatch({
            type : 'SET_DATA',
            src : src,
            caption : caption,
            address : address
        })
    }

    const identifiedPost = POSTS.find((p) => p.id === postId); 

    useEffect(() => {
        if(identifiedPost) {
            setTimeout(() => {
                document.querySelector(".post-anim").classList.add("post-anim-vis");
            }, 100);
        }
    });   // check if animation is needed more than one mount


    useEffect(() => {
        if(identifiedPost) {
            setFormData(identifiedPost.image, identifiedPost.caption, identifiedPost.address);
        }
        setLoading(false);
    }, [identifiedPost])
    
    if(!identifiedPost) {
        return <div style = {{height : '700px'}}>
            <Card style = {{borderRadius : '15px'}}>
                404
            </Card>
        </div>
    }

    if(isLoading) {
        return <Loading />;
    }

    return <div className = "post-anim">
        <div className = "svg-space">
            <CameraSVG imageEditor = {false} src = {formState.src} show = {formState.isPostactive}/>
        </div>
        <div style = {{paddingLeft : '3%', width : '40%'}}>
            <Card style = {{borderRadius : '15px'}}>
                <Postform active = {formState.isPostactive} src = {formState.src} allValues = {{
                    caption : `${formState.caption}`,
                    address : `${formState.address}`
                }}/>
            </Card>
        </div>
    </div>;
}

export default Updatepost;