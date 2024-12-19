import React from 'react'
import img1 from '../assets/weightLoss/w14.jpg'
import img2 from '../assets/weightLoss/wl1.webp';
import img3 from '../assets/weightLoss/wl2.jpeg';
import img4 from '../assets/weightLoss/wl3.avif';
import img5 from '../assets/weightLoss/wl5.webp';
import img6 from '../assets/weightLoss/wl6.avif';

function WeightLoss() {
  return (
    <div className='flex flex-col items-center justify-center w-[90%] sm:w-[80%] mx-auto'>
        <div className='text-black mt-8 text-2xl sm:text-3xl'>Weight Loss</div>
        <div className='flex flex-col items-center justify-center'>
            <hr className="w-full my-4 border-gray-400" />

            {/* Image grid - adjusted for mobile */}
            <div className='flex flex-col sm:flex-row items-center mt-8 justify-between mb-8 space-y-4 sm:space-y-0 sm:space-x-4'>
                <div className='w-full sm:w-[33%] h-[200px]'>
                    <img src={img1} alt="image1" className='w-full h-full object-cover'/>
                </div>
                <div className='w-full sm:w-[33%] h-[200px]'>
                    <img src={img2} alt="image2" className='w-full h-full object-cover'/>
                </div>
                <div className='w-full sm:w-[33%] h-[200px]'>
                    <img src={img3} alt="image3" className='w-full h-full object-cover'/>
                </div>
            </div>

            <h2 className='text-black mx-auto '>
                <div>
                  <h1 className='text-3xl sm:text-4xl flex flex-col items-center justify-center mb-4'>Semaglutide / Pyridoxine (Vitamin B6)</h1>
                  <p className='w-[90%] sm:w-[65%] text-left m-auto mb-4'>
                    Semaglutide is a synthetic GLP-1 analog engineered to resist degradation by the enzyme dipeptidyl peptidase 4 (DPP-4), allowing it to stay active in the body longer than its natural counterpart. This extended action has demonstrated significant benefits in weight loss and glucose control. It is an FDA-approved medication for weight loss.  
                  </p>
                  <div>
                    <h1 className='text-center m-auto'>
                      <b>Benefits of Semaglutide therapy include: </b>
                    </h1>
                    <ul className='text-left m-auto w-[70%] sm:w-[50%] list-disc'>
                      <li>Healthy Weight Loss</li>
                      <li>Appetite Control</li>
                      <li>Balanced glucose levels</li>
                      <li>Improved meal portion control</li>
                      <li>Reduced Food Cravings</li>
                      <li>Hemoglobin A1C (Hgb A1C) reduction</li>
                      <li>Decreased risk of heart attack and stroke</li>
                    </ul>
                  </div>

                  <h1 className='text-3xl sm:text-4xl flex flex-col items-center justify-center mb-4 mt-16'>Tirzepatide / Pyridoxine (Vitamin B6)</h1>
                  <p className='w-[90%] sm:w-[65%] text-left m-auto mb-4'>
                    Tirzepatide, a GIP and GLP-1 receptor agonist, is a 39-amino-acid modified peptide that has demonstrated significant potential in aiding weight loss. It selectively binds to and activates GIP and GLP-1 receptors, helping suppress appetite and reduce food intake. When combined with a healthy diet and exercise, Tirzepatide enhances the weight loss process, promotes balanced glucose levels, and improves overall metabolic health. It is FDA-approved for weight loss, underscoring its effectiveness as a treatment for obesity.
                  </p>

                  <div>
                    <h1 className='text-center m-auto'>
                      <b>Benefits of Tirzepatide therapy include: </b>
                    </h1>
                    <ul className='text-left m-auto w-[70%] sm:w-[50%] list-disc'>
                      <li>Proven Healthy Weight Loss</li>
                      <li>Balanced glucose levels</li>
                      <li>Reduced food cravings</li>
                      <li>Hemoglobin A1C (Hgb A1C) reduction</li>
                      <li>Appetite Control</li>
                      <li>Increased Energy</li>
                      <li>Supports healing of hair, skin, and nails</li>
                    </ul>
                  </div>

                  <p>
                    <h1 className='text-center w-[90%] sm:w-[65%] m-auto mt-8 mb-4'>
                      <b className='text-xl'>SimrikMed Weight Loss Pricing Schedule:</b>
                    </h1>
                    <ul className='text-left m-auto w-[90%] sm:w-[65%] list-disc'>
                      <li><b>Semaglutide / Pyridoxine (Vitamin B6) Weekly Injection</b> - $250 per month </li>
                      <li><b>Semaglutide / Pyridoxine (Vitamin B6) Weekly Injection</b> - $500 for three months ($250 discount)</li>
                      <li><b>Semaglutide / Cyanocobalamin (Vitamin b12) Sublingual (Under Tongue) Daily</b> - $250 per month</li>
                      <li><b>Semaglutide / Cyanocobalamin (Vitamin b12) Sublingual (Under Tongue) Daily</b> - $500 for three months ($250 discount)</li>
                      <li><b>Tirzepatide Weekly Injection</b> - $300 per month</li>
                      <li><b>Tirzepatide Weekly Injection</b> - $800 for three months ($250 discount)</li>
                    </ul>
                  </p>

                  <h1 className='text-3xl sm:text-4xl flex flex-col items-center justify-center mb-4 mt-4'>Contrave</h1>
                  <p className='w-[90%] sm:w-[65%] text-left m-auto mb-4'>
                    It is <b>FDA-approved</b> weight loss medication that combines <b>naltrexone</b> and <b>bupropion</b> help suppress appetite and reduce cravings. When used alongside a healthy diet and exercise, <b>it promotes significant healthy weight loss</b>, improves metabolic health, and aids in the long-term management of weight. Contrave is particularly beneficial for individuals struggling with overeating and unhealthy food cravings.
                    <br />
                    <b>Pricing</b>: $199 per month
                  </p>

                </div>
            </h2>

            <div className='text-black mt-4 flex flex-col items-start justify-center'>
                {/* {props.content} */}
            </div>

            <div>
                <h1 className='text-1xl text-[black]'>Our services are HIPAA compliant</h1>
            </div>
            <div>
              <h1 className='text-1xl mt-8 text-[blue] text-center'>
                This pricing schedule offers a variety of discounts to support your weight loss journey at SimrikMed. We will deliver medications to your door with supplies you need. 
              </h1>
            </div>

            <div className='flex flex-col sm:flex-row items-center mt-8 justify-between space-y-4 sm:space-y-0 sm:space-x-4'>
                <div className='w-full sm:w-[33%] h-[200px]'>
                    <img src={img4} alt="image4" className='w-full h-full object-cover'/>
                </div>
                <div className='w-full sm:w-[33%] h-[200px]'>
                    <img src={img5} alt="image5" className='w-full h-full object-cover'/>
                </div>
                <div className='w-full sm:w-[33%] h-[200px]'>
                    <img src={img6} alt="image6" className='w-full h-full object-cover'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WeightLoss;
