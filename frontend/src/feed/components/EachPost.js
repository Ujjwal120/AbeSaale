import React, { useState } from 'react'
// import { Link } from 'react-router-dom'

import Backdrop from '../../shared/components/UI/Backdrop'
import Modal from '../../shared/components/UI/Modal'
import Card from '../../shared/components/UI/Card';
// import '../../shared/components/UI/Modal.css';

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
        {ModalState && <Modal className = "modal-vis"> <Card className = "shrink-it">HI there</Card> </Modal> }

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