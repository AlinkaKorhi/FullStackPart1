import StatisticLine from './StatisticLine.js';

function Statistics(props) {
    let good = props.goodProp;
    let bad = props.badProp;
    let neutral = props.neutralProp;
    let all = props.allProp;
    let average = props.averageProp;
    let poisitive = props.poisitiveProp;


    if (good == 0 && bad == 0 && neutral == 0 && all == 0 && average == 0 && poisitive == 0){
        return (
            <p>No feedback given</p>
        );
    }

    return (
        <div>   
            <StatisticLine name="good" result={good} />
            <StatisticLine name="neutral" result={neutral} />
            <StatisticLine name="bad" result={bad} />

            <StatisticLine name="all" result={all} />
            <StatisticLine name="average" result={average} />
            <StatisticLine name="positive" result={poisitive} />
        </div>
    );
  }
  
  export default Statistics;