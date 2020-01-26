import React from "react";
import classes from "./BurgerIngredient.module.css";
import PropTypes from "prop-types";

const burgerIngredient = props => {
  // console.log("Burger Ingredients: props", props);
  let ingridient = null;
  switch (props.type) {
    case "Bread-Bottom":
      // console.log("Burger Buttom");
      ingridient = <div className={classes.BreadBottom}></div>;
      break;
    case "Bread-Top":
      // console.log("Burger Top");
      ingridient = (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1}></div>
          <div className={classes.Seeds2}></div>
        </div>
      );
      break;
    case "Meat":
      ingridient = <div className={classes.Meat}></div>;
      break;
    case "Cheese":
      ingridient = <div className={classes.Cheese}></div>;
      break;
    case "Bacon":
      ingridient = <div className={classes.Bacon}></div>;
      break;
    case "Salad":
      ingridient = <div className={classes.Salad}></div>;
      break;
    default:
      ingridient = null;
  }
  return ingridient;
};

burgerIngredient.protoTypes = {
  type: PropTypes.string.isRequired
};

export default burgerIngredient;
