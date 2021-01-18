import React, {useState} from 'react';
import './UserItem.css';
import { Link } from 'react-router-dom';  // used in place of <a> tag for navigation

const UserItem = (props) => {
    // const [comp, setcomp] = useState({
    //     animationclass : true
    // });

    // const animHandler = () => {
    //     if(comp.animationclass) {
    //         document.body.classList.add('paused');
    //         setcomp((prevcomp) => {
    //             return prevcomp = {animationclass : false};
    //         })
    //     }
    //     else {
    //         document.body.classList.remove('paused');
    //         setcomp((prevcomp) => {
    //             return prevcomp = {animationclass : true};
    //         })
    //     }
    // }

    const style = { color : 'black' }

    return (
        <div className = "col-md-3 user-item hover03" >
            <div className = "ye">
                <div className = "inner-div">
                    <Link to = {`/${props.id}/places`} >
                        <div className = "image">
                            <figure>
                                <img src = {process.env.PUBLIC_URL + props.image} alt = {props.name} />
                            </figure>   
                            <div style = {style}> {props.postcount} </div>
                            <div style = {style}> {props.name} </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default UserItem;