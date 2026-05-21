import { useState } from 'react'
import './App.css'

alt+shift+o

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path = "/" element = {<Home/>} />
      <Route path = "/" element = {<Contact />} />
    </Routes>
    </>
  
  )
}

export default App
