import React, { useState } from "react";
import UpdatedComponent from "./withCounter";

function ClickCounter(props) {
  const[count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count+1)
  }

  return (
    <div>
      <button onClick={incrementCount}>
        {props.name} Click {count} times
      </button>
    </div>
  );
}
export default UpdatedComponent(ClickCounter);

// import React, { Component } from "react";
// import UpdatedComponent from "./withCounter";

// class ClickCounter extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0
//     };
//   }

//   incrementCount = () => {
//     this.setState((prevState) => {
//       return { count: prevState.count + 1 };
//     });
//   };

//   render() {
//     const count = this.state.count;
//     return (
//       <div>
//         <button onClick={this.incrementCount}>{this.props.name} Click {count} times</button>
//       </div>
//     );
//   }
// }
