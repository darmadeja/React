import React, { Component } from "react";
import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";
import { connect } from "react-redux";

class Persons extends Component {
  state = {
    persons: []
  };

  //   personAddedHandler = () => {
  //     const newPerson = {
  //       id: Math.random(), // not really unique but good enough here!
  //       name: "Max",
  //       age: Math.floor(Math.random() * 40)
  //     };
  //     this.setState(prevState => {
  //       return { persons: prevState.persons.concat(newPerson) };
  //     });
  //   };

  personDeletedHandler = personId => {
    this.setState(prevState => {
      return {
        persons: prevState.persons.filter(person => person.id !== personId)
      };
    });
  };

  render() {
    console.log("render");
    return (
      <div>
        <AddPerson personAdded={this.props.onPersonAddHandler} />
        {this.props.persons.map(person => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.onPersonDeleteHandler(person.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("mapStateToprops: ", state);
  return {
    persons: state.persons
  };
};

const mapDisptachToProps = dispatch => {
  console.log("dispatch");
  return {
    onPersonAddHandler: () => dispatch({ type: "ADD_PERSON" }),
    onPersonDeleteHandler: id => dispatch({ type: "DELETE_PERSON", id: id })
  };
};

export default connect(mapStateToProps, mapDisptachToProps)(Persons);
