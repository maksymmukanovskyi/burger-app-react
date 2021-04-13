import React from 'react';
import classes from './Cockpit.module.css';
import Auxx from '../../hoc/Auxx';

const cockpit = props => {
  const assignedClasses = [];
  let btnClass = classes.Button;
  if (!props.showPersons) {
    btnClass = [classes.Button, classes.Red].join(' ');
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }

  return (
    <Auxx className={classes.Header}>
      <h1>Hi, I&apos;m a React App</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button type="button" className={btnClass} onClick={props.onToggle}>
        Toggle Persons
      </button>
    </Auxx>
  );
};

export default cockpit;
