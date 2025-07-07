//Timer Component


import React from 'react'
import { useState,useEffect } from 'react';
function FirstEx() {
    const [seconds,setSeconds]=useState(0);
    useEffect(() => {
     const intervalid = setInterval(()=>{
        console.log("SetInterval Executed");
        setSeconds(prevSeconds => prevSeconds+1);
     },1000);
     return ()=>{
        console.log("Time to stop");
        clearInterval(intervalid);
     }
    },[]);
    
  return (
    <div>
        <h1>UseEffect first Example</h1>
        <h3>Counter: {seconds}</h3>
    </div>
  )
}

export default FirstEx;