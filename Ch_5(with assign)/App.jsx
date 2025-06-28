import React, { useState } from 'react'

function App() {
const [counter,setCounter] = useState(24);
const Addbtn = () => {
  if(counter<60)
  {
    console.log("Button is clicked and Age is added");
    setCounter(counter+1);
  }
  else
  {
    console.log("Tuhin has died");
  }
}

const Removebtn = () =>{
  if(counter>0)
  {
    console.log("Button is clicked and Age is decreased");
    setCounter(counter-1);
  }
  else
  {
    console.log("Tuhin has not yet born");
  }
  
}
  return (
    <div style={{textAlign: "center"}}>
      <h1>Chai aur Tuhin</h1>
      <h4>My age is: {counter}</h4>
      <p>Lets learn hooks and do our assignment</p>
      <button type="button" className="btn btn-success" onClick={Addbtn}>IncreaseMe</button>
      <br></br>
      <br></br>
      <button type="button" className="btn btn-danger" onClick={Removebtn}>DecreaseMe</button>
    </div>
  )
}

export default App;