import React from "react";
import classes from "./Order.module.css";

const order = props => {
  console.log("Props:", props.ingredients);
  let transformedIngredient = [];
  for (let key in props.ingredients) {
    // transformedIngredient += `${key}(${props.ingredients[key]}) `;
    transformedIngredient.push({ name: key, amount: props.ingredients[key] });
  }
  console.log("transformedIngredient", transformedIngredient);

  const ingredientsOutput = transformedIngredient.map(ingredient => {
    return (
      <span
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "5px"
        }}
        key={ingredient.name}
      >
        {ingredient.name} ({ingredient.amount})
      </span>
    );
  });

  console.log(ingredientsOutput);
  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientsOutput}</p>
      <p>
        Price: <strong> USD {Number.parseFloat(props.price).toFixed(2)}</strong>
      </p>
    </div>
  );
};
export default order;
