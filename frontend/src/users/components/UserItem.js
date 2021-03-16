import React from 'react';
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

    const style = { color : 'aliceblue' }

    return (
        <div className = "col-md-4 user-item hover03" >
        <Link to = {`/${props.id}/feed`} >
            <div className = "ye">
                <div className = "inner-div">
                    <div className = "isko-bhi">
                        <figure>
                            <img src = {process.env.PUBLIC_URL + props.image} alt = {props.name} style = {{borderRadius : '100%', border : '1.6px solid aliceblue'}}/>
                        </figure>   
                        <div style = {style}> {props.postcount} </div>
                        <div style = {style}> {props.name} </div>
                    </div>
                </div>
            </div>
            </Link>
        </div>
    );
}

export default UserItem;