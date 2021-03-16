import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom'

import Backdrop from '../../shared/components/UI/Backdrop'
import Modal from '../../shared/components/UI/Modal'

const EachPost = (props) => {

    const [ModalState, setModalState] = useState(false);

    const OpenModal = () => {
        setModalState(true);
        document.body.classList.add("stop-scroll");
    }

    const CloseModal = () => {
        setModalState(false);
        document.body.classList.remove("stop-scroll");
    }

    return <React.Fragment>
        {ModalState && <Backdrop onClick = {CloseModal}/> }
        {ModalState && <Modal className = "modal-vis"> 
            <Link to = {`/feed/${props.id}`}>
                <svg height="2.1rem" viewBox="0 0 441 441.68327" width="2.1rem" xmlns="http://www.w3.org/2000/svg">
                    <path fill = "hsl(260, 2%, 70%)" d="m10.046875 403.5625-9.707031 38.121094 38.121094-9.703125c-5.671876-12.632813-15.785157-22.742188-28.414063-28.417969zm0 0"/>
                    <path fill = "hsl(260, 2%, 70%)" d="m125.421875 409.84375-93.230469-93.242188-18.179687 71.378907c18.203125 7.363281 32.636719 21.796875 40 40zm0 0"/>
                    <path fill = "hsl(260, 2%, 70%)" d="m420.964844 21.058594c-25.941406-25.886719-67.175782-28.1875-95.839844-5.351563l101.191406 101.199219c22.835938-28.664062 20.53125-69.902344-5.351562-95.847656zm0 0"/>
                    <path fill = "hsl(260, 2%, 70%)" d="m284.816406 55.402344 28.679688-28.679688 101.808594 101.804688-28.679688 28.679687zm0 0"/>
                    <path fill = "hsl(260, 2%, 70%)" d="m39.21875 301.007812 234.289062-234.289062 101.804688 101.804688-234.289062 234.289062zm0 0"/>
                </svg>
            </Link>
        </Modal> }

        <div className="card" onClick = {OpenModal}>
            {/* <div className = "parent">
                <div className = "child">
                    {props.address}
                </div>
                <div>{props.creatorId}</div>
            </div> */}
            <div className = "post-image">
                <img src = {props.image} alt = "what was that"/>
            </div>
            {/* <div className = "caption">
                {props.caption}
            </div> */}
        </div>
    </React.Fragment>;
}

export default EachPost;