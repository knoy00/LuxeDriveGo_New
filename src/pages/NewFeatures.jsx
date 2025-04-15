import React from 'react'
import manAnimate from '../assets/images/man_animate.jpeg'
import GetStartedBtn from '../components/GetStartedBtn'
import Women from '../assets/images/women.png'
import DropOff from '../assets/images/Dropoff.jpeg'

function NewFeatures() {
  return (
    <div className='w-full bg-black text-white py-20 mt-0 font-helvetica px-10 sm:bg-amber-300 md:bg-green-400 lg:bg-blue-500'>
      <div className='max-w-[1200px] mx-auto'>
        <h1 className='text-[28px] font-semibold'>What's New?</h1>
        <div className='mt-10'>
            <div  className='flex flex-col justify-center items-center gap-x-30 mb-15'>
                <div className='w-full sm:h-[350px] md:h-[400px]'>
                    <img src={manAnimate} alt="Man in couch" className='w-100 rounded-4xl sm:w-200 sm:object-cover sm:h-full md:w-300 md:h-full'/>
                </div>
                <div>
                    <h1 className='text-[28px] font-regular my-8'>Ride Scheduling</h1>
                    <p className='text-[17px] md:text-[18px]'>
                        Plan ahead with ease - our new Ride Scheduling feature lets you book your trips in advance, so you're alwayas on time, every, time.
                    </p>
                    <div className='md:w-full md:flex md:justify-center'>
                        <GetStartedBtn />
                    </div>
                </div>
            </div>

            <div  className='flex flex-col justify-center items-center gap-y-10 mb-15'>
                <div>
                    <h1 className='text-[28px] font-regular my-8'>Safety PIN</h1>
                    <p className='text-[18px]'>
                        For added security, every ride now comes with a unique 4-digit Safety PIN. Before your trip begins, share this PIN with your driver to ensure you're in the right ride. This helps prevent ride mix-ups and enhances passenger safety.
                    </p>
                    <GetStartedBtn />
                </div>
                <div className='w-full sm:h-[350px]'>
                    <img src={Women} alt="Women Using Phone" className='w-100 rounded-4xl sm:w-200 sm:object-cover sm:h-full'/>
                </div>
            </div>

            <div  className='flex flex-col justify-center items-center gap-x-30 mt-15'>
                <div className='w-full sm:h-[350px]'>
                    <img src={DropOff} alt="Woman receiving package from a delivery" className='w-100 rounded-4xl sm:w-200 sm:object-cover sm:h-full'/>
                </div>
                <div>
                    <h1 className='text-[28px] font-regular my-8'>LuxeDrop</h1>
                    <p className='text-[18px]'>
                        Need to send a package quickly? LuxeDrop lets you book a driver to deliver your parcels, documents, or small items securely and on time. Whether it's a last-minute delivery or a planned drop-off, LuxeDrop ensures fast and reliable service.
                    </p>
                    <GetStartedBtn />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default NewFeatures
