import React, { Component, Fragment } from "react";
import Persons from "../Components/Persons/Persons";
import Cockpit from "../Cockpit/Cockpit";
import "../Styles/Person.css";
import styles from "../Styles/App.module.css";
import withWrapClass from "../hoc/withWrapClass";
import AuthContext from "../Context/Auth-Context";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] - Constructor", props);
  }

  state = {
    person: [
      { name: "Deja", age: "35" },
      { name: "Shakthi", age: "4" },
      { name: "Indhu", age: "25" },
      { name: "Samaya", age: "1" }
    ],
    showPerson: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] - getDervedStateFromProps", props, state);
    return state;
  }

  componentDidMount() {
    console.log("[App.js] - componentDidMount", this.state, this.props);
  }

  componentDidUpdate() {
    console.log("[App.js] - componentDidUpdate", this.state, this.props);
  }

  shouldComponentUpdate(nextProp, nextState) {
    console.log("[App.js] - shouldComponentUpdate", nextProp, nextState);
    return true;
  }

  nameChangeHandler = (event, personIndex) => {
    const persons = [...this.state.person];
    persons[personIndex].name = event.target.value;
    this.setState({
      person: persons,
      changeCounter: this.state.changeCounter + 1
    });
    // this.setState((prevState, props) => {
    //   return {
    //     person: persons,
    //     changeCounter: prevState.changeCounter + 1
    //   };
    // });
  };

  personToggler = () => {
    const doesShow = this.state.showPerson;
    this.setState({
      showPerson: !doesShow
    });
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.person];
    persons.splice(personIndex, 1);
    this.setState({
      person: persons
    });
  };

  loginHandler = () => {
    this.setState({
      authenticated: !this.state.authenticated
    });
  };

  render() {
    console.log("[App.js] - render", this.props);
    let person = null;
    if (this.state.showPerson) {
      person = (
        <Persons
          person={this.state.person}
          click={this.deletePersonHandler}
          change={this.nameChangeHandler}
          authenticated={this.state.authenticated}
        />
      );
    }
    return (
      <Fragment>
        <button
          onClick={() =>
            this.setState({ showCockpit: !this.state.showCockpit })
          }
        >
          Show Cockpit
        </button>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }}
        >
          {this.state.showCockpit ? (
            <Cockpit
              title={this.props.title}
              personToggler={this.personToggler}
              personLength={this.state.person.length}
              showperson={this.state.showperson}
              login={this.loginHandler}
            />
          ) : null}
          {person}
        </AuthContext.Provider>
      </Fragment>
    );
  }
}

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

export default withWrapClass(App, styles.App);
