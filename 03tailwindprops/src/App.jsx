import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    name:"animesh",
    age:22
  }
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-full mb-5 text-center'>Tailwind test</h1>
      <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
        <Card username="Animesh" btntext="click me"/>
        <Card username="Deepu"  />
      </div>
    </>
  )
}

export default App
