import { useState } from 'react'

import './App.css'
import HelloWorldClass from './class'
import HelloWorldFunction from './function'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HelloWorldClass/>
      <HelloWorldFunction/> 
      <h1>Vite + React</h1>
    </>
  )
}

export default App
