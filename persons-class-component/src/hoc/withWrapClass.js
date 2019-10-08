// This HOC Component is not usesed intstead we are using the WithWrapClass function
import React from "react";

const withClass = (WrappedComponent, className) => {
  return props => (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
  );
};

export default withClass;
