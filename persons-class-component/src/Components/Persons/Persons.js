import React, { PureComponent } from "react";
import Person from "../Person/Person";
import AuthContext from "../../Context/Auth-Context";

class Persons extends PureComponent {
  constructor(props) {
    super(props);
    console.log("[Persons.js]: Constructor", props);
  }

  static getDerivedStateFromProps(props, state) {
    console.log("[Persons.js] - getDervedStateFromProps", props, state);
    return state;
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(
  //     "[Persons.js] - shouldComponentUpdate",
  //     this.state,
  //     this.props,
  //     nextProps
  //   );
  //   if (nextProps.person !== this.props.person) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  getSnapshotBeforeUpdate(prevProp, prevState) {
    console.log(
      "[Persons.js] - getSnapshotBeforeUpdate",
      this.state,
      this.props
    );
    return null;
  }

  componentWillUnmount() {
    console.log("[Persons.js] - componentWillUnmount", this.state, this.props);
  }

  componentDidUpdate() {
    console.log("[Persons.js] - componentDidUpdate", this.state, this.props);
  }

  static contextType = AuthContext;

  componentDidMount() {
    console.log("[Persons.js] - componentDidMount", this.state, this.props);
    console.log(
      "Persons.js - componentDidMount - context.authenticated",
      this.context.authenticated
    );
  }

  render() {
    console.log("[Persons.js] - render", this.props);
    return (
      // <AuthContext.Consumer>
      // {context =>
      this.props.person.map((eachPerson, index) => {
        return this.context.authenticated ? (
          <Person
            name={eachPerson.name}
            age={eachPerson.age}
            click={() => this.props.click(index)}
            change={event => this.props.change(event, index)}
          />
        ) : null;
      })
      // }
      // </AuthContext.Consumer>
    );
  }
}

export default Persons;
