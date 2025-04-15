import React from 'react'
import { useNavigate } from 'react-router-dom'

function IntroBike() {

  const navigate = useNavigate();
  return (
    <div className="relative w-full h-[550px] font-SFPro md:h-[600px] lg:h-screen">
      {/* Background layer with reduced brightness */}
      <div className="absolute inset-0 bg-[url('/images/BikeWall.webp')] bg-no-repeat bg-center bg-cover filter brightness-30 z-0"></div>

      {/* Content layer above background */}
      <div className="relative z-10 max-w-[1200px] h-full mx-auto flex flex-col items-center justify-center text-center">
        <h1 className="text-white text-[50px] font-semibold text-shadow-lg md:text-[60px] lg:text-[80px]">Introducing Our <br/> Electric Bike</h1>
        <p className='text-white mt-5 text-[17px]'>Go green with every ride. Our e-bike program is designed to reduce your carbon footprint while keeping you moving effortlessly</p>
        <button className='bg-white text-black py-4 px-10 mt-10 font-semibold hover:bg-[#ccc] rounded-xl cursor-pointer' onClick={() => navigate('/ElectricBike')}>Learn More</button>
      </div>
    </div>
  )
}

export default IntroBike