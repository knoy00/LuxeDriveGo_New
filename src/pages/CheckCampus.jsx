import React, { useRef, } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import AvailableCampus from './AvailableCampus'

function CheckCampus() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end start"]
  })

  const left = useTransform(scrollYProgress, [0, 1], ["-100%", "100%"])
  const right = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"])


  return (
    <div className='h-[200vh] w-full bg-black'>
      <div ref={ref} className='h-[100vh] w-full flex items-center justify-center relative overflow-hidden bg-black'>

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

        <div className='z-10 max-w-[1400px] absolute top-0 py-10 text-center'>
            <h1 className='mb-10 text-[40px] font-semibold text-[#000] tracking-wide'>Rolling Out Accross Campuses <br />Near You
            </h1>

            <p className='text-[20px] font-light text-[#000]'>
                Our electric bike program is making its way to select universities and colleges — bringing fast, eco-friendly, and affordable rides right to your campus. Whether you’re heading to class or grabbing a quick bite, riding just got way easier and a lot more fun.

            </p>

            
        </div>

      </div>

      <AvailableCampus />
      
    </div>
  )
}

export default CheckCampus
