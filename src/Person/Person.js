import React from "react";
const Person = ({name, age, click, changed}) => {
  return (
    <div>
      <p onClick={click}>My name is {name} and I'm {age} years old!)</p>
      <input type="text" onChange={changed} value={name}/>
    </div>
  );
};

export default Person;
