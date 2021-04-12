import React from 'react';

const cockpit = props => {
  const assignedClasses = [];

  if (props.persons.length <= 2) {
    assignedClasses.push(props.classes.red); // classes = ['red']
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(props.classes.bold); // classes = ['red', 'bold']
  }

  return (
    <div>
      <h1>Hi, I&apos;m a React App</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button type="button" className={props.btnClass} onClick={props.onToggle}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
