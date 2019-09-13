import React from "react";

const UserInput = props => {
  const style = {
    width: "60%",
    margin: "auto",
    border: "4px solid red"
  };
  return (
    <div>
      <input
        type="text"
        style={style}
        onChange={props.change}
        value={props.display}
      />
    </div>
  );
};

export default UserInput;
