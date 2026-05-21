import { Route, Routes } from 'react-router'
import './App.css'
import Contact from './pages/Contact'
import Home from './pages/Home'


// alt+shift+o

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
