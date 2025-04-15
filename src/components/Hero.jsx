import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, CarTaxiFront, CreditCard, Lock } from 'lucide-react'


function Hero() {
  return (
    <div className='w-full mt-0 px-5 font- md:px-10 lg:px-20 bg-black sm:bg-black md:bg-white lg:bg-white'>
      <div className='text py-10'>
        <motion.h1 className='text-[30px] text-[#eee] md:mt-15 lg:mt-15 font-semibold font-SFPro md:text-center sm:text-[40px] md:text-[44px] lg:text-[52px] lg:text-[#222] md:text-[#222]' 
        initial={{opacity: 0, y: 200}}
        animate={{opacity:1, y: 0}}
        transition={{duration: 1.4, ease: 'easeOut'}}
        >
            Your Ride, Your Way!
        </motion.h1>

        <motion.h3 className='text-[17px] mt-5 font-regular font-SFPro text-[#eee] md:text-center lg:text-center md:text-[#222] lg:text-[#222]'
        initial={{opacity: 0, y: 250}}
        animate={{opacity:1, y: 0}}
        transition={{duration: 1.6, ease: 'easeOut'}}
        >
            Seamless rides at your fingertips. <br/> Book, ride, and arrive with comfort and style — anytime, anywhere.
        </motion.h3>

        <motion.div className='flex justify-center items-center mt-10 bg-white w-55 h-10 md:mx-auto lg:mx-auto md:bg-black  rounded-2xl px-5 py-7 cursor-pointer border-2 border-black hover:bg-[#ddd]'
        initial={{opacity: 0, y: 250}}
        animate={{opacity:1, y: 0}}
        transition={{duration: 1.8, ease: 'easeOut'}}
        >
            <button className='text-black font-semibold cursor-pointer mr-2 md:text-[#fff] lg:text-white'>Get Started</button>
            <ArrowRight color={'white'} className='rounded-2xl bg-black '/>
        </motion.div>

        <motion.div className='flex flex-col justify-center items-center mt-20 space-y-10 text-black lg:flex-row lg:space-y-0 lg:gap-x-10 lg:max-w-[1400px] lg:mx-auto '
        initial={{opacity: 0, y: 130}}
        animate={{opacity:1, y: 0}}
        transition={{duration: 2, ease: 'easeOut'}}
        >
            <div className='bg-white w-full max-w-[500px] px-10 py-10 flex flex-col justify-center items-center rounded-4xl sm:w-150 sm:max-w-[590px] sm:mx-auto lg:h-[300px] md:bg-black lg:bg-black md:text-[#fff] lg:text-[#fff]'>
                <CarTaxiFront color='white' size={60} className='mb-10 bg-black rounded-4xl p-2 md:border-3 lg:border-3 '/>
                <p className='h-[70px] text-[17px] font-regular'>Fast and convenient rides</p>
            </div>
            <div className='bg-white w-full max-w-[500px] px-10 py-15 flex flex-col justify-center items-center rounded-4xl sm:w-150 sm:max-w-[590px] sm:mx-auto md:bg-black lg:bg-black md:text-[#fff] lg:text-[#fff]'>
                <CreditCard color='white' size={60} className='mb-10 bg-black rounded-4xl p-2 md:border-3 lg:border-3' />
                <p className='text-[17px] h-[70px] font-regular'>Easy payments, cashless experience</p>
            </div>
            <div className='bg-white w-full max-w-[500px] px-10 py-15 flex flex-col justify-center items-center rounded-4xl sm:w-150 sm:max-w-[590px] sm:mx-auto md:bg-black lg:bg-black md:text-[#fff] lg:text-[#fff]'>
                <Lock color='white' size={60} className='mb-10 bg-black rounded-4xl p-2 md:border-3 lg:border-3'/>
                <p className='text-[17px] h-[70px] font-regular'>Safe rides with verified drivers</p>
            </div>
           
        </motion.div>


        
      </div>
    </div>
  )
}

export default Hero
