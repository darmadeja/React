import React, { Component } from "react";
import Aux from "../../hoc/Aux/Aux";
import Button from "../Utilities/Button/Button";

class OrderSummary extends Component {
  componentWillUpdate() {
    console.log("Rending OrderSummary - willupdate");
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(igkey => {
      return (
        <li key={igkey}>
          <span style={{ textTransform: "capitalize" }}> {igkey} </span>:{" "}
          {this.props.ingredients[igkey]}
        </li>
      );
    });
    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients</p>
        <ul>{ingredientSummary}</ul>

        <p>
          <strong>Burger Price : {this.props.price.toFixed(2)} </strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button buttonType="Success" clicked={this.props.clickContinue}>
          CONTINUE
        </Button>
        <Button buttonType="Danger" clicked={this.props.clickCancel}>
          CANCEL
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
