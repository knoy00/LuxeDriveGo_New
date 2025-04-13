import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

function Rotate() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end start"]
  })

  const left = useTransform(scrollYProgress, [0, 1], ["-100%", "100%"])
  const right = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"])

  return (
    <div className='h-[300vh] w-full bg-gray-100'>
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

        <div className='z-10 max-w-[1400px]'>
            <h1>dede</h1>
        </div>

      </div>
      
    </div>
  )
}

export default Rotate
