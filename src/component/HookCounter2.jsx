import React,{useState} from 'react'

function HookCounter2() {
    const [name,setName] = useState({firstName:"", lastName:""})
  return (
    <div className='bg-white border-white'>
      <input type='text' value={name.firstName} onChange={e => setName( { ...name, firstName: e.target.value } ) } ></input> <br/>
      <input type='text' value={name.lastName} onChange={e => setName({ ...name, lastName : e.target.value } ) } ></input> <br/>
      
      <h1>Your FirstName is - {name.firstName}</h1> <br/>
      <h1>Your LastName is - {name.lastName}</h1> <br/>
      <h1>{JSON.stringify(name)}</h1>
    </div>
  )
}

export default HookCounter2
