import React, { Component } from "react";

class Person extends Component {
  constructor(props) {
    super(props);
    console.log("[Person.js] - constructor", props);
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    // this.inputref.focus();
    this.inputElementRef.current.focus();
  }

  render() {
    console.log("[Person.js] - render", this.props);
    return (
      <div className="Person">
        <p onClick={this.props.click}>
          {" "}
          My name is {this.props.name} and I am {this.props.age} years old
        </p>
        <p> {this.props.children} </p>
        <input
          type="text"
          // ref={inputref => (this.inputref = inputref)}
          ref={this.inputElementRef}
          onChange={this.props.change}
          value={this.props.name}
        />
      </div>
    );
  }
}

export default Person;
