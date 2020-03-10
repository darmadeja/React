import React from "react";
import classes from "./Input.module.css";

const input = props => {
  let inputElement = null;
  let inputClassName = [classes.InputElement];
  // console.log("Invalid: ", props.id);

  if (props.invalid && props.shouldValidate) {
    console.log("Invalid Key: ", props.key);
    inputClassName.push(classes.Invalid);
  }

  console.log("inputClassName", inputClassName);
  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={inputClassName.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={inputClassName.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          className={inputClassName.join(" ")}
          value={props.value}
          onChange={props.changed}
        >
          {props.elementConfig.options.map(option => (
            <option value={option.value} key={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={inputClassName.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }
  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};
export default input;
