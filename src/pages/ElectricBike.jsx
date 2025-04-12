import React from 'react'
import { motion, useInView } from 'framer-motion'
import Navbar from '../components/Navbar'
import handlebars from '../assets/images/BikeBars.webp'
import Woman from '../assets/images/woman_ebike.jpeg'
import Ebike from '../assets/images/ebike.png'
import {useRef} from 'react'
function ElectricBike() {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);

    const isInView1 = useInView(ref1, { once: true });
    const isInView2 = useInView(ref2, { once: true });
    const isInView3 = useInView(ref3, { once: true });
  return (
    <div>
        <Navbar />
        <div className='w-full font-helvetica'>
            <div className='max-w-[1400px] mx-auto mt-20 '>
                <div className='text-center  bg-[#efefef] pt-10 px-20 rounded-4xl'>
                    <motion.h1 className='text-[50px] w-full max-w-2xl mx-auto font-semibold text-[#424242] leading-[4rem]'
                    initial={{opacity: 0, y: 200}}
                    animate={{opacity:1, y: 0}}
                    transition={{duration: 1.4, ease: 'easeOut'}}
                    >
                        Our Electric Bike Program for campuses is here
                    </motion.h1>
                    <motion.p className='text-[22px] text-[#424242]'
                    initial={{opacity: 0, y: 200}}
                    animate={{opacity:1, y: 0}}
                    transition={{duration: 1.4, ease: 'easeOut'}}
                    >
                        Move around campus with ease and reduce your carbon footprint
                    </motion.p>
                    <motion.p className='text-[20px] text-[#424242] mb-10'
                    initial={{opacity: 0, y: 200}}
                    animate={{opacity:1, y: 0}}
                    transition={{duration: 1.4, ease: 'easeOut'}}
                    >
                        No more waiting, no more stress
                    </motion.p>
                    <motion.img 
                        loading='lazy' 
                        src={handlebars} 
                        alt="Bike Handle Bars" 
                        className='cover'
                        initial={{opacity: 0, scale: 0}}
                        animate={{opacity:1, scale: 1}}
                        transition={{duration: 1.5, ease: 'easeOut'}}
                    />
                </div>

                <div className='w-full flex justify-center items-center space-x-10 mt-20 text-[#444]'>
                    <div className=''>
                        <motion.h1 
                        ref={ref1}
                        className='text-5xl font-semibold mb-10'
                        initial={{opacity: 0, y: 200}}
                        animate={isInView1 ? {opacity: 1, y: 0}: {opacity: 0, y: 200}}
                        transition={{duration: 1.5, ease: 'easeInOut'}}
                        >
                            How it works
                        </motion.h1>

                        <motion.p
                         className='text-xl font-light text-[#424242]'
                         ref={ref2}
                         initial={{opacity: 0, y: 200}}
                         animate={isInView2 ? {opacity: 1, y: 0}: {opacity: 0, y: 200}}
                         transition={{duration: 1.5, ease: 'easeInOut'}}
                        >
                        
                            Getting around campus just got easier. Find a nearby e-bike using the app, unlock it, and ride wherever you need to go — fast, easy, and affordable. <br/> Scroll to see how it works or hop on now by picking your start and end points.
                        </motion.p>
                    </div>
                    <img src={Ebike} loading='lazy' alt="Woman on bike" className='w-120 rounded-3xl'/>
                </div>

                <div className='w-full mt-10 py-10'>
                    <h1 className='text-[30px] underline font-regular text-[#686868]'>Getting Started</h1>
                    <p className='text-[20px] font-light text-[#8e8e8e] mt-5'>
                        Learn how easy it is to find and unlock an electric bike on campus using our app. <br /> Whether you're heading to class or grabbing lunch, getting a ride is just a few taps away.
                    </p>

                    <div className='mt-10 '>
                        <h1 className='text-[30px] underline font-regular text-[#686868]'>Register as a Student</h1>
                        <p className='text-[20px] font-light text-[#8e8e8e] mt-5'>
                            Before your first ride, you’ll need to sign up using your campus student ID. This ensures only verified students have access to the bikes and helps us keep the programme secure and student-friendly.
                        </p>
                    </div>

                    

                    <div>
                        <img src={Woman} loading='lazy' alt="Woman on bike" className='w-120 rounded-3xl mt-10'/>
                        <div>
                            <h3>1. Getting Started</h3>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default ElectricBike
