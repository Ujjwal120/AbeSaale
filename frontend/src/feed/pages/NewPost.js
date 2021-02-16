import React, { Component }  from 'react';

import './Newpost.css'
import Card from '../../shared/components/UI/Card';

// import '../../shared/components/Scroll/Scroll.css'


class Newpost extends Component{
    render() {
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
}

export default Newpost;