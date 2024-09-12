import { useState } from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import ServiceList from './Components/ServiceList'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import PrimaryCare from './pages/PrimaryCare';
import WeightLoss from './pages/weightLoss';
import PhysicalExam from './pages/PhysicalExam';
import WomenWellness from './pages/WomenWellness';
import ChronicMedical from './pages/ChronicMedical';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/services/primary-care-services' element={<PrimaryCare/>} />
      <Route path='/services/medical-weight-loss' element={<WeightLoss/>}/>
      <Route path='/services/physical-exams' element={<PhysicalExam/>}/>
      <Route path='/services/woman-wellness-family-planning' element={<WomenWellness/>}/>
      <Route path='/services/chronic-medical-conditions' element={<ChronicMedical/>}/>
    </Routes>

    </BrowserRouter>

    
    </>
  )
}

export default App
