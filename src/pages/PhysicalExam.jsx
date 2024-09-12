import React from 'react'
import ServicePage from '../Components/ServicePage'

function PhysicalExam() {
  return (
    <ServicePage 
    title="physical Exam" 
    header={<h1>Overview</h1>}
    content={<>
    <ul>
        <li>Annual Exam: Men, Women & Children</li>
        <li>School</li>
        <li>Sports</li>
        <li>Work</li>
        <li>DOT</li>
        <li>Immigration & many more..</li>
    </ul>
    <h1 className='mt-8'>PHYSICAL EXAMINATION</h1>
    <hr className='w-full my-4 border-gray-400'/>
    <div className='flex flex-col items-center justify-center'>
        <h2 className='mt-4 mb-4'>Overview</h2>
        <p>A routine physical examination ensures that you stay in good health. A physical can also be a preventive step. It allows you to catch up on vaccinations or detect a serious condition, like cancer or diabetes, before it causes problems. During a routine physical, your doctor can also check vitals, including weight, heart rate, and blood pressure.</p>
        <h1 className='mt-4 mb-4'>What does a physical exam address?</h1>
        <p>Your doctor will use a physical exam to see how your body is performing. Depending on your personal health history, your doctor may choose to focus on certain areas. If you have a family history of heart disease, for example, you may receive additional blood pressure checks, blood tests, and diabetes and cholesterol screenings.
            <br/>Based on test results, age, and personal health history, the exam is also an opportunity to discuss future prevention measures with your doctor.</p>
        
    </div>
    </>}
    />
  )
}

export default PhysicalExam