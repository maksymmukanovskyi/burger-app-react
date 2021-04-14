import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import styles from './App.module.css';

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
    const { showPersons, persons } = this.state;

    if (showPersons) {
      createdPersons = (
        <Persons
          persons={persons}
          onDelete={this.deletePersonHandler}
          onChange={this.nameChangedHandler}
        />
      );
    }

    return (
      <div>
        <Cockpit
          showPersons={showPersons}
          onToggle={this.togglePersonsHandler}
          persons={persons}
        />
        {createdPersons}
      </div>
    );
  }
}
export default withClass(App, styles.App);
