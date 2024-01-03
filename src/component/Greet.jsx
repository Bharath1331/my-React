import React from 'react'

const Greet = ({name,lname}) => {
    
    return(
        <div>
            <h1>Hello {name} {lname}</h1>
        </div>
    )
//     console.log(props)
//     //props.name = 'Ram' //cannot reassign read only property name
//   return (
//     <div>
//         <h1>Hello {props.name} lastName {}</h1>
//         {props.children}
//     </div>
//     // <div className="dummyClass">
//     //   <h1> <b>Welcome </b></h1>
//     // </div>
 // )
//  return React.createElement('div',{id:'hello', className:'dummyClass'},React.createElement('b',{id:'bold'},'welcome to greet comp'))
}

export default Greet

//export const Greet = () => <h1><b>Hello BC</b></h1>
