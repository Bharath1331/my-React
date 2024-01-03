import React from "react";
import UpdatedComponent from "./withCounter";

function HoveredCounter({count,incrementCount,name}) {
  
  //const {count, incrementCount} = props;

  return (
    <div>
      <button onMouseOver={incrementCount}>{name} Click {count} times
      </button>
    </div>
  );
}

export default UpdatedComponent(HoveredCounter);

// const[count, setCount] = useState(0);

  // const incrementCount = () => {
  //   setCount(count+1)
  // }

