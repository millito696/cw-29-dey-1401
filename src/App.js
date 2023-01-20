import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Button from './components/Buttons/Buttons';
import { useEffect, useState } from 'react';
import Modal from './components/Modal/Modal';


let gameArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let gameResults = [0, 0]
function App() {
  const [winner, setWinner] = useState('');
  const [modalShow, setModalShow] = useState(false);
  const gameHandler = (gameResult) => {
    if (gameResult == 'cross wins') {
      gameResults[0]++;
      localStorage.setItem('gameResults', JSON.stringify(gameResults));
      console.log(gameResults);
      setWinner('Cross');
      setModalShow(true);
    } else if (gameResult == 'circle wins') {
      gameResults[1]++;
      localStorage.setItem('gameResults', JSON.stringify(gameResults));
      console.log(gameResults);
      setWinner('Circle');
      setModalShow(true);
    } else {
      setWinner('No one');
      setModalShow(true);
    }

  }



  return (
    <div className="App">
      {modalShow && ReactDOM.createPortal(<Modal winner={winner} />, document.getElementById('modal-root'))}
      {gameArray.map((el, index) => <Button key={index + 1} id={index + 1} gameArray={gameArray} onEndGame={gameHandler} />)}

    </div>
  );
}

export default App;
