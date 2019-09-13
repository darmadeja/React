import React, { useState } from "react";
import Person from "./Person/Person";
import "./Person/Person.css";
import "./App.css";

const App = props => {
  const [personState, setPersonState] = useState({
    person: [
      { name: "Deja", age: "35" },
      { name: "Shakthi", age: "4" },
      { name: "Indhu", age: "25" },
      { name: "Samaya", age: "1" }
    ]
  });

  const [showState, setShowState] = useState({
    showPerson: false
  });

  const switchNameHandler = newName => {
    setPersonState({
      person: [
        { name: newName, age: "36" },
        { name: "Shakthishvr", age: "3" },
        { name: "Papa", age: "30" },
        { name: "Samayaa", age: "8 Months" }
      ]
    });
  };

  const nameChangeHandler = (event, personIndex) => {
    const persons = [...personState.person];
    persons[personIndex].name = event.target.value;
    setPersonState({
      person: persons
    });
  };

  const personToggler = () => {
    const doesShow = showState.showPerson;
    console.log("In personToggler");
    setShowState({
      showPerson: !doesShow
    });
  };

  const deletePersonHandler = personIndex => {
    const persons = [...personState.person];
    console.log("In Delete");
    persons.splice(personIndex, 1);
    setPersonState({
      person: persons
    });
  };

  const style = {
    backgroundColor: "green",
    color: "white",
    padding: "18px",
    font: "inherit",
    border: "1px solid blue",
    cursor: "pointer"
    }
  };

  let person = null;
  if (showState.showPerson) {
    person = (
      <div>
        {personState.person.map((eachPerson, index) => {
          return (
            <Person
              name={eachPerson.name}
              age={eachPerson.age}
              onclick={() => deletePersonHandler(index)}
              change={event => nameChangeHandler(event, index)}
            />
          );
        })}
      </div>
    );
    style.backgroundColor = "red";
  }

  const classes = [];
  if (personState.person.length < 3) {
    classes.push("red");
  }
  if (personState.person.length < 2) {
    classes.push("bold");
  }

  return (
      <div className="App">
        <h1> This is a React App</h1>
        <p className={classes.join(" ")}> This is really working</p>
        {console.log("in App")}
        <button onClick={personToggler} style={style}>
          Switch Name
        </button>
        {person}
      </div>
  );
};

// class App extends Component {

//   state = {
//     person: [
//       {name:"Deja", age:"35"},
//       {name:"Shakthi", age:"4"},
//       {name:"Indhu", age:"25"},
//       {name:"Samaya", age:"1"},
//     ]
//   }

//   switchNameHandler = () => {
//     // console.log('Clicked on Siwtch Name')
//     // personState.person[0].name = 'Darmadeja';
//     this.setState( {
//       person: [
//         {name:"Darmadeja", age:"36"},
//         {name:"Shakthishvr", age:"3"},
//         {name:"Papa", age:"30"},
//         {name:"Samayaa", age:"8 Months"},
//       ]
//     })
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1> This is a React App</h1>
//         <button onClick={this.switchNameHandler}>Switch Name</button>
//         <Person name={personState.person[0].name} age={personState.person[0].age}/>
//         <Person name={personState.person[1].name} age={personState.person[1].age}/>
//         <Person name={personState.person[2].name} age={personState.person[2].age}/>
//         <Person name={personState.person[3].name} age={personState.person[3].age}> My Hobby is playing with ball </Person>
//       </div>
//     );
//   }
// }

export default App;
