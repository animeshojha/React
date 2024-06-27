import { useState } from 'react';
import './App.css'

function App() {
  const [counter,setCounter]=useState(15)
  const addValue=()=>{
    let newvalue=counter+1
    if(newvalue>20){
      alert("value should not be more than 20");
      return;
    }
    setCounter(newvalue);
  }
  const removeValue=()=>{
    let newvalue=counter-1;
    if(newvalue<0){
      alert("value should not be less than 0");
      return;
    }
    setCounter(newvalue);
  }
  return (
    <>
      <h2>Counter Value: {counter}</h2>
      <button
      onClick={addValue}
      >Add Value</button>
      <br/>
      <button
      onClick={removeValue}
      >Remove Value</button>
    </>
  )
}

export default App
