import Result from './Result.js';

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
            <Result name="good" result={good}></Result>
            <Result name="neutral" result={neutral}></Result>
            <Result name="bad" result={bad}></Result>

            <Result name="all" result={all}></Result>
            <Result name="average" result={average}></Result>
            <Result name="positive" result={poisitive}></Result>
        </div>
    );
  }
  
  export default Statistics;