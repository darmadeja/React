import React from "react";
import styles from "../Styles/App.module.css";

const Cockpit = props => {
  const classes = [];
  let btnClass = "";

  if (props.person.length < 3) {
    classes.push(styles.red);
  }
  if (props.person.length < 2) {
    classes.push(styles.bold);
  }

  if (props.showperson) {
    btnClass = styles.red;
  }

  return (
    <div>
      <h1> {props.title}</h1>
      <p className={classes.join(" ")}> This is really working</p>
      <button onClick={props.personToggler} className={btnClass}>
        Switch Name
      </button>
    </div>
  );
};

export default Cockpit;
