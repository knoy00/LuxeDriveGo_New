import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import handlebars from '../assets/images/BikeBars.webp'
import Woman from '../assets/images/woman_ebike.jpeg'
import Ebike from '../assets/images/ebike.png'
function ElectricBike() {
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

                <div className='w-full flex justify-center items-center space-x-10 mt-20'>
                    <div className=''>
                        <h1 className='text-5xl font-semibold mb-10'>How it works</h1>
                        <p className='text-xl font-light text-[#424242]'>
                            Getting around campus just got easier. Find a nearby e-bike using the app, unlock it, and ride wherever you need to go — fast, easy, and affordable. <br/> Scroll to see how it works or hop on now by picking your start and end points.
                        </p>
                    </div>
                    <img src={Woman} loading='lazy' alt="" className='w-120 rounded-3xl'/>
                </div>
            </div>

            
        </div>
      
    </div>
  )
}

export default ElectricBike
