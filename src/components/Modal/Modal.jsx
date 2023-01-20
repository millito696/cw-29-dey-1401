import React from "react";
import { useState } from "react";
import './Modal.css'
function Modal(props) {
    const [classes, setClasses] = useState(props.className);
    const [winner, setWinner] = useState(props.winner);

    const modalHandler = (event) => {
        // console.log(event);
        setClasses('hidden');
        window.location.reload(false);
    }
    return <div className={classes + ' modal'}>
        <div>{winner + ' win the game'}</div>
        <button onClick={modalHandler}> try again</button>
    </div>
}
export default Modal;