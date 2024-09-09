import { useState } from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <HeroSection/>
    </>
  )
}

export default App
