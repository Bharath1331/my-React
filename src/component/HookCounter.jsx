import React, {useState} from 'react'

function HookCounter() {
    const initialCount = 0;
    const[count,setCount] = useState(initialCount);
  return (
    <div className='text-bold'>
      Count : {count} <br/>
      <button onClick={ () => { setCount(initialCount) } }>Reset </button> <br/>
      <button onClick={ () => setCount(count+1) } >Increment </button> <br/>
      <button onClick={ () => setCount( count-1) }>Decrement </button> <br/>
      

    </div>
  )
}

export default HookCounter
