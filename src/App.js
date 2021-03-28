import React, { Component } from "react";
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    on: false,
    persons: [
      {name: 'Max', age: 31},
      {name: 'Rob', age: 25},
      {name: 'Jenifer', age: 18},
    ]
  }

  // switchHandler = (newName) => {
  //   this.setState({
  //     on: false,
  //     persons: [
  //       {name: newName, age: 31},
  //       {name: 'Rob', age: 25},
  //       {name: 'Jenifer', age: 18},
  //     ]
  //   })
  // }
  // nameHandler = ({target}) => {
  //   this.setState({
  //     persons: [
  //       {name: target.value, age: 31},
  //       {name: 'Rob', age: 25},
  //       {name: 'Jenifer', age: 18},
  //     ]
  //   })
  // }
  togglePersons = () => {
    this.setState({
      on: !this.state.on,
    })
  }
  render() {
    
    return(
      <div className= 'App'>

      <button onClick={this.togglePersons}>Click to show the name</button>
      {this.state.on &&
       <Person>
       {this.state.persons.map(el => 
       <p key={el.name}>My name is {el.name} and I'm {el.age} years old!)</p>
       )}
       </Person>}
      
      </div>
    )
  }
}

export default App;
