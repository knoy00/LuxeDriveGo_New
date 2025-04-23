import React from 'react'

import Woman from '../assets/images/woman_ebike.jpeg'
import Ebike from '../assets/images/ebike.png'
import Hand from '../assets/images/Hand.png'
import Riding from '../assets/images/Riding.jpeg'
import Payment from '../assets/images/Payment.jpeg'
import Scanning from '../assets/images/Scanning.png'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'




function GettingStartedElectric() {

    const ref3 = useRef(null);
    const isInView3 = useInView(ref3, {once: true});
  return (
    <div className='w-full  py-10'>
        <div className='px-10 md:mt-10 '>
            <motion.h1 className='text-[22px] lg:text-[30px] underline font-regular text-[#686868]'
            initial={{opacity: 0, filter: "blur(50px)"} }
            animate={isInView3 ? {opacity: 1, filter: "blur(0px)"} : {}}
            transition={{duration: .8, ease: 'easeInOut'}}
            ref={ref3}
            >
                Register as a Student
            </motion.h1>
            <motion.p ref={ref3} className='text-[16px] md:text-[20px] font-light text-[#8e8e8e] mt-5'
            initial={{opacity: 0, filter: "blur(50px)"} }
            animate={isInView3 ?{opacity: 1, filter: "blur(0px)"} : {}}
            transition={{duration: .8, ease: 'easeInOut'}}
            >
            Before your first ride, you’ll need to sign up using your campus student ID. This ensures only verified students have access to the bikes and helps us keep the programme secure and student-friendly.
            </motion.p>
        </div>

        <motion.h1 ref={ref3} className='text-[22px] lg:text-[30px] underline font-regular text-[#686868] mt-10 px-10' 
        initial={{opacity: 0, filter: "blur(50px)"} }
        animate={isInView3 ?{opacity: 1, filter: "blur(0px)"} : {}}
        transition={{duration: .8, ease: 'easeInOut'}}
        >
            Getting Started
        </motion.h1>
        <motion.p ref={ref3} className='text-[16px] md:text-[20px] font-light text-[#8e8e8e] mt-2 px-10'
        initial={{opacity: 0, filter: "blur(50px)"} }
        animate={isInView3 ?{opacity: 1, filter: "blur(0px)"} : {}}
        transition={{duration: .8, ease: 'easeInOut'}}
        >
            Learn how easy it is to find and unlock an electric bike on campus using our app. <br /> Whether you're heading to class or grabbing lunch, getting a ride is just a few taps away.
        </motion.p>
        <div className='mt-30'>
            <div className='flex  mt-10 space-x-20 border-b border-gray-200 pb-5'>
                <div className='w-80 h-80 contain-content rounded-4xl'>
                    <img src={Hand} loading='lazy' alt="Phone in hand" className='w-full'/>
                </div>                            <div>
                    <h3 className='text-[22px] font-bold text-[#1f1f1f]'>1. Find a Nearby E-Bike</h3>
                    <p className='text-[18px] font-light text-[#424242] px-6 mt-5 w-160'>
                        Use the app to locate the closest available electric bike on your campus. Docking stations are placed at key spots for easy acc
                    </p>
                </div>
            </div>
            <div className='flex  mt-10 space-x-20 border-b border-gray-200 pb-5'>
                <div className='w-80 h-80 contain-content rounded-4xl'>
                    <img src={Scanning} loading='lazy' alt="Man with phone" className='w-full'/>
                </div>                            <div>
                    <h3 className='text-[22px] font-bold text-[#1f1f1f]'>2. Unlock With Your Phone</h3>
                    <p className='text-[18px] font-light text-[#424242] px-6 mt-5 w-160'>
                        Once you’ve selected a bike, scan the QR code using the app to unlock it instantly. No keys, no hassle — just tap and r
                    </p>
                </div>
            </div>
            <div className='flex  mt-10 space-x-20 border-b border-gray-200 pb-5'>
                <div className='w-80 h-80 contain-content rounded-4xl'>
                    <img src={Riding} loading='lazy' alt="Man riding bike" className='w-full '/>
                </div>
                <div>
                    <h3 className='text-[22px] font-bold text-[#1f1f1f]'>3. Ride Accross Campus</h3>
                    <p className='text-[18px] font-light text-[#424242] px-6 mt-5 w-160'>
                        Cruise to your destination comfortably and quickly. Whether you're heading to class, the library, or just exploring — the ride is yo
                    </p>
                </div>
            </div>
            <div className='flex  mt-10 space-x-20 border-b border-gray-200 pb-5'>
                <div className='w-80 h-80 contain-content rounded-4xl'>
                    <img src={Woman} loading='lazy' alt="Bike" className='w-full'/>
                </div>
                <div>
                    <h3 className='text-[22px] font-bold text-[#1f1f1f]'>4. Dock When You're Done</h3>
                    <p className='text-[18px] font-light text-[#424242] px-6 mt-5 w-160'>
                        Return the e-bike to any official docking station on campus. Lock it securely to end your trip and stop the ti
                    </p>
                </div>
            </div>
            <div className='flex  mt-10 space-x-20 border-b border-gray-200 pb-5'>
                <div className='w-80 h-80 contain-content rounded-4xl'>
                    <img src={Payment} loading='lazy' alt="Payment" className='w-full'/>
                </div>                            <div>
                    <h3 className='text-[22px] font-bold text-[#1f1f1f]'>5. Pay Seamlessly</h3>
                    <p className='text-[18px] font-light text-[#424242] px-6 mt-5 w-160'>
                        Use the app to locate the closest available electric bike on your campus. Docking stations are placed at key spots for easy acc
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GettingStartedElectric
