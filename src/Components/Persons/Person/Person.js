import React, { PureComponent } from 'react';

import classes from './Person.module.css';

class Person extends PureComponent {
  render() {
    const { click, age, changed, name, children } = this.props;

    return (
      <div className={classes.Person}>
        <p onClick={click} role="presentation">
          I&apos;m {name} and I am {age} years old!
        </p>
        <p>{children}</p>
        <input type="text" onChange={changed} value={name} />
      </div>
    );
  }
}

export default Person;
