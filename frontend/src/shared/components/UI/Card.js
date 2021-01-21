import React from 'react'

import './Card.css'

const Card = (props) => {
    return <div className = "lagao-ise">
        <div className = "g-b">
            {props.children}
        </div>
    </div>
}

export default Card;