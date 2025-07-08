import React from "react";
import { useState, useEffect, useRef } from "react";
function UseRefEx02() {
  const [counter, setcounter] = useState(0);
  //01. How to create the reference for useRef
  let btn0 = useRef();
  let btn1 = useRef();
  const Add = () => {
    console.log("Add button is clicked");
    btn1.current.style.backgroundColor = "yellow";
    setcounter(counter + 1);
  };
  const Decrement = () => {
    console.log("Dec button is clicked");
    {
      /*03. How to access and change the reference */
    }
    btn0.current.style.backgroundColor = "red";
    setcounter(counter - 1);
  };
  //Re-rendering the UseEffect here:
  useEffect(() => {
    console.log("UseEffect get's rerendered again");
  });

  return (
    <div>
      <h1>Tuhin is doing work</h1>
      <h3>Counter: {counter}</h3>
      {/*02. How to link the reference in useRef */}
      <button ref={btn0} onClick={Add}>
        ClickMe to Add
      </button>
      <br></br>
      <br></br>
      <button ref={btn1} onClick={Decrement}>
        ClickMe to Decrement
      </button>
    </div>
  );
}

export default UseRefEx02;
