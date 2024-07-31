import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  let [counter,setCounter] =  useState(10)
   const UpValue = ()=>{
   if(counter<20) setCounter(counter++)
  }
  const DownValue = ()=>{
    if(counter>0) setCounter(counter--)
  }

  return (
    <>
    
      <h1 id='h1'>Counter Project</h1>
      <h2>{counter}</h2>
      <button 
      onClick={UpValue}>Up Value</button>

      <button 
      onClick={DownValue}>down value </button>
    
    
    </>
  )
}

export default App
