import React,{useState} from "react";

const UpdatedComponent = (OriginalComponent, incrementNumber) => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + incrementNumber);
  };

  const NewComponent = () => {
    return (
      <OriginalComponent count={count} incrementCount={incrementCount} name="Bharath"
      />
    );
  };

  return NewComponent;
};
export default UpdatedComponent;
