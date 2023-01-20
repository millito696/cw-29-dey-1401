import React, { useState } from 'react';
import './Button.css';
let gameArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let j = 0;
function Button(props) {
    function checkWinner(myArray) {
        if (myArray[0] + myArray[1] + myArray[2] === 3) {

            props.onEndGame('cross wins');
        } else if (myArray[0] + myArray[1] + myArray[2] === -3) {

            props.onEndGame('circle wins');

        }
        if (myArray[3] + myArray[4] + myArray[5] === 3) {

            props.onEndGame('cross wins');
        } else if (myArray[3] + myArray[4] + myArray[5] === -3) {

            props.onEndGame('circle wins');
        }
        if (myArray[6] + myArray[7] + myArray[8] === 3) {

            props.onEndGame('cross wins');
        } else if (myArray[6] + myArray[7] + myArray[8] === -3) {

            props.onEndGame('circle wins');
        }

        if (myArray[0] + myArray[3] + myArray[6] === 3) {

            props.onEndGame('cross wins');
        } else if (myArray[0] + myArray[3] + myArray[6] === -3) {

            props.onEndGame('circle wins');
        }

        if (myArray[1] + myArray[4] + myArray[7] === 3) {

            props.onEndGame('cross wins');
        } else if (myArray[1] + myArray[4] + myArray[7] === -3) {

            props.onEndGame('circle wins');
        }

        if (myArray[2] + myArray[5] + myArray[8] === 3) {

            props.onEndGame('cross wins');
        } else if (myArray[2] + myArray[5] + myArray[8] === -3) {

            props.onEndGame('circle wins');
        }

        if (myArray[0] + myArray[4] + myArray[8] === 3) {

            props.onEndGame('cross wins');
        } else if (myArray[0] + myArray[4] + myArray[8] === -3) {

            props.onEndGame('circle wins');
        }

        if (myArray[2] + myArray[4] + myArray[6] === 3) {

            props.onEndGame('cross wins');
        } else if (myArray[2] + myArray[4] + myArray[6] === -3) {

            props.onEndGame('circle wins');
        } else if (!gameArray.includes(0)) {
            props.onEndGame('No one');
        }
    }
    const [closeHandler, setCloseHandler] = useState(false);
    const [circleHandler, setCircleHandler] = useState(false);

    const clickHandler = (event) => {
        // console.log(event.target.id);
        const flag = event.target.getAttribute("myFlag");
        // console.log(flag)
        // console.log(i)
        if (j % 2 === 0 && flag !== null) {
            setCloseHandler(true);
            setCircleHandler(false);
            j++;
            gameArray[event.target.id - 1] = 1;
            // console.log(gameArray);
            checkWinner(gameArray);
        } else if (flag !== null && j % 2 === 1) {
            setCloseHandler(false);
            setCircleHandler(true);
            j++;
            gameArray[event.target.id - 1] = -1;
            // console.log(gameArray);
            checkWinner(gameArray);
        }
    }
    return (<>
        <div className='button-div' myflag='used' onClick={clickHandler} id={props.id}>
            {closeHandler && < div><i className='fa fa-close'>{props.children}</i></div>}
            {circleHandler && <div><i className='fa fa-circle-o'>{props.children}</i></div>}

        </div >
    </>)
}
export default Button;