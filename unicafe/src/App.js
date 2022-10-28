import {useState} from 'react';

import Button from './Button.js';
import Statistics from './Statistics.js';

function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [poisitive, setPositive] = useState(0)
  
  const setToGood = () => {
    let newGood = good + 1 ;
    setGood(newGood);
    setStatictics(newGood, bad, neutral);
  }
  const setToNeutral = () => {
    let newNeutral = neutral + 1;
    setNeutral(newNeutral);
    setStatictics(good, bad, newNeutral);
  }
  const setToBad = () => {
    let newBad = bad + 1;
    setBad(newBad);
    setStatictics(good, newBad, neutral);
  }  

  const setStatictics = (newGood, newBad, newNeutral) =>{
    setToAll(newGood, newBad, newNeutral);
    setToAverage(newGood + newBad + newNeutral);
    setToPositive(newGood, newGood + newBad + newNeutral);
  }

  const setToAll = (newGood, newBad, newNeutral) => {
    let sum = newGood + newBad + newNeutral;
    setAll(sum);
  }

  const setToAverage = (sum) => {
    setAverage(sum/3);
  }
  
  const setToPositive = (newGood, sum) => {
    setPositive(newGood/sum * 100);
  }

  return (
    <div>
      <h2>give feedback</h2>

      <Button name="good" handleClick={() => setToGood()} />

      <Button name="neutral" handleClick={() => setToNeutral()} />

      <Button name="bad" handleClick={() => setToBad()} />

      <h2>statistic</h2>

      <Statistics
        goodProp={good} 
        badProp={bad} 
        neutralProp={neutral}
        allProp={all}
        poisitiveProp={poisitive}
        averageProp={average} />

    </div>
  );
}

export default App;