import React, { useState } from 'react';
import { useEffect } from 'react';
import './Button.css';
let gameArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
// let j = JSON.parse(localStorage.getItem('playerStatus')).firstPlayerSign === 'cross' ? 0 : 1;

function Button(props) {
    // const [signArray, setSignArray] = useState([]);
    // const [counter, setCounter] = useState(0);
    useEffect(() => {
        // setSignArray([props.signIdentifier === 'cross' ? -1 : 1]);
        // props.signIdentifier === 'cross' ? setCounter(0) : setCounter(1);
        // console.log(signArray);
    }, []);

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
        // if (signArray[signArray.length - 1] === -1 && flag !== null) {
        //     setCloseHandler(true);
        //     setCircleHandler(false);
        //     setSignArray([...signArray, 1]);
        //     // setSignArray((prevSt) => {
        //     //     return [...prevSt, 1]
        //     // })
        //     gameArray[event.target.id - 1] = 1;
        //     checkWinner(gameArray);

        // } else if (signArray[signArray.length - 1] === 1 && flag !== null) {
        //     setCloseHandler(false);
        //     setCircleHandler(true);
        //     setSignArray([...signArray, -1]);
        //     // setSignArray((prevSt) => {
        //     //     return [...prevSt, -1]
        //     // })
        //     gameArray[event.target.id - 1] = -1;
        //     // console.log(gameArray);
        //     checkWinner(gameArray);
        //     // console.log([...signArray, 1]);
        // }




        if (props.counter % 2 === 0 && flag !== null) {
            setCloseHandler(true);
            setCircleHandler(false);
            gameArray[event.target.id - 1] = 1;
            // console.log(gameArray);
            props.setCounter(props.counter + 1);
            checkWinner(gameArray);
        } else if (flag !== null && props.counter % 2 === 1) {
            setCloseHandler(false);
            setCircleHandler(true);
            // setCounter(counter + 1);
            gameArray[event.target.id - 1] = -1;
            // console.log(gameArray);
            props.setCounter(props.counter + 1);
            checkWinner(gameArray);
        }




        // if (j % 2 === 0 && flag !== null) {
        //     setCloseHandler(true);
        //     setCircleHandler(false);
        //     j++;
        //     gameArray[event.target.id - 1] = 1;
        //     // console.log(gameArray);
        //     checkWinner(gameArray);
        // } else if (flag !== null && j % 2 === 1) {
        //     setCloseHandler(false);
        //     setCircleHandler(true);
        //     j++;
        //     gameArray[event.target.id - 1] = -1;
        //     // console.log(gameArray);
        //     checkWinner(gameArray);
        // }
    }
    return (<>
        <div className='button-div' myflag='used' onClick={clickHandler} id={props.id}>
            {closeHandler && < div><i className='fa fa-close'>{props.children}</i></div>}
            {circleHandler && <div><i className='fa fa-circle-o'>{props.children}</i></div>}
            {console.log(props.counter)}


        </div >
    </>)
}
export default Button;