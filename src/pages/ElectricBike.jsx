import React from 'react'
import { motion, useInView, } from 'framer-motion'
import Navbar from '../components/Navbar'
import Animate from './Animate'
import ScrollToTop from '../components/ScrollToTop'

import handlebars from '../assets/images/BikeBars.png'
import Woman from '../assets/images/woman_ebike.jpeg'
import Ebike from '../assets/images/ebike.png'
import Hand from '../assets/images/Hand.png'
import Riding from '../assets/images/Riding.jpeg'
import Payment from '../assets/images/Payment.jpeg'
import Scanning from '../assets/images/Scanning.png'
// import ebike_mono from '../assets/images/Ebike_mono.jpeg'
import {useRef, useState} from 'react'
import LoaderScreen from '../components/LoaderScreen'

const imagesToLoad = 2;
function ElectricBike() {
    const [isLoaded, setIsLoaded] = useState(0);
    const handleImgLoad = () => {
        setIsLoaded((prev) => prev + 1)
    }
    const allImagesLoaded = isLoaded === imagesToLoad;
    console.log("allImagesLoaded", allImagesLoaded)

    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const isInView2 = useInView(ref2, { once: true });
    const isInView3 = useInView(ref3, { once: true });

  return (
    <>
        <img src={handlebars} alt="Handlebars" onLoad={handleImgLoad} className='hidden'/>
        <img src={Ebike} alt="Ebike" onLoad={handleImgLoad} className='hidden'/>
        {!allImagesLoaded && <LoaderScreen />}
        
        {allImagesLoaded && (
            <div>
                <ScrollToTop />
                <Navbar />
                <div className='w-full font-helvetica'>
                    <div className='max-w-[1400px] mx-auto mt-20 '>
                        <div className='text-center  bg-[#efefef] pt-10 px-20 rounded-4xl'>
                            <motion.h1 className='text-[50px] w-full max-w-2xl mx-auto font-semibold text-[#424242] leading-[4rem] mb-3'
                            initial={{opacity: 0, y: 200, filter: "blur(30px)"}}
                            animate={{opacity:1, y: 0, filter: "blur(0px)"}}
                            transition={{duration: .6, ease: 'easeOut'}}
                            >
                            Our Electric Bike Program for campuses is here
                            </motion.h1>
                            <motion.p className='text-[22px] text-[#424242] mb-2 '
                            initial={{opacity: 0, y: 200, filter: "blur(30px)"}}
                            animate={{opacity:1, y: 0, filter: "blur(0px)"}}
                            transition={{duration: .6, ease: 'easeOut'}}
                            >
                                Move around campus with ease and reduce your carbon footprint
                            </motion.p>
                            <motion.p className='text-[20px] text-[#424242] mb-10'
                            initial={{opacity: 0, y: 200, filter: "blur(50px)"}}
                            animate={{opacity:1, y: 0, filter: "blur(0px)"}}
                            transition={{duration: .8, ease: 'easeOut'}}
                            >
                                No more waiting, no more stress
                            </motion.p>

                            <div className='w-full '>
                                <motion.img 
                                    // loading='lazy' 
                                    src={handlebars} 
                                    alt="Bike Handle Bars" 
                                    className='cover'
                                    initial={{opacity: 0, scale: 0, filter: "blur(5px)"}}
                                    animate={{opacity:1, scale: 1, filter: "blur(0px)"}}
                                    transition={{duration: 1, ease: 'easeOut'}}
                                />
                            </div>
                    
                        </div>

                        <div className='w-full flex justify-center items-center space-x-10 mt-20 text-[#444] py-10'>
                        <div className='w-full'>
                            <motion.h1 
                            ref={ref2}
                            className='text-5xl font-semibold mb-10'
                            initial={{opacity: 0, y: 200, filter: "blur(50px)"} }
                            animate={isInView2 ? {opacity: 1, y: 0, filter: "blur(0px)"}: {opacity: 0, y: 200,}}
                            transition={{duration: .8, ease: 'easeInOut'}}
                            >
                                How it works
                            </motion.h1>
            
                            <motion.p
                             className='text-xl font-light text-[#424242]'
                             ref={ref2}
                             initial={{opacity: 0, y: 200, filter: "blur(50px)"} }
                             animate={isInView2 ? {opacity: 1, y: 0, filter: "blur(0px)"}: {opacity: 0, y: 200, }}
                             transition={{duration: .8, ease: 'easeInOut'}}
                            >
                            
                                Getting around campus just got easier. Find a nearby e-bike using the app, unlock it, and ride wherever you need to go — fast, easy, and affordable. <br/> Scroll to see how it works or hop on now by picking your start and end points.
                            </motion.p>
                        </div>
                        <motion.img src={Ebike} alt="E-bike" className='w-120 rounded-3xl'
                        ref={ref2}
                        initial={{opacity: 0, filter: "blur(50px)"}}
                        animate={isInView2 ? {opacity:1, filter: "blur(0px)"} : {}}
                        transition={{duration: .5, ease: 'easeInOut'}}
                        />
                        </div>

                        <div className='w-full  py-10'>
                    <div className='mt-10 '>
                        <motion.h1 className='text-[30px] underline font-regular text-[#686868]'
                        initial={{opacity: 0, filter: "blur(50px)"} }
                        animate={isInView3 ? {opacity: 1, filter: "blur(0px)"} : {}}
                        transition={{duration: .8, ease: 'easeInOut'}}
                        ref={ref3}
                        >
                            Register as a Student
                        </motion.h1>
                        <motion.p ref={ref3} className='text-[20px] font-light text-[#8e8e8e] mt-5'
                        initial={{opacity: 0, filter: "blur(50px)"} }
                        animate={isInView3 ?{opacity: 1, filter: "blur(0px)"} : {}}
                        transition={{duration: .8, ease: 'easeInOut'}}
                        >
                            Before your first ride, you’ll need to sign up using your campus student ID. This ensures only verified students have access to the bikes and helps us keep the programme secure and student-friendly.
                        </motion.p>
                    </div>

                    <motion.h1 ref={ref3} className='text-[30px] font-regular text-[#686868] mt-10' 
                    initial={{opacity: 0, filter: "blur(50px)"} }
                    animate={isInView3 ?{opacity: 1, filter: "blur(0px)"} : {}}
                    transition={{duration: .8, ease: 'easeInOut'}}
                    >
                        Getting Started
                    </motion.h1>

                    <motion.p ref={ref3} className='text-[20px] font-light text-[#8e8e8e] mt-2'
                    initial={{opacity: 0, filter: "blur(50px)"} }
                    animate={isInView3 ?{opacity: 1, filter: "blur(0px)"} : {}}
                    transition={{duration: .8, ease: 'easeInOut'}}
                    >
                        Learn how easy it is to find and unlock an electric bike on campus using our app. <br /> Whether you're heading to class or grabbing lunch, getting a ride is just a few taps away.
                    </motion.p>


                    
                    <div className='mt-30'>
                        <div className='flex  mt-10 space-x-20 border-b border-gray-200 pb-5'>
                        -   <div className='w-80 h-80 contain-content'>
                                <img src={Hand} loading='lazy' alt="Phone in hand" className='w-full'/>
                            </div>                            <div>
                                <h3 className='text-[22px] font-bold text-[#1f1f1f]'>1. Find a Nearby E-Bike</h3>
                                <p className='text-[18px] font-light text-[#424242] px-6 mt-5 w-160'>
                                    Use the app to locate the closest available electric bike on your campus. Docking stations are placed at key spots for easy access.

                                </p>
                            </div>
                        </div>
                        
                        <div className='flex  mt-10 space-x-20 border-b border-gray-200 pb-5'>
                            <div className='w-80 h-80 contain-content'>
                                <img src={Scanning} loading='lazy' alt="Man with phone" className='w-full'/>
                            </div>                            <div>
                                <h3 className='text-[22px] font-bold text-[#1f1f1f]'>2. Unlock With Your Phone</h3>
                                <p className='text-[18px] font-light text-[#424242] px-6 mt-5 w-160'>
                                    Once you’ve selected a bike, scan the QR code using the app to unlock it instantly. No keys, no hassle — just tap and ride.

                                </p>
                            </div>
                        </div>
                        
                        <div className='flex  mt-10 space-x-20 border-b border-gray-200 pb-5'>
                            <div className='w-80 h-80 contain-content'>
                                <img src={Riding} loading='lazy' alt="Man riding bike" className='w-full'/>
                            </div>                            <div>
                                <h3 className='text-[22px] font-bold text-[#1f1f1f]'>3. Ride Accross Campus</h3>
                                <p className='text-[18px] font-light text-[#424242] px-6 mt-5 w-160'>
                                    Cruise to your destination comfortably and quickly. Whether you're heading to class, the library, or just exploring — the ride is yours.

                                </p>
                            </div>
                        </div>
                        
                        <div className='flex  mt-10 space-x-20 border-b border-gray-200 pb-5'>
                            <div className='w-80 h-80 contain-content'>
                                <img src={Woman} loading='lazy' alt="Bike" className='w-full'/>
                            </div>
                            <div>
                                <h3 className='text-[22px] font-bold text-[#1f1f1f]'>4. Dock When You're Done</h3>
                                <p className='text-[18px] font-light text-[#424242] px-6 mt-5 w-160'>
                                    Return the e-bike to any official docking station on campus. Lock it securely to end your trip and stop the timer.

                                </p>
                            </div>
                        </div>
                        
                        <div className='flex  mt-10 space-x-20 border-b border-gray-200 pb-5'>
                            <div className='w-80 h-80 contain-content'>
                                <img src={Payment} loading='lazy' alt="Payment" className='w-full'/>
                            </div>                            <div>
                                <h3 className='text-[22px] font-bold text-[#1f1f1f]'>5. Pay Seamlessly</h3>
                                <p className='text-[18px] font-light text-[#424242] px-6 mt-5 w-160'>
                                    Use the app to locate the closest available electric bike on your campus. Docking stations are placed at key spots for easy access.

                                </p>
                            </div>
                        </div>
                        
                    </div>
                        </div>

                
                    </div>
                    <Animate />
                    <LoaderScreen />
                </div>
            </div>
        )}
    </>
  )
}

export default ElectricBike
