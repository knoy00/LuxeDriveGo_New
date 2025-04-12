import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import handlebars from '../assets/images/BikeBars.webp'
function ElectricBike() {
  return (
    <div>
        <Navbar />
        <div className='w-full'>
            <div className='max-w-[1400px] mx-auto mt-20 bg-[#efefef] pt-10 px-20 rounded-3xl'>
                <div className='text-center font-helvetica'>
                    <motion.h1 className='text-[50px] w-full max-w-2xl mx-auto font-semibold text-[#424242]'
                    initial={{opacity: 0, y: 200}}
                    animate={{opacity:1, y: 0}}
                    transition={{duration: 1.4, ease: 'easeOut'}}
                    >
                        Our Electric Bike Program for campuses is here
                    </motion.h1>
                    <motion.p className='text-[25px] text-[#424242]'
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
            </div>
        </div>
      
    </div>
  )
}

export default ElectricBike
