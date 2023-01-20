import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Button from './components/Buttons/Buttons';
import { useEffect, useState } from 'react';
import Modal from './components/Modal/Modal';
import InputModal from './components/Input/Input';


let gameArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let gameResults = [0, 0];
let playerStatus = localStorage.getItem('playerStatus');
function App() {
  const [winner, setWinner] = useState('');
  const [modalShow, setModalShow] = useState(false);
  const [InputModalShow, setInputModalShow] = useState(playerStatus ? false : true);
  const [signIdentifier, setSignIdentifier] = useState('cross');
  const gameHandler = (gameResult) => {
    if (gameResult == 'cross wins') {
      gameResults[0]++;
      localStorage.setItem('gameResults', JSON.stringify(gameResults));
      // console.log(gameResults);
      setWinner('Cross');
      setModalShow(true);
    } else if (gameResult == 'circle wins') {
      gameResults[1]++;
      localStorage.setItem('gameResults', JSON.stringify(gameResults));
      // console.log(gameResults);
      setWinner('Circle');
      setModalShow(true);
    } else {
      setWinner('No one');
      setModalShow(true);
    }

  }
  const playersInfoHandler = (infos) => {
    console.log(infos);
    setInputModalShow(false);
    localStorage.setItem('playerStatus', JSON.stringify(infos));
    setSignIdentifier(infos.firstPlayerSign);
  }
  const [counter, setCounter] = useState(0);



  return (
    <div className="App">
      {InputModalShow && ReactDOM.createPortal(<InputModal playersInfo={playersInfoHandler} />, document.getElementById('input-modal'))}
      {modalShow && ReactDOM.createPortal(<Modal winner={winner} />, document.getElementById('modal-root'))}
      {gameArray.map((el, index) => <Button counter={counter} setCounter={setCounter} signIdentifier={signIdentifier} key={index + 1} id={index + 1} gameArray={gameArray} onEndGame={gameHandler} />)}

    </div>
  );
}

export default App;
