import React, { useState,useEffect } from 'react'
function App() {
  const [counter,setcounter]= useState(0);
  const [total,settotal]= useState(1);
const fun1 = () => {
  console.log("Increase Button is been clicked");
  setcounter(counter+1);
}
const fun2 = () =>{
  console.log("Decrease Button is been clicked");
  settotal(total+1);
}
useEffect(() => {
   alert("I'll render with count as I am useEffect");
}, [counter,total]);

  return (
    <>
      <h1>Hello Tuhin</h1>
      <p>I am just practicing useState 01 with useEffect</p>
      <h3>Counting Counter: {counter}</h3>
      <br></br>
      <button onClick={fun1}>CountInc</button>
      <br></br>
       <h1>Hello Tuhin 02</h1>
      <p>I am just practicing useState 02 with UseEffect</p>
      <h3>Counting Total: {total}</h3>
      <br></br>
      <button onClick={fun2}>TotalInc</button>
      <br></br>
    </>
  )
}
export default App;
