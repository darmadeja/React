import React from "react";
import "./UserOutput.css";

const UserOutput = props => {
  return (
    <div className="UserOutput">
      <p>The Username-1 is {props.username}</p>
      <p>The Username-2 is {props.username}</p>
    </div>
  );
};

export default UserOutput;
