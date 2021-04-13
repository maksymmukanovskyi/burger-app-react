import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
  render() {
    const { persons, onDelete, onChange } = this.props;
    return persons.map((person, index) => {
      return (
        <Person
          key={person.id}
          click={() => onDelete(index)}
          name={person.name}
          age={person.age}
          changed={event => onChange(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
