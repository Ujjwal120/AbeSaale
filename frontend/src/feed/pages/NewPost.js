import React  from 'react';

import './Newpost.css'
import Card from '../../shared/components/UI/Card';

const Newpost = (props) => {
    const style = {
        height : "700px"
    }

    return (
        <div style = {style}>
           <Card>
                <h1>Posted !</h1> 
           </Card> 
        </div>
    );
}

export default Newpost;