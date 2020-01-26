import React from "react";
import burgerLogo from "../../assets/images/burger-logo.png";
import classes from "./Logo.module.css";

const logo = props => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <img className={classes.Logo_image} src={burgerLogo} alt="My Burger" />
  </div>
);

export default logo;
