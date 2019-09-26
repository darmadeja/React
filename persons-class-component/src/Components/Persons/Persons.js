import React from "react";
import Person from "../Person/Person";

const Persons = props =>
  props.person.map((eachPerson, index) => {
    return (
      <Person
        name={eachPerson.name}
        age={eachPerson.age}
        click={() => props.click(index)}
        change={event => props.change(event, index)}
      />
    );
  });

export default Persons;
