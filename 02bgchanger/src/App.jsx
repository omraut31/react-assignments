
import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("white")

  return (
    <div className='w-full h-screen duration-200'
      style={{ backgroundColor: color }}
    >

      <div className='fixed flex flex-wrap justify-center
      bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center
        gap-3 shadow-2xl bg-white px-3 py-2
        rounded-3xl'>

          <button
            onClick={() => setColor("red")}
            className='outline-none px-4 py-1
          rounded-full text-white shadow-lg'
            style={{ backgroundColor: "red" }}>Red</button>
          <button
            onClick={() => setColor("black")}
            className='outline-none px-4 py-1
          rounded-full text-white shadow-lg'
            style={{ backgroundColor: "black" }}>black</button>
          <button
            onClick={() => setColor("Green")}
            className='outline-none px-4 py-1
          rounded-full text-white shadow-lg'
            style={{ backgroundColor: "Green" }}>Green</button>
          <button
            onClick={() => setColor("Blue")}
            className='outline-none px-4 py-1
          rounded-full text-white shadow-lg'
            style={{ backgroundColor: "Blue" }}>Blue</button>
          <button
            onClick={() => setColor("Purple")}
            className='outline-none px-4 py-1
          rounded-full text-white shadow-lg'
            style={{ backgroundColor: "Purple" }}>Purple</button>

        </div>
      </div>
    </div>
  )
}

export default App
