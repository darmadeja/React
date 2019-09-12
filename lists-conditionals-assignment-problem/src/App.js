import React, { useState } from "react";
import ValidationComponent from "./Components/ValidationComponent";
import CharComponent from "./Components/CharComponent";

const App = props => {
  const [inputState, setInputState] = useState({
    inputText: ""
  });

  const nameChangeHandler = event => {
    setInputState({
      inputText: event.target.value
    });
  };

  const letterDeleteHandler = letterIndex => {
    const newWordArray = inputState.inputText.split("");
    console.log(newWordArray);
    newWordArray.splice(letterIndex, 1);
    console.log(newWordArray);
    newWordArray.join();
    console.log(newWordArray);
    setInputState({
      inputText: newWordArray.join("")
    });
  };

  return (
    <div className="App">
      <div>
        Enter your Name:{" "}
        <input
          type="text"
          onChange={nameChangeHandler}
          name="fname"
          value={inputState.inputText}
        />
        <div>
          <p>
            The Text length is {inputState.inputText.length} and the text is{" "}
            {inputState.inputText}
          </p>
        </div>
        <ValidationComponent length={inputState.inputText.length} />
        {inputState.inputText.split("").map((element, index) => {
          return (
            <CharComponent
              char={element}
              key={index}
              click={() => letterDeleteHandler(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
