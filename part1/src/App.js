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
    <Part key={elem.name} part={elem.name} exercises={elem.exercises}/>
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
  const course = {
    name: 'Half Stack application development',
    parts: [
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
    ]
  };
  
  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
      </div>
  )
}

export default App;

