import React, { useState } from "react";
import "./App.css";
import UserInput from "./Username/UserInput";
import UserOutput from "./Username/UserOutput";

const App = props => {
  const [userNameState, setUserNameState] = useState({
    userName: "Shak"
  });

  const nameChangeEventHandler = event => {
    setUserNameState({
      userName: event.target.value
    });
  };

  return (
    <div className="App">
      <UserInput
        change={nameChangeEventHandler}
        display={userNameState.userName}
      />
      <UserOutput username={userNameState.userName} />
    </div>
  );
};

export default App;
