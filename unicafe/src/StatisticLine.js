function StatisticLine(props) {
  if (props.name == "positive") {
    return (       
        <tr>
          <td>{props.name}</td>
          <td>{props.result} %</td>
        </tr>
      );  
  }

  return (    
    <tr>
      <td>{props.name}</td> 
      <td>{props.result}</td>
    </tr>
  );
}

export default StatisticLine;