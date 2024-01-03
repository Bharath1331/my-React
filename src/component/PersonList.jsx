import Person from "./Person"
import React from 'react'

function PersonList() 
{
        const persons = [
            {
                id:1,
                name: 'John',
                age: 30
            },
            {
                id:2,
                name: 'Jane',
                age: 20 
            },
            {
                id:3,
                name: 'Joe',
                age: 35
            }
        ]

        //const names = ['Java',"React",'JS','Mongo','JS']

        //use index as key when list is static 
        //const nameList = names.map((name,index) => <h1 key={index}>{index} {name}</h1>)
       // return <div>{nameList}</div>
        const personList = persons.map(person => <Person key={person.id} person = {person} />)
   
    return <div>{personList}</div>;
  
}

export default PersonList