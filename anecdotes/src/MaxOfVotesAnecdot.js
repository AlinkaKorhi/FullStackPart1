function MaxOfVotesAnecdot(props) {
    if(props.votesNumber == null){
        return (
            <div>            
                <p>No Votes here!</p>
            </div>
        );
    }
    return (
        <div>            
            <p>{props.anecdot}</p>
            <p>has {props.votesNumber} votes.</p>
        </div>
    );
  }
  
  export default MaxOfVotesAnecdot;