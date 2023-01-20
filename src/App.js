import Button from './Button';
import './App.css';
import React, { useState } from 'react';


function App() {

  const [count, setCount] = useState(() => {
    //if you pass the state value as a function version
    //it will only run the first time it renders
    console.log('I will run only once');
    return 0
  });

  function handleClick() {
    console.log("Button was clicked!");
  }

  function rest() {
    // prev state value
    setCount(prevCount => prevCount - 1)
  }

  function sum() {
    // prev state value
    setCount(prevCount => prevCount + 1)
  }

  return (
    <div className="App">
        <section>
          <Button cuandoClick={() => {
            handleClick()
          }}>
              Click Me
          </Button>

          <button onClick={handleClick}>Click Me 2</button>
        </section>
        <section className="countSection">
          <button onClick={rest}>-</button>
          <span>{count}</span>
          <button onClick={sum}>+</button>

        </section>
    </div>
  );
}

export default App;
