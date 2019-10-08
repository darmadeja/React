import React, { useEffect, useRef, useContext } from "react";
import styles from "../Styles/App.module.css";
import AuthContext from "../Context/Auth-Context";

const Cockpit = props => {
  const toggleElementRef = useRef(null);

  const authContext = useContext(AuthContext);

  useEffect(() => {
    console.log("Cockpit.js - useEffect");
    // setTimeout(() => alert("Hi CockPit"), 1000);
    toggleElementRef.current.click();
    return () => {
      console.log("Use Effect - clean up");
    };
  }, []);
  const classes = [];
  let btnClass = "";

  if (props.personLength < 3) {
    classes.push(styles.red);
  }
  if (props.personLength < 2) {
    classes.push(styles.bold);
  }

  if (props.showperson) {
    btnClass = styles.red;
  }

  return (
    <div>
      <h1> {props.title}</h1>
      <p className={classes.join(" ")}> This is really working</p>
      <button
        onClick={props.personToggler}
        className={btnClass}
        ref={toggleElementRef}
      >
        Switch Name
      </button>
      {/* <AuthContext.Consumer>
        {context => <button onClick={context.login}> Login </button>}
      </AuthContext.Consumer> */}
      <button onClick={authContext.login}> Login </button>
    </div>
  );
};

export default React.memo(Cockpit);
