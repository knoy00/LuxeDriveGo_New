import React from 'react'

function IntroBike() {
  return (
    <div className="relative w-full h-screen font-helvetica">
      {/* Background layer with reduced brightness */}
      <div className="absolute inset-0 bg-[url('/images/BikeWall.webp')] bg-no-repeat bg-center bg-cover filter brightness-30 z-0"></div>

      {/* Content layer above background */}
      <div className="relative z-10 max-w-[1200px] h-full mx-auto flex flex-col items-center justify-center text-center">
        <h1 className="text-white text-[110px] font-semibold text-shadow-lg">Introducing Our <br/> Electric Bike</h1>
        <p className='text-white mt-5 text-[30px]'>Go green with every ride. Our e-bike program is designed to reduce your carbon footprint while keeping you moving effortlessly</p>
        <button className='bg-white text-black py-4 px-10 mt-10 font-semibold hover:bg-[#ccc] rounded-xl cursor-pointer'>Learn More</button>
      </div>
    </div>
  )
}

export default IntroBike