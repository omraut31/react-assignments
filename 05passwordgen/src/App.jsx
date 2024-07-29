import { useState, useCallback} from 'react'
function App() {
 const[lentgh , setlength]= useState(8)
 const[numberAllowed, setnumberAllowed]= useState(false)
 const[charAllowd, setcharAllowed]= useState(false)
 const[Password, setPassword]= useState("")

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if(numberAllowed) str+="0123456789"
    if(charAllowd) str+="@#$&*"
    
    for (let i = 1; i <= array.length; i++){
      let char = Math.floor(Math.random()*str.length+1) ;
      pass=str.charAt(char)    
    }
    setPassword(pass)
    
 },[lentgh,numberAllowed,charAllowd,setPassword])
      
  
    return (
    <>
      
      <div className='w-full max-w-md mx-auto shadow-md
      rounded-lg px-4 my-8 text-white bg-gray-800'>
        <h1 className='text-4xl text-center text-white py-3'>Password Generator</h1>
        
      <div className='flex shadow rounded-lg
      overflow-hidden mb-4 '>
      <input 
        type="text" 
        value={Password}
        className='outline-none w-full py-1 px-3 my-5 text-center'
        placeholder='password'
        readOnly
       />
       <button className='outline-none bg-blue-700 text-white px-1 py-1'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setlength(e.target.value)}} />
          <label>length {lentgh}</label>
        </div>
        
      </div>
      </div>
    </>
  )
}

export default App
