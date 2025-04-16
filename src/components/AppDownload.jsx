import React from 'react'
import { motion } from 'framer-motion'
import Apple from '../assets/icons/apple.png'
import Playstore from '../assets/icons/playstore.png'
import Mockup from '../assets/images/mockup.png'
function AppDownload() {
  return (
    <div className='w-full  pt-20 font-SFPro px-5 sm:bg-amber-300'>
        <div className='max-w-[1400px] mx-auto px-0 lg:px-10 md:py-5'>
            <div className='h-screen flex flex-col lg:flex-row justify-between items-center gap-y-4 lg:h-[85vh]'>
                <div className=''>
                    <h1 className=' text-center text-[40px] sm:w-full lg:text-[52px] font-semibold sm:text-center lg:text-left lg:max-w-[450px]'>Download Our Mobile App.</h1>
                    <p className='text-center text-[17px] sm:text-center lg:max-w-[350px] mt-5 lg:h-[100px] lg:w-[500px] sm:w-full text-[#999] lg:text-left'>Discover the convenience of our mobile app, designed for a seamless and hassle-free experience.</p>

                    <div className='flex flex-col lg:flex-row justify-between items-center mt-10 gap-y-5 lg:gap-x-10 sm:flex-row sm:gap-x-10 sm:justify-center'>
                        <div className='flex items-center gap-x-3  border-2 border-black rounded-2xl px-5 py-3 w-[250px] max-w-[250px] lg:gap-x-5 cursor-pointer hover:bg-[#dfdfdfb2] sm:gap-x-3'>
                            <img src={Apple} alt="Apple" />
                            <div>
                                <p className='text-[#999]'>Download on the </p>
                                <h3 className='font-semibold'>App Store</h3>
                            </div>
                        </div>

                        <div className='flex  items-center gap-x-3 border-2 border-black rounded-2xl px-5 py-3 w-[250px] max-w-[250px] lg:gap-x-5 cursor-pointer hover:bg-[#dfdfdfb2] sm:gap-x-5'>
                            <img src={Playstore} alt="Google Play" className='w-9'/>
                            <div>
                                <p className='text-[#999]'>Get it on </p>
                                <h3 className='font-semibold'>Google Play</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <motion.div className='w-90 flex justify-center items-center sm:h-[60%]'
                animate={{
                    marginTop: ['0%', '2%', '0%'],
                }}
                transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: 'easeInOut'
                }}
                >
                    <img src={Mockup} alt="Luxedrive App" className='w-[56%] md:w-[60%] lg:w-full'/>
                </motion.div>
            </div>

        </div>
      
    </div>
  )
}

export default AppDownload
