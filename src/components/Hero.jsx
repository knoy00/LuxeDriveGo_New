import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, CarTaxiFront, CreditCard, Lock } from 'lucide-react'


function Hero() {
  return (
    <div className='w-full mt-0 px-5 font-SFPro md:px-10 lg:px-20 md:bg-yellow-200 bg-green-300 sm:bg-red-500 lg:bg-blue-500'>
      <div className='text-center py-10'>
        <motion.h1 className='text-4xl md:text-3xl md:mt-15 lg:mt-15 font-semibold font-helvetica sm:text-[40px]' 
        initial={{opacity: 0, y: 200}}
        animate={{opacity:1, y: 0}}
        transition={{duration: 1.4, ease: 'easeOut'}}
        >
            Your Ride, Your Way!
        </motion.h1>

        <motion.h3 className='text-[18px] mt-5 font-regular font-helvetica'
        initial={{opacity: 0, y: 250}}
        animate={{opacity:1, y: 0}}
        transition={{duration: 1.6, ease: 'easeOut'}}
        >
            Seamless rides at your fingertips. <br/> Book, ride, and arrive with comfort and style — anytime, anywhere.
        </motion.h3>

        <motion.div className='flex justify-center items-center mt-10 bg-black w-55 h-10 mx-auto rounded-4xl px-5 py-7 cursor-pointer border-2 border-black hover:bg-[#444]'
        initial={{opacity: 0, y: 250}}
        animate={{opacity:1, y: 0}}
        transition={{duration: 1.8, ease: 'easeOut'}}
        >
            <button className='text-white font-semibold cursor-pointer mr-2'>Get Started</button>
            <ArrowRight color={'black'} className='rounded-2xl bg-white'/>
        </motion.div>

        <motion.div className='flex flex-col justify-center items-center mt-20 space-y-10 text-white '
        initial={{opacity: 0, y: 130}}
        animate={{opacity:1, y: 0}}
        transition={{duration: 2, ease: 'easeOut'}}
        >
            <div className='bg-black w-full max-w-[500px] px-10 py-10 flex flex-col justify-center items-center rounded-4xl sm:w-150 sm:max-w-[590px] sm:mx-auto'>
                <CarTaxiFront color='black' size={70} className='mb-10 bg-white rounded-4xl p-2 '/>
                <p className='h-[70px] text-[20px] font-regular'>Fast and convenient rides</p>
            </div>
            <div className='bg-black w-full max-w-[500px] px-10 py-15 flex flex-col justify-center items-center rounded-4xl sm:w-150 sm:max-w-[590px] sm:mx-auto'>
                <CreditCard color='black' size={70} className='mb-10 bg-white rounded-4xl p-2'/>
                <p className='text-[20px] h-[70px] font-regular'>Easy payments, cashless experience</p>
            </div>
            <div className='bg-black w-full max-w-[500px] px-10 py-15 flex flex-col justify-center items-center rounded-4xl sm:w-150 sm:max-w-[590px] sm:mx-auto'>
                <Lock color='black' size={70} className='mb-10 bg-white rounded-4xl p-2'/>
                <p className='text-[20px] h-[70px] font-regular'>Safe rides with verified drivers</p>
            </div>
           
        </motion.div>


        
      </div>
    </div>
  )
}

export default Hero
