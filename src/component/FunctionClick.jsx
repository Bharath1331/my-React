import React from 'react'

function FunctionClick() {

    function clickHandler() {
        console.log('clicked')
        //return <h1>Button clicked</h1>
    }

  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick
