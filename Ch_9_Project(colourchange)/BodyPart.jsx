import Header from "./Header.jsx";
import './BodyPart.css';
import React from 'react'
import { useState } from "react";
function BodyPart() {
     const [color, setColor] = useState("white");
  return (
     <div className="container" style={{ backgroundColor: color }}>
    <div>
        <div className="bottom">
        <button className="btn btn-danger" onClick={() => setColor("red")}>
          ClickMe
        </button>
        <button className="btn btn-success" onClick={() => setColor("green")}>
          ClickMe
        </button>
        <button className="btn btn-primary" onClick={() => setColor("blue")}>
          ClickMe
        </button>
        <button className="btn btn-warning" onClick={() => setColor("yellow")}>
          ClickMe
        </button>
        <button className="btn btn-secondary" onClick={() => setColor("grey")}>
          ClickMe
        </button>
        <button className="btn btn-info" onClick={() => setColor("skyblue")}>
          ClickMe
        </button>
      </div>
      <div>
       <Header/>
      </div>
    </div> 
  </div>
  )
}

export default BodyPart