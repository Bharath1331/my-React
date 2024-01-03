import React, {useReducer} from 'react'

function CountReducer() {
    const initialState = {firstCounter : 0};

    const reducer = (state, action ) => {
        switch(action.type){
            case 'increment':
                return {firstCounter : state.firstCounter+1};
            
            case 'decrement':
                return {firstCounter : state.firstCounter-1};

            case 'reset':
                return initialState;

            default:
                return state;
        }
    }

    const[count, dispatch] =  useReducer(reducer, initialState);

  return (
    <div>
       <div>Count - {count.firstCounter} </div> <br/>
      <button onClick={ () => dispatch({type : 'increment'}) }>Increment</button> <br/>
      <button onClick={ () => dispatch( {type:'decrement' }) }>Decrement</button> <br/>
      <button onClick={ () => dispatch({type:'reset' } ) }>Reset</button> <br/>

    </div>
  )
}

export default CountReducer
