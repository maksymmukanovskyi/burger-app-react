import React, { Component } from "react";
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 31},
      {name: 'Rob', age: 25},
      {name: 'Jenifer', age: 18},
    ]
  }
  render() {
    
    return(
      <div className= 'App'>
      <button>Click to show the name</button>
      {this.state.persons.map(el => <Person name={el.name} age={el.age}/>)}
      </div>
    )
  }
}

export default App;
