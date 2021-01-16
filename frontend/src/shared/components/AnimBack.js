import React, {useState} from 'react';
import './AnimBack.css';

const AnimBack = (props) => {
    const [comp, setcomp] = useState({
        animationclass : 'apply'
    });

    const animHandler = () => {
        if(comp.animationclass === 'apply') {
            setcomp((prevcomp) => {
               return prevcomp = {animationclass : 'apply paused'};
            });
        }
        else {
            setcomp((prevcomp) => {
                return prevcomp = {animationclass : 'apply'};
            });
        }
    }

    return (
        <div className = {comp.animationclass} onClick = {animHandler}>
            {props.children}
        </div>
    );
}

export default AnimBack;