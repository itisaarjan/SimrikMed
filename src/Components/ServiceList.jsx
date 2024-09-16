import React from 'react'
import weightLoss from "../assets/weightloss.jpeg"
import ServiceIcon from './ServiceIcon'
import primarycare from '../assets/primarcycare.jpg'
import familyPlannning from '../assets/familyPlanning.jpg'
import physicalExams from "../assets/PhysicalExams.jpg"
import chronic from '../assets/chronic.jpg'
import rapidlab from '../assets/rapidlabtests.webp'
import vaccination from '../assets/vaccination.jpg'
import virtualCare from '../assets/virtualcare.png'
import medicalClearence from '../assets/man-signing-medical-clearance-forms copy.webp'
import ivFluids from '../assets/iv-fluids.avif'
import { Link } from 'react-router-dom'

function ServiceList() {
  return (
    <>
      <div className='mt-16 flex flex-col items-center justify-center gap-[2rem] ml-12 mr-16'>
        <h1 className='text-4xl text-black'>Services</h1>
        <hr/>
        <div className='grid grid-cols-1 gap-[2rem] lg:grid-cols-4'>
          {/* <Link to='/services/primary-care-services'>
            <ServiceIcon image={primarycare} title="Primary Care Services"/>
          </Link> */}
          <Link to='/services/medical-weight-loss'>
            <ServiceIcon image={weightLoss} title="Medical Weight Loss"/>
          </Link>
          {/* <Link to='/services/woman-wellness-family-planning'>
            <ServiceIcon image={familyPlannning} title="Woman Wellness & Family Planning"/>
          </Link> */}
          {/* <Link to='/services/physical-exams'>
            <ServiceIcon image={physicalExams} title="Physical Exams"/>
          </Link> */}
          {/* <Link to='/services/chronic-medical-conditions'>
            <ServiceIcon image={chronic} title="Chronic Medical Conditions"/>
          </Link> */}
          {/* <Link to='/services/rapid-lab-tests-screening'>
            <ServiceIcon image={rapidlab} title="Rapid Lab Tests & Screening"/>
          </Link> */}
          {/* <Link to='/services/in-house-vaccination'>
            <ServiceIcon image={vaccination} title="In-House Vaccination"/>
          </Link> */}
          <Link to='/services/virtual-care'>
            <ServiceIcon image={virtualCare} title="Virtual Care"/>
          </Link>
          {/* <Link to='/services/medical-clearance'>
            <ServiceIcon image={medicalClearence} title="Medical Clearance"/>
          </Link> */}
          {/* <Link to='/services/iv-fluids'>
            <ServiceIcon image={ivFluids} title="IV Fluids"/>
          </Link> */}
        </div>
      </div>
    </>
  )
}

export default ServiceList
