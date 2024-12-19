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
import RapidTests from './pages/RapidTests';
import VirtualCare from './pages/VirtualCare';
import InHouseVaccination from './pages/InHouseVaccination';
import Footer from './Components/Footer';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter >
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      {/* <Route path='/services/primary-care-services' element={<PrimaryCare/>} /> */}
      <Route path='/services/medical-weight-loss' element={<WeightLoss/>}/>
      <Route path='/services/xray' element={<PhysicalExam/>}/>
      {/* <Route path='/services/woman-wellness-family-planning' element={<WomenWellness/>}/> */}
      {/* <Route path='/services/chronic-medical-conditions' element={<ChronicMedical/>}/> */}
      <Route path='/services/labtests' element={<RapidTests/>}/>
      <Route path='/services/virtual-care' element={<VirtualCare/>}/>
      {/* <Route path='/services/in-house-vaccination' element={<InHouseVaccination/>}/> */}
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>

    
    </>
  )
}

export default App
