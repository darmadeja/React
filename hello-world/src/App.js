import React from 'react';
import logo from './logo.svg';
import './App.css';

function Button(props) {
  const onClickHandle = () => props.onClickFunction(props.increment)
  return (
    <button onClick={onClickHandle}>
      +{props.increment}
    </button>
    );
}

function Display(props) {
  return (
    <div>{props.message}</div>
    );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        const [counter, setCounter] = useState(0);
  const incrementFunction = (incrementValue) => setCounter(counter+incrementValue);
  return (
    <div>
      <Button onClickFunction={incrementFunction} increment={1}/>
      <Button onClickFunction={incrementFunction} increment={5}/>
      <Button onClickFunction={incrementFunction} increment={10}/>
      <Button onClickFunction={incrementFunction} increment={100}/>
      <Display message={counter}/>
    </div>
  );
      </header>
    </div>
  );
}

export default App;
