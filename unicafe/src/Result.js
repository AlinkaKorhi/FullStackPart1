function Result(props) {
  if (props.name == "positive") {
    return (    
        <p>{props.name} {props.result} %</p>
      );  
  }

  return (    
    <p>{props.name} {props.result}</p>
  );
}

export default Result;