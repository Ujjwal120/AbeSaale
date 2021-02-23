import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import './Modal.css'


const Modal = (props) => {

    useEffect(() => {
        const timer = setTimeout(()=>{
            document.querySelector(".shrink-it").classList.add("normal");
        }, 100);

        return () => clearTimeout(timer);
    })

    return ReactDOM.createPortal(<div className = {`${props.className}`}>
            {props.children}
    </div>, document.getElementById('Modal'));
}

export default Modal;