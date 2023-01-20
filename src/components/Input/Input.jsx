import React from "react";
import { useState } from "react";
import { useRef } from "react";
import './Input.css'

let sign = 'cross';
function InputModal(props) {
    let classes = props.classes;
    let selectOption = useRef();
    const [firstPlayerName, setfirstPlayerName] = useState('');
    const [secondPlayerName, setSecondPlayerName] = useState('');
    const selectChangehandler = (e) => {
        // console.log(selectOption.current.value);
        sign = selectOption.current.value;
    }
    const firstNameChangeHandler = (e) => {
        setfirstPlayerName(e.target.value);
    }
    const secondNameChangeHandler = (e) => {
        setSecondPlayerName(e.target.value);
    }
    const clickHandler = (e) => {
        props.playersInfo({ firstPlayer: firstPlayerName, secondPlayer: secondPlayerName, firstPlayerSign: sign })
    }
    return <>
        <div className={classes + ' modal-input'}>
            <label htmlFor="first-input">Insert name of player 1</label>
            <input onChange={firstNameChangeHandler} id="first-input" type='text' value={firstPlayerName} />
            <select onChange={selectChangehandler} ref={selectOption}>
                <option value='cross'>X</option>
                <option value='circle'>O</option>
                {/* {console.log(selectOption)} */}
            </select>
            <label htmlFor="second-input">Insert name of player 2</label>
            <input onChange={secondNameChangeHandler} id="second-input" type='text' value={secondPlayerName} />
            <button onClick={clickHandler}>let's play</button>
        </div>
    </>
}
export default InputModal;