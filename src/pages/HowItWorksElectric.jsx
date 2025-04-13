import React from 'react'
import Ebike from '../assets/images/ebike.png'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useState } from 'react'

const imagesToLoad = 1;
function HowItWorksElectric() {

    const [loadedImages, setLoadedImages] = useState(0);

    const handleLoadedImages = () => {
        setLoadedImages((prev) => prev + 1)

    }

    const allImagesLoaded = loadedImages === imagesToLoad;

    const ref2 = useRef(null);
    const isInView2 = useInView(ref2, {once: true});

  return (
    <>
        <img src={Ebike} onLoad={handleLoadedImages} style={{display: 'none'}} alt="Ebike" />
        { <div className='w-full flex justify-center items-center space-x-10 mt-20 text-[#444] py-10'>
            <div className='w-full'>
                <motion.h1 
                ref={ref2}
                className='text-5xl font-semibold mb-10'
                initial={{opacity: 0, y: 200, filter: "blur(50px)"} }
                animate={isInView2 ? {opacity: 1, y: 0, filter: "blur(0px)"}: {opacity: 0, y: 200,}}
                transition={{duration: .8, ease: 'easeInOut'}}
                >
                    How it works
                </motion.h1>
                <motion.p
                className='text-xl font-light text-[#424242]'
                ref={ref2}
                initial={{opacity: 0, y: 200, filter: "blur(50px)"} }
                animate={isInView2 ? {opacity: 1, y: 0, filter: "blur(0px)"}: {opacity: 0, y: 200, }}
                transition={{duration: .8, ease: 'easeInOut'}}
                >
                
                    Getting around campus just got easier. Find a nearby e-bike using the app, unlock it, and ride wherever you need to go — fast, easy, and affordable. <br/> Scroll to see how it works or hop on now by picking your start and end points.
                </motion.p>
            </div>
            {allImagesLoaded &&<motion.img src={Ebike} alt="E-bike" className='w-120 rounded-3xl'
            ref={ref2}
            initial={{opacity: 0, filter: "blur(50px)"}}
            animate={isInView2 ? {opacity:1, filter: "blur(0px)"} : {}}
            transition={{duration: .5, ease: 'easeInOut'}}
            />}
        </div>}
    </>
  )
}

export default HowItWorksElectric
