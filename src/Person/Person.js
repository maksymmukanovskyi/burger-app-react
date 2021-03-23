import React from "react";
const Person = ({name, age, children}) => {
  return (
    <div>
      <h1>I'm a {name} and i'm {age} y.o!</h1>
      <p>{children}</p>

    </div>
  );
};

export default Person;
