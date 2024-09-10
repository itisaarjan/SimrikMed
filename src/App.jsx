import { useState } from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import ServiceList from './Components/ServiceList'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
    </Routes>
    </BrowserRouter>

    
    </>
  )
}

export default App
