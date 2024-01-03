import React,{useState} from 'react'

//useState with array
function HookCounter3() {
    const [item, setItem] = useState([]);

    const addItem = () => {
        setItem([...item, {id: item.length+1, value: Math.floor(Math.random()*10)+1 } ] )
    }

  return (
    <div>
      <button onClick={addItem}>Add Item</button> 
      <ul>
        {
            item.map( item => <li key={item.id} >ID: {item.id} value: {item.value} </li>)
        }
      </ul>
    </div>
  )
}

export default HookCounter3
