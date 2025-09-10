import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [visible,setVisible] = useState(false);
  function handleVisible() {
    setVisible(true);
  }
    return (
    <div id="main">
      // Do not alter the main div
    {visible && <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>}
    <button id="click" onClick={() => handleVisible()}>click</button>
    </div>
  );
}


export default App;
