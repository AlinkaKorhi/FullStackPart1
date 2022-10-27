import React, { createElement } from 'react';

const Part = (props) =>{
  return(
    <p>{props.part} {props.exercises}</p>
  )
}

const Header = (props) => {
  console.log(props);
    return(
    <h1>{props.course}</h1>
  )
};

const Content = (props) => {
  let prtsContent = props.parts.map((elem) => (
    <Part part={elem.name} exercises={elem.exercises}/>
  ));

  let divContent = createElement('div', null, prtsContent);

  return(
    divContent
  )
};

const Total = (props) => {
  let sum = 0;
  props.parts.forEach(elem => {
    sum += elem.exercises;
  });

  return(
    <p>Number of exercises {sum}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development';
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ];

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
      </div>
  )
}

export default App;

