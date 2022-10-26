import React from 'react';
import './App.css';

const App = () => {
  const now = new Date();
  const a = 10;
  const b = 20;

/*  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
  )
  */

  return React.createElement(
    'div',
    null,
    React.createElement('p', null, 'Hello woeld, it is ', now.toString()),
    React.createElement('p', null, a , ' plus', b, ' is', a+b)
  )
}

const Hello = () => {
  return(
    <div>
      <p>Hello</p>
    </div>
  )
}

export {App, Hello};

