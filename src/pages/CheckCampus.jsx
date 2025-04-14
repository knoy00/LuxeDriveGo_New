import React, { useRef, } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import AvailableCampus from './AvailableCampus'
import { Bike } from 'lucide-react'

const cards = [
  {
    id: 1,
    header: "Move Freely",
    description: "Take your e-bike anywhere you want, and whenever you want.",
  },
  {
    id: 2,
    header: "Share Your Ride",
    description: "Share your e-bike with friends and family, and keep your bike clean and safe.",
  },
  {
    id: 3,
    header: "Reduce Your Carbon Footprint",
    description: "Go green with every ride. Our e-bike program is designed to reduce your carbon footprint while keeping you moving effortlessly.",
  }
]

function CheckCampus() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end start"]
  })

  const left = useTransform(scrollYProgress, [0, 1], ["-100%", "100%"])
  const right = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"])


  return (
    <div className='h-[200vh] w-full bg-black snap-y snap-mandatory'>
      <div ref={ref} className='h-[100vh] w-full flex items-center justify-center relative overflow-hidden bg-black snap-start'>

        <motion.div
          style={{ x: left }}
          className='absolute w-full h-screen bg-white'
        >
            <h1 className='text-black z-10'>Hello</h1>
        </motion.div>

        <motion.div
          style={{ x: right }}
          className='absolute w-full h-screen bg-white'
        >
        </motion.div>

        <div className='z-10 max-w-[1400px] absolute top-0 py-10 '>
          <h1 className='mb-10 text-[40px] font-semibold text-[#000] tracking-wide text-center'>Rolling Out Accross Campuses <br />Near You
          </h1>
          <p className='text-[20px] font-light text-[#000] text-center'>
              Our electric bike program is making its way to select universities and colleges — bringing fast, eco-friendly, and affordable rides right to your campus. Whether you’re heading to class or grabbing a quick bite, riding just got way easier and a lot more fun.
          </p>

          <div className='flex justify-center items-center gap-x-5 mt-20'>
            {cards.map((card, index) => (
              <div key={index}className='flex flex-col gap-y-2 border-2 border-black rounded-[28px] p-5 w-110 h-85'>
                <Bike size={50}/>
                <h1 className='text-[30px] font-semibold text-[#000] h-23 mt-10'>{card.header}</h1>
                <p className='text-[16px] font-light text-[#000] h-23'>{card.description}</p>
              </div>
            ))}
          </div>

          <div className='w-200 h-250 bg-black absolute top-[-66%] left-[-58%] rotate-45'>

          </div>

          <div className='w-200 h-250 bg-black absolute top-[66%] right-[-50%] rotate-45'>

          </div>

            
        </div>

      </div>

      <AvailableCampus />
      
    </div>
  )
}

export default CheckCampus
