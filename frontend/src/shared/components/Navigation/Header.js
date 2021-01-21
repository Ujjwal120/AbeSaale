import React from 'react';

import './Header.css'

const Header = (props) => {
    return (
        <header className = "gradient-border"> {props.children} </header>
    );
}

export default Header;