import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './pages/Home';
import PrimaryCare from './pages/PrimaryCare';
import WeightLoss from './pages/WeightLoss';
import PhysicalExam from './pages/PhysicalExam';
import WomenWellness from './pages/WomenWellness';
import ChronicMedical from './pages/ChronicMedical';
import RapidTests from './pages/RapidTests';
import VirtualCare from './pages/VirtualCare';
import InHouseVaccination from './pages/InHouseVaccination';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/services/primary-care-services' element={<PrimaryCare />} /> */}
        <Route path='/services/medical-weight-loss' element={<WeightLoss />} />
        {/* <Route path='/services/physical-exams' element={<PhysicalExam />} /> */}
        {/* <Route path='/services/women-wellness-family-planning' element={<WomenWellness />} /> */}
        {/* <Route path='/services/chronic-medical-conditions' element={<ChronicMedical />} /> */}
        {/* <Route path='/services/rapid-lab-tests-screening' element={<RapidTests />} /> */}
        <Route path='/services/virtual-care' element={<VirtualCare />} />
        {/* <Route path='/services/in-house-vaccination' element={<InHouseVaccination />} /> */}
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<ContactUs />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
