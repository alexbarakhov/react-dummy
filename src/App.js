import Button from './Button';
import './App.css';

function App() {

  function handleClick() {
    console.log("Button was clicked!");
  }

  return (
    <div className="App">
        <Button onClick={handleClick}>
            Click Me
        </Button>
    </div>
  );
}

export default App;
