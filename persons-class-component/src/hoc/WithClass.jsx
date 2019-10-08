// This HOC Component is not usesed intstead we are using the WithWrapClass function
import React from "react";

const withClass = props => (
  <div className={props.classes}> {props.children} </div>
);

export default withClass;
