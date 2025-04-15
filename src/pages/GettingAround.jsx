import React from 'react'
import Mockup from '../assets/images/bgImage.webp'

function GettingAround() {
  return (
    <div className='w-full bg-black pt-20 font-SFPro px-10'>
      <div className='max-w-[1200px] mx-auto text-center'>
        <h1 className='text-[40px] text-white text-center font-semibold mb-10 md:text-[44px] lg:text-[52px]'>Getting around just got easier.</h1>
        <p className='text-[#888] mb-5 text-[18px] md:text-[19px]'>
            No more waiting, no more stress. Whether you're heading to work, meeting friends, or catching a late-night snack, LuxeDriveGo is here to take you there
        </p>
        <p className="text-[#888] text-[16px] lg:text-[18px]">Fast, comfy, and hassle-free. Just tap, ride, and relax.</p>
      </div>
      <img src={Mockup} loading='lazy' alt="Hand Holding Phone" className='w-full mt-10'/>

    </div>
  )
}

export default GettingAround
