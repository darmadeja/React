import React from "react";

const Person = props => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        {" "}
        My name is {props.name} and I am {props.age} years old
      </p>
      <p> {props.children} </p>
      <input type="text" onChange={props.change} value={props.name} />
    </div>
  );
};

export default Person;
