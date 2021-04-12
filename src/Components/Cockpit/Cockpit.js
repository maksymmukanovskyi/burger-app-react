import React from 'react';

const cockpit = props => (
  <div>
    <h1>Hi, I&apos;m a React App</h1>
    <p className={props.assignedClasses.join(' ')}>This is really working!</p>
    <button type="button" className={props.btnClass} onClick={props.onToggle}>
      Toggle Persons
    </button>
  </div>
);

export default cockpit;
