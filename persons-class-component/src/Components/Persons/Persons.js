import React, { Component } from "react";
import Person from "../Person/Person";

class Persons extends Component {
  constructor(props) {
    super(props);
    console.log("[Persons.js]: Constructor", props);
  }
  render() {
    console.log("[Persons.js] - render", this.props);
    return this.props.person.map((eachPerson, index) => {
      return (
        <Person
          name={eachPerson.name}
          age={eachPerson.age}
          click={() => this.props.click(index)}
          change={event => this.props.change(event, index)}
        />
      );
    });
  }
}

export default Persons;
