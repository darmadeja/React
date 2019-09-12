import React from "react";

const CharComponent = props => {
  const style = {
    display: "inline-block",
    padding: "16px",
    margin: "16px",
    border: "1px solid black",
    textAlign: "center"
  };

  return (
    <div style={style}>
      <output onClick={props.click}> {props.char} </output>
    </div>
  );
};

export default CharComponent;
