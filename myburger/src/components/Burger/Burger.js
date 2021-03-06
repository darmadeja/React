import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import classes from "./Burger.module.css";

const burger = props => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(ingredientKey => {
      return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
        // console.log("ingredientskey inner: ", ingredientKey, "i:", i);
        return (
          <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />
        );
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please add incrediendts to the burger</p>;
  }

  return (
    <div className={classes.Burger}>
      <p>Hi, This is Burger</p>
      <BurgerIngredient type="Bread-Top" />
      {/* {console.log("transformedIngredients", transformedIngredients)} */}
      {transformedIngredients}
      <BurgerIngredient type="Bread-Bottom" />
    </div>
  );
};

export default burger;
