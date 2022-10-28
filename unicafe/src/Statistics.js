import Result from './Result.js';

function Statistics(props) {
    return (
        <div>
            <Result name="good" result={props.goodProp}></Result>
            <Result name="neutral" result={props.neutralProp}></Result>
            <Result name="bad" result={props.badProp}></Result>
            
            <Result name="all" result={props.allProp}></Result>
            <Result name="average" result={props.averageProp}></Result>
            <Result name="positive" result={props.poisitiveProp}></Result>
        </div>
    );
  }
  
  export default Statistics;