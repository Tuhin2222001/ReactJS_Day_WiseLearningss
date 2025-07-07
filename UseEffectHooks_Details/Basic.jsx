import React, { useState,useEffect } from 'react'

function App() {
  const [counter,setcounter]= useState(0);
const fun1 = () => {
  console.log("Increase Button is been clicked");
  setcounter(counter+1);
}
const fun2 = () =>{
  console.log("Decrease Button is been clicked");
  setcounter(counter-1);
}
/* 
01: When every time it's rendering: No dependency 
useEffect(() => {
  alert("I'll render every time as I am useEffect");
});
*/

/*
02: Only once it's rendering at the beginning: Empty dependencies list
useEffect(() => {
   alert("I'll render only on first render as I am useEffect");
}, []);
*/

/*
Example 03: Single item in dependency list which is counter
*/
useEffect(() => {
   alert("I'll render with count as I am useEffect");
}, [counter]);


  return (
    <div>
      <h1>Hello Tuhin</h1>
      <p>I am just practicing useState again</p>
      <h3>Counting : {counter}</h3>
      <br></br>
      <button onClick={fun1}>IncreaseMe</button>
      <br></br>
      <br></br>
      <button onClick={fun2}>DecreaseMe</button>
    </div>
  )
}

export default App;
