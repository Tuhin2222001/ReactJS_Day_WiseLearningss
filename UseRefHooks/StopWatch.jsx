import React from 'react'
import { useState,useRef} from "react";
function StopWatch() {
  const [counter, setCounter] = useState(0);
  let timerref = useRef(null)
  const startTimer =()=>{
    timerref.current=setInterval(() => {
        setCounter(prev => prev + 1)
    }, 1000);
  }
  const stopTimer =()=>{
    clearInterval(timerref.current);
    timerref.current = null;
  }
  const resetTimer =()=>{
    stopTimer();
    setCounter(0);
  }
  return (
    <>
        <h1>Stop Watch counts: {counter}</h1>
        <div>
            <button onClick={startTimer}>Start</button>
            <br></br> <br></br>
        </div>
        <div>
            <button onClick={stopTimer}>Stop</button>
             <br></br> <br></br>
        </div>
        <div>
            <button onClick={resetTimer}>Reset</button>
        </div>
    </>
  )
}

export default StopWatch;