import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import BgChanger from "./BgChanger"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <BgChanger />

      </div>
    </>
  )
}

export default App
