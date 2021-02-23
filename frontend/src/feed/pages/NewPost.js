import React, { useEffect } from 'react';

import './Newpost.css'
import CameraSVG from '../../feed/components/CameraSVG';
import Card from '../../shared/components/UI/Card'
import Postform from '../../shared/components/DynamicForm/Postform'

const Newpost = () => {

    useEffect(() => {
        setTimeout(() => {
            document.querySelector(".post-anim").classList.add("post-anim-vis");
        }, 100);
    });

    return <div className = "post-anim">
        <div className = "svg-space">
            <CameraSVG />
        </div>
        <div style = {{paddingLeft : '3%', width : '40%'}}>
            <Card style = {{borderRadius : '15px'}}>
                <Postform />
            </Card>
        </div>
    </div>;
}

export default Newpost;