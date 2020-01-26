import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuldControl/BuildControl";
import Aux from "../../../hoc/Aux/Aux";

const controls = [
  { label: "Salad", type: "Salad" },
  { label: "Cheese", type: "Cheese" },
  { label: "Bacon", type: "Bacon" },
  { label: "Meat", type: "Meat" }
];

const buildControls = props => (
  <Aux>
    <div className={classes.BuildControls}>
      <p>
        Burger Price : <strong> {props.price.toFixed(2)} </strong>
      </p>
      {controls.map(control => {
        // console.log("BuildControls :: control-lables", control.label);
        return (
          <BuildControl
            key={control.label}
            label={control.label}
            added={() => props.ingredientsAdded(control.type)}
            removed={() => props.ingredientsRemoved(control.type)}
            disabled={props.disabled[control.type]}
          />
        );
      })}
      {/* {console.log(props.purchasable)} */}
      <button
        className={classes.OrderButton}
        disabled={props.purchasable}
        onClick={props.ordered}
      >
        ORDER NOW
      </button>
    </div>
  </Aux>
);

export default buildControls;
