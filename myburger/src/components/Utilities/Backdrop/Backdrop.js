import React from "react";
import classes from "./Backdrop.module.css";

const backDrop = props => {
  console.log("backdrop -- Props : ", props);
  return props.show ? (
    <div className={classes.Backdrop} onClick={props.clicked}></div>
  ) : null;
};

export default backDrop;
