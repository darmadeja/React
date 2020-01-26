import React from "react";
import classes from "./Spinner.module.css";

const spinner = props => (
  <div className={classes.Loader}>
    Loading... <p> Spinning</p>
  </div>
);

export default spinner;
