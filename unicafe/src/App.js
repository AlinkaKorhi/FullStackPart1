import {useState} from 'react';

import Button from './Button.js';
import Result from './Result.js';

function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [poisitive, setPositive] = useState(0)
  
  const setToGood = () => {
    let newGood = good + 1 
    setGood(newGood)
    let sum = bad + neutral + newGood
    setAll(sum)
    setAverage(sum/3)
    setPositive(newGood/sum * 100)
  }
  const setToNeutral = () => {
    let newNeutral = neutral + 1
    setNeutral(newNeutral)
    let sum = bad + good + newNeutral
    setAll(sum)
    setAverage(sum/3)
    setPositive(good/sum * 100)
  }
  const setToBad = () => {
    let newBad = bad + 1
    setBad(newBad)
    let sum = good + neutral + newBad
    setAll(sum)
    setAverage(sum/3)
    setPositive(good/sum * 100)
  }

  return (
    <div>
      <h2>give feedback</h2>

      <Button name="good" handleClick={() => setToGood()}></Button>

      <Button name="neutral" handleClick={() => setToNeutral()}></Button>

      <Button name="bad" handleClick={() => setToBad()}></Button>

      <h2>statistic</h2>
      <Result name="good" result={good}></Result>
      <Result name="neutral" result={neutral}></Result>
      <Result name="bad" result={bad}></Result>
      <Result name="all" result={all}></Result>
      <Result name="average" result={average}></Result>
      <Result name="positive" result={poisitive}></Result>
    </div>
  );
}

export default App;