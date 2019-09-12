import React from "react";

const ValidationComponent = props => {
  const message = props.length < 5 ? "Text too short" : "Text is long enough";
  return <p>{message}</p>;
};

export default ValidationComponent;
