import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Picker } from 'emoji-mart'

// import './Input.css';
import './Textarea.css'

const Input = (props) => {

    let rect = useRef(null), w = useRef(0), h = useRef(0), ele = useRef(null);
    const here_id = `my-svg-${props.id}`;

    const [value, setvalue] = useState(props.value);

    const yethafocus = () => {
        rect.current.setAttribute('style', `stroke : ${props.color}; stroke-width : 2px ; stroke-dasharray : ${2*(w.current+h.current)}; stroke-dashoffset : 0; transition : stroke-width 1s, stroke-dashoffset 1s, stroke-dasharray 1s`);
    };
    
    const yethablur = () => {
        rect.current.setAttribute('style', `stroke : ${props.color}; stroke-width : 5px; stroke-dasharray : ${w.current}, ${2*h.current+w.current}; stroke-dashoffset : ${-w.current-h.current}; transition : stroke-width 1s, stroke-dashoffset 1s, stroke-dasharray 1s`)
    };

    const toggleHandler = () => {
        let f = ele.current.contains('nah-down');
        if(f) ele.current.remove('nah-down');
        else ele.current.add('nah-down');
    };

    const onChangeHandler = (e) => {
      setvalue(e.target.value);
    }

    useEffect(() => {
        rect.current = document.getElementById(`${here_id}`);

        w.current = rect.current.width.baseVal.value;
        h.current = rect.current.height.baseVal.value;

        if((!(props.element === 'input')) && ele.current === null) {
            ele.current = document.getElementById('inside-picker').classList;
        }
    });

    const onEmojiClick = (emoji, event) => {
        // let msg = document.getElementById(`${props.id}`).value;
        let msg = value +''+ emoji.native;
        setvalue(msg);
    }

    return props.element === 'input' ? (
        <>
            <input 
                id={props.id} 
                type={props.type} 
                value = {value}
                onChange = {onChangeHandler}
                onBlur = {yethablur}
                onFocus = {yethafocus}
                style = {{ transform : `translateY(-${props.height}rem)`, height : `${props.height}rem`, outline : 'none'}} />

                <div className = "loco">
                    <a href = {`https://www.google.com/maps/search/?api=1&query=${value}`} target = "_blank" rel = "noreferrer">
                    <svg  
                        xmlns="http://www.w3.org/2000/svg" 
                        width="1.7rem" height="1.7rem" viewBox="0 0 513.597 513.597" >
                        <g>
                            <path d="M263.278,0.107C158.977-3.408,73.323,80.095,73.323,183.602c0,117.469,112.73,202.72,175.915,325.322
                                c3.208,6.225,12.169,6.233,15.388,0.009c57.16-110.317,154.854-184.291,172.959-290.569
                                C456.331,108.387,374.776,3.866,263.278,0.107z M256.923,279.773c-53.113,0-96.171-43.059-96.171-96.171
                                s43.059-96.171,96.171-96.171c53.113,0,96.172,43.059,96.172,96.171S310.036,279.773,256.923,279.773z" 
                            id="path3253"
                            strokeWidth = "0.383674" fill = "rgb(245, 71, 138)"/>
                        </g>
                    </svg>
                    </a>
                </div>
        </>
        ) : (
            <>
                <textarea 
                    id={props.id} 
                    rows={props.rows || 3} 
                    style = {{ top : `-${props.height}rem`, height : `${props.height}rem`, resize : 'none', outline : 'none'}}
                    value = {value}
                    onChange = {onChangeHandler}
                    onBlur = {yethablur}
                    onFocus = {yethafocus}
                />

               {ReactDOM.createPortal(
                <div id = "inside-picker" className = "move-up">
                    <Picker 
                        set = 'apple' 
                        title = '' 
                        style = {{position : 'absolute'}} 
                        color = 'rgb(245, 71, 138)' 
                        emoji = '' 
                        theme = 'dark'
                        onClick = {onEmojiClick}
                    />
                </div>
               , document.getElementById('Picker'))}
                
                <div className = 'emoji' onClick = {toggleHandler}>
                    <img src = {`${process.env.PUBLIC_URL}/images/emoji.png`} alt = "emoji" />
                </div>
            </>
        );
};

export default Input;