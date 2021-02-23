import React from 'react';

import Input from './Input';
import './Postform.css'

const Postform = () => {
    return <form className = "post-form" autoComplete = "off">
        <Input element = "input" type = "text" label = "Title" height = "2.5rem" width = "100%" id = "1st" color = "#E0F6FF"/>
    </form>;
}

export default Postform;