import React from "react";
import { useState , useEffect, useRef} from "react";

function UseRefEx01() {
  const [count, setCount] = useState(0);
//     let val = 1;
//   const handeler = () => {
//     val = val+1;
//     console.log("The value of val",val);
//     setCount(count + 1);
//   };
  let val = useRef(0);
  const handeler = () => {
    val.current = val.current+1;
    console.log("The value of val",val.current);
    setCount(count + 1);
  };
  useEffect(() => {
    console.log("Again I rendered ");
  });
  
  return (
    <>
      <div>
        <button onClick={handeler}>Increment</button>
      </div>

      <div>Count: {count}</div>
    </>
  );
}

export default UseRefEx01;
