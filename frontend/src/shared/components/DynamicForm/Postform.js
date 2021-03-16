import React, { useEffect, useState } from 'react';

import SvgInput from './SvgInput';
import './Postform.css'

const Postform = (props) => {

    const [width, setWidth] = useState(window.innerWidth);

    const UpdateInputElementWidth = () => {
        setWidth(window.innerWidth);
    }

    const SubmitHandler = (event) => {
        event.preventDefault();
        // props.src has image url
        // use documentgetElementid for value of input and textarea element
    }
      
    useEffect(() => {
        window.addEventListener("resize", UpdateInputElementWidth);
        return () => window.removeEventListener("resize", UpdateInputElementWidth);
    });

    return <form className = "post-form" autoComplete = "off" onSubmit = {SubmitHandler}>
        <SvgInput 
            type = "text" 
            label = "Caption" height = {3}
            width = "100%" id = "2nd" 
            color = "rgb(122, 193, 255)" 
            rows = {3}  
            value = {props.allValues ? props.allValues.caption : ''}
        />
        <SvgInput 
            element = "input" type = "text" 
            label = "Location" height = {3}
            width = "100%" id = "1st" 
            color = "rgb(122, 193, 255)" 
            rows = {1}  
            value = {props.allValues ? props.allValues.address : ''}
        />
        <button type = "submit" disabled = {!props.active} className = "but">
            <svg xmlns="http://www.w3.org/2000/svg" 
                width = "3rem" height = "3rem" viewBox="0 0 512.662 512.662">
                <g>
                    <path d="M505.021,5.868c-0.064-0.043-0.085-0.107-0.128-0.149c-0.128-0.107-0.256-0.128-0.384-0.235c-1.131-0.981-2.475-1.621-3.797-2.325c-0.427-0.213-0.747-0.576-1.195-0.768c-0.064-0.021-0.107-0.021-0.149-0.043c-0.469-0.192-0.853-0.533-1.323-0.704c-1.771-0.661-3.648-0.875-5.547-1.045c-0.576-0.043-1.131-0.299-1.707-0.299c-2.475-0.021-4.971,0.384-7.403,1.259L14.055,172.225c-7.445,2.709-12.779,9.323-13.867,17.173c-1.045,7.851,2.304,15.637,8.768,20.245l141.888,101.355l20.032,140.309c1.237,8.533,7.488,15.488,15.851,17.643c1.749,0.448,3.541,0.661,5.291,0.661c6.592,0,12.971-3.072,17.045-8.533l50.347-67.093l132.032,113.237c3.947,3.371,8.875,5.141,13.909,5.141c2.389,0,4.779-0.405,7.125-1.216c7.168-2.56,12.48-8.768,13.845-16.277l85.995-468.928C513.725,18.262,510.738,10.71,505.021,5.868z M240.125,348.396l-1.536,2.219l-32.747,43.669l-12.395-86.827l185.109-160.448L240.125,348.396z"/>
                </g>
            </svg>
        </button>
    </form>;
}

export default Postform;