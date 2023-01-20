import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Button from './components/Buttons/Buttons';
import { useEffect, useState } from 'react';
import Modal from './components/Modal/Modal';
import InputModal from './components/Input/Input';
import Timer from './components/Timer/Timer';


let gameArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let gameResults = [0, 0];
let playerStatus = localStorage.getItem('playerStatus');
function App() {
  const [winner, setWinner] = useState('');
  const [modalShow, setModalShow] = useState(false);
  const [InputModalShow, setInputModalShow] = useState(playerStatus ? false : true);
  const [signIdentifier, setSignIdentifier] = useState('cross');
  const [counter, setCounter] = useState(0);
  const [timeStop, setTimeStop] = useState(0);
  const [time, setTime] = useState(0);



  useEffect(() => {

    if (timeStop === 0 && counter > 0) {
      const myTimeOut = setTimeout(() => {
        timeStop === 0 && counter > 0 && setTime(time + 1);
      }, 1000)

    }
    return clearTimeout();
  }, [time, counter]);
  const gameHandler = (gameResult) => {
    if (gameResult == 'cross wins') {
      gameResults[0]++;
      localStorage.setItem('gameResults', JSON.stringify(gameResults));
      // console.log(gameResults);
      setWinner('Cross');
      setModalShow(true);
      setTimeStop(1);
    } else if (gameResult == 'circle wins') {
      gameResults[1]++;
      localStorage.setItem('gameResults', JSON.stringify(gameResults));
      // console.log(gameResults);
      setWinner('Circle');
      setModalShow(true);
      setTimeStop(1);
    } else {
      setWinner('No one');
      setModalShow(true);
      setTimeStop(1);
    }

  }
  const playersInfoHandler = (infos) => {
    console.log(infos);
    setInputModalShow(false);
    localStorage.setItem('playerStatus', JSON.stringify(infos));
    setCounter(infos.firstPlayerSign === 'cross' ? 0 : 1);
  }




  return (
    <div className="App">
      {console.log(counter)}
      {InputModalShow && ReactDOM.createPortal(<InputModal playersInfo={playersInfoHandler} />, document.getElementById('input-modal'))}
      {modalShow && ReactDOM.createPortal(<Modal winner={winner} />, document.getElementById('modal-root'))}
      {gameArray.map((el, index) => <Button counter={counter} setCounter={setCounter} signIdentifier={signIdentifier} key={index + 1} id={index + 1} gameArray={gameArray} onEndGame={gameHandler} />)}
      {!InputModalShow && ReactDOM.createPortal(<Timer time={time} />, document.getElementById('timer-root'))}

    </div>
  );
}

export default App;
