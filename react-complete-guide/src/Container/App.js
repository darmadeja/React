import React, { useState } from "react";
import Persons from "../Components/Persons/Persons";
import Cockpit from "../Cockpit/Cockpit";
import "../Styles/Person.css";
import styles from "../Styles/App.module.css";

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
    setShowState({
      showPerson: !doesShow
    });
  };

  const deletePersonHandler = personIndex => {
    const persons = [...personState.person];
    persons.splice(personIndex, 1);
    setPersonState({
      person: persons
    });
  };

  let person = null;

  if (showState.showPerson) {
    person = (
      <Persons
        person={personState.person}
        click={deletePersonHandler}
        change={nameChangeHandler}
      />
    );
  }

  return (
    <div className={styles.App}>
      <Cockpit
        title={props.title}
        personToggler={personToggler}
        person={personState.person}
        showperson={showState.showperson}
      />
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
