import React from 'react';
import ReactDOM from 'react-dom';

const Pick = (props) => {
    return ReactDOM.createPortal( 
        <div id = "hide" className = "hide-unhide">
            {props.children} 
        </div>, document.getElementById('Picker'));
}

export default Pick;