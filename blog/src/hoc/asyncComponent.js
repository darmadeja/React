import React, { Component } from "react";

const asyncComponent = importComponent => {
  return class extends Component {
    state = { component: null };

    componentDidMount() {
      importComponent().then(cmp => {
        console.log("Component", cmp);
        this.setState({ component: cmp.default });
      });
    }

    render() {
      const C = this.state.component;
      console.log("Mounted Component: ", C);
      return C ? <C {...this.props} /> : null;
    }
  };
};

export default asyncComponent;
