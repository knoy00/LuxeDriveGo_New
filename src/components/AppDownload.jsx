import React from 'react'
import { motion } from 'framer-motion'
import Apple from '../assets/icons/apple.png'
import Playstore from '../assets/icons/playstore.png'
import Mockup from '../assets/images/mockup.png'
function AppDownload() {
  return (
    <div className='w-full bg-white pt-20 font-SFPro px-10 h-screen'>
        <div className='max-w-[1400px] mx-auto px-10'>
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='lg:text-[52px] font-semibold'>Download Our <br /> Mobile App.</h1>
                    <p className='mt-5 lg:h-[100px] lg:w-[500px] max-w-[450px text-[#999]'>Discover the convenience of our mobile app, designed for a seamless and hassle-free experience.</p>

                    <div className='flex justify-between items-center mt-10 gap-x-10'>
                        <div className='flex items-center  border-2 border-black rounded-2xl px-5 py-3 w-[250px] max-w-[250px] lg:gap-x-5 cursor-pointer hover:bg-[#dfdfdfb2]'>
                            <img src={Apple} alt="" />
                            <div>
                                <p className='text-[#999]'>Download on the </p>
                                <h3 className='font-semibold'>App Store</h3>
                            </div>
                        </div>

                        <div className='flex items-center border-2 border-black rounded-2xl px-5 py-3 w-[250px] max-w-[250px] lg:gap-x-5 cursor-pointer hover:bg-[#dfdfdfb2]'>
                            <img src={Playstore} alt="" className='w-9'/>
                            <div>
                                <p className='text-[#999]'>Get it on </p>
                                <h3 className='font-semibold'>Google Play</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-90'>
                    <img src={Mockup} alt="Luxedrive App" className='w-full'/>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default AppDownload
