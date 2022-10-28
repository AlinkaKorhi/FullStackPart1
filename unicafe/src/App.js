import {useState} from 'react';

import Button from './Button.js';
import Result from './Result.js';

function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const setToGood = () => {
    setGood(good + 1)
  }
  const setToNeutral = () => {
    setNeutral(neutral + 1)
  }
  const setToBad = () => {
    setBad(bad + 1)
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
    </div>
  );
}

export default App;