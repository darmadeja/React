import React from "react";
import Burger from "../Burger/Burger";
import Button from "../Utilities/Button/Button";
import classes from "./CheckoutSummary.module.css";

const checkoutSummary = props => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1> Hope it will taste good!! </h1>
      <div style={{ width: "100%", height: "300px", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
        <Button buttonType="Success" clicked={props.checkoutContinued}>
          CONTINUE
        </Button>
        <Button buttonType="Danger" clicked={props.checkoutCanceled}>
          CANCEL
        </Button>
      </div>
    </div>
  );
};

export default checkoutSummary;
