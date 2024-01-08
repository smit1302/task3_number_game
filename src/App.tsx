import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [inputNumber, setInputNumber] = useState<number>(0);
  const [randomNumber, setRandomNumber] = useState<number | null>(null);
  const [message, setMessage] = useState<string>('');


  const handleInputNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newInputNumber = parseInt(e.target.value, 10);
    setInputNumber(newInputNumber);
  };

  useEffect (() =>{
    const newRandomNumber = Math.floor(Math.random() * 20) + 1;
    setRandomNumber(newRandomNumber);
    console.log("The random number generated is",newRandomNumber);
  },[]);

  const checkNumber = () => {
    setMessage('');
    if(randomNumber===inputNumber)
    {setMessage('You have guessed the correct number');}
    else if(randomNumber!==null&&randomNumber>inputNumber)
    {setMessage('The number you have guessed is less than the correct number');}
    else if(randomNumber!==null&&randomNumber<inputNumber)
    {setMessage('The number you have guessed is more than the correct number');}
  };


  return (
    <div>
      <h1>Guess the number</h1>
      <input
        type="number"
        id="inputNumber"
        value={inputNumber}
        onChange={handleInputNumber}
        placeholder="Enter the number"
      />
      <p>{message}</p>
      <button onClick={checkNumber}>Check</button>
    </div>
  );
}

export default App;
