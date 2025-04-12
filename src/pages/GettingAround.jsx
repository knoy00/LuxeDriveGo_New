import React from 'react'
import Mockup from '../assets/images/bgImage.webp'

function GettingAround() {
  return (
    <div className='w-full bg-black pt-20 font-helvetica'>
      <div className='max-w-[1200px] mx-auto text-center'>
        <h1 className='text-5xl text-white text-center font-semibold mb-10'>Getting around just got easier.</h1>
        <p className='text-white mb-5 text-[20px]'>
            No more waiting, no more stress. Whether you're heading to work, meeting friends, or catching a late-night snack, LuxeDriveGo is here to take you there
        </p>
        <p className="text-white text-[20px]">Fast, comfy, and hassle-free. Just tap, ride, and relax.</p>
      </div>
      <img src={Mockup} loading='lazy' alt="" className='w-full mt-10'/>

    </div>
  )
}

export default GettingAround
