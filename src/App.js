
import './App.css';
import Button from './components/Buttons/Buttons';
import { useEffect, useState } from 'react';

let gameArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
function App() {




  return (
    <div className="App">
      {gameArray.map((el, index) => <Button key={index + 1} id={index + 1} />)}
      {/* {console.log(i)} */}
    </div>
  );
}

export default App;
