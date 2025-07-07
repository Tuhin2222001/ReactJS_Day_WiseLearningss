//Logger Component

import React from 'react'
import { useState,useEffect } from 'react';
function FirstEx() {
    const [counter,setCounter]=useState(0);
    const inc = () =>{
        console.log("Button is clicked");
        setCounter(counter+1);
    }
    useEffect(() => {
      console.log("UseEffect is applied and increasing",counter);
    });
    
  return (
    <div>
        <h1>UseEffect first Example</h1>
        <h3>Counter: {counter}</h3>
        <button onClick={inc}>Click Me</button>
    </div>
  )
}

export default FirstEx;