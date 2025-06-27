import React from 'react'
import './Time_Date.css'
function Time_Date() {
    const a = new Date();
  return (
    <div className='time_date'>
        <h4>Today's Date : {a.toLocaleDateString()}{" "}Today's Time : {a.toLocaleTimeString()} </h4>
    </div>
  )
}

export default Time_Date;