import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 },
    ],
    showPersons: false,
  };

  nameChangedHandler = (event, id) => {
    const { persons } = this.state;
    const personIndex = persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...persons[personIndex],
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const newPersons = [...persons];
    newPersons[personIndex] = person;

    this.setState({ persons: newPersons });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const { persons } = this.state;
    const newPersons = [...persons];
    newPersons.splice(personIndex, 1);
    this.setState({ persons: newPersons });
  };

  togglePersonsHandler = () => {
    // const { showPersons } = this.state;

    // const doesShow = this.state.showPersons;
    // this.setState({ showPersons: !doesShow });
    this.setState(prevState => ({
      showPersons: !prevState.showPersons,
    }));
  };

  render() {
    let createdPersons = null;
    let btnClass = '';
    const { showPersons, persons } = this.state;

    if (showPersons) {
      createdPersons = (
        <div>
          <Persons
            persons={persons}
            onDelete={this.deletePersonHandler}
            onChange={this.nameChangedHandler}
          />
        </div>
      );

      btnClass = classes.Red;
    }

    return (
      <div className={classes.App}>
        <Cockpit
          btnClass={btnClass}
          onToggle={this.togglePersonsHandler}
          classes={classes}
          persons={persons}
        />
        {createdPersons}
      </div>
    );
  }
}

export default App;
