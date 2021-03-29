import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    on: false,
    persons: [
      { id: 6516, name: "Max", age: 31 },
      { id: 6517, name: "Rob", age: 25 },
      { id: 6515, name: "Jenifer", age: 18 },
    ],
  };

  handleChange = (e, id) => {
    // const personIndex = this.state.persons.find(el => el.id === id).id;
    // const person = this.state.persons.filter(el => el.id === personIndex);
    // person.name = value;
    // const persons = [...this.state.persons];
    // console.log(persons);

    const { value } = e.target;
    const persons = this.state.persons;
    persons.map((el) => (el.id === id ? (el.name = value) : null));
    this.setState({
      persons: [...persons],
    });
    
  };

  togglePersons = () => {
    this.setState({
      on: !this.state.on,
    });
  };

  deletePersonHandler = (index) => {
    const persons = this.state.persons.filter(
      (el) => this.state.persons.indexOf(el) !== index
    );

    this.setState({
      persons: persons,
    });
  };
  render() {
    return (
      <div className="App">
        <button onClick={this.togglePersons}>Click to show the name</button>

        {this.state.on &&
          this.state.persons.map((el, index) => (
            <Person
              key={el.id}
              name={el.name}
              year={el.age}
              click={() => this.deletePersonHandler(index)}
              changed={(e) => this.handleChange(e, el.id)}
            />
          ))}
      </div>
    );
  }
}

export default App;
