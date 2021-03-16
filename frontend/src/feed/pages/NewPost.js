import React, { useState, useEffect, useRef} from 'react';

import './Newpost.css'
import CameraSVG from '../../feed/components/CameraSVG';
import Card from '../../shared/components/UI/Card'
import Postform from '../../shared/components/DynamicForm/Postform'

const Newpost = () => {

    let src = useRef('');

    const [postState, setpostState] = useState(false);

    const isready = (loaded, img_src) => {
        setpostState(loaded);
        src.current = img_src;
    }

    useEffect(() => {
        document.querySelector(".post-anim").classList.add("post-anim-vis");
    }, []);

    return <div className = "post-anim">
        <div className = "svg-space">
            <CameraSVG onPost = {isready} imageEditor = {true} show = {false}/>
        </div>
        <div style = {{paddingLeft : '3%', width : '40%'}}>
            <Card style = {{borderRadius : '15px'}}>
                <Postform active = {postState} src = {src.current} />
            </Card>
        </div>
    </div>;
}

export default Newpost;