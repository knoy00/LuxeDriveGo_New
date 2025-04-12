import React from 'react'
import logo from '../assets/icons/LuxeDrive_white.png'
import { motion } from 'framer-motion'
function LoaderScreen() {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-black'>
      <motion.img 
      src={logo} 
      alt="Logo" 
      initial={{opacity: 0, filter: 'blur(70px)'}}
      animate={{opacity: 1, filter: 'blur(0px)'}}
      transition={{duration: .8, ease: 'easeInOut'}}
      />
    </div>
  )
}

export default LoaderScreen
