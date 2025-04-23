import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Animate from './Animate'
import ScrollToTop from '../components/ScrollToTop'

import handlebars from '../assets/images/BikeBars.png'
import Woman from '../assets/images/woman_ebike.jpeg'
import Ebike from '../assets/images/ebike.png'
import Hand from '../assets/images/Hand.png'
import Riding from '../assets/images/Riding.jpeg'
import Payment from '../assets/images/Payment.jpeg'
import Scanning from '../assets/images/Scanning.png'
// import ebike_mono from '../assets/images/Ebike_mono.jpeg'
import {useState} from 'react'
import LoaderScreen from '../components/LoaderScreen'
import GettingStartedElectric from './GettingStartedElectric'
import HowItWorksElectric from './HowItWorksElectric'
import CheckCampus from './CheckCampus'
import Footer from '../components/Footer'

const imagesToLoad = 1;
function ElectricBike() {
    const [isLoaded, setIsLoaded] = useState(0);
    const handleImgLoad = () => {
        setIsLoaded((prev) => prev + 1)
    }
    const allImagesLoaded = isLoaded === imagesToLoad;
    console.log("allImagesLoaded", allImagesLoaded)

  return (
    <>
        <img src={handlebars} alt="Handlebars" onLoad={handleImgLoad} className='hidden'/>
        {/* <img src={Ebike} alt="Ebike" onLoad={handleImgLoad} className='hidden'/> */}
        {!allImagesLoaded && <LoaderScreen />}
        
        {allImagesLoaded && (
            <div>
                <ScrollToTop />
                <Navbar />
                <div className='w-full font-PPMori bg-white'>
                    <div className='max-w-[1400px] mx-auto lg:mt-20 '>
                        <div className='text-center px-5 bg-[#efefef]  pt-10 md:px-20 lg:rounded-4xl md:mt-10'>
                            <motion.h1 className='text-[30px] sm:text-[40px] lg:text-[50px] w-full max-w-2xl mx-auto font-semibold text-[#424242] lg:leading-[4rem] mb-3'
                            initial={{opacity: 0, y: 200, filter: "blur(30px)"}}
                            animate={{opacity:1, y: 0, filter: "blur(0px)"}}
                            transition={{duration: .6, ease: 'easeOut'}}
                            >
                            Our Electric Bike Program for campuses is here
                            </motion.h1>
                            <motion.p className='text-[18px] text-[#424242] mb-2 md:text-[20px] lg:text-[24px]'
                            initial={{opacity: 0, y: 200, filter: "blur(30px)"}}
                            animate={{opacity:1, y: 0, filter: "blur(0px)"}}
                            transition={{duration: .6, ease: 'easeOut'}}
                            >
                                Move around campus with ease and reduce your carbon footprint
                            </motion.p>
                            <motion.p className='text-[18px] text-[#424242] mb-10 md:text-[20px] lg:text-[20px]'
                            initial={{opacity: 0, y: 200, filter: "blur(50px)"}}
                            animate={{opacity:1, y: 0, filter: "blur(0px)"}}
                            transition={{duration: .8, ease: 'easeOut'}}
                            >
                                No more waiting, no more stress
                            </motion.p>

                            <div className='w-full '>
                                <motion.img 
                                    // loading='lazy' 
                                    src={handlebars} 
                                    alt="Bike Handle Bars" 
                                    className='cover'
                                    initial={{opacity: 0, scale: 0, filter: "blur(5px)"}}
                                    animate={{opacity:1, scale: 1, filter: "blur(0px)"}}
                                    transition={{duration: 1, ease: 'easeOut'}}
                                />
                            </div>
                        </div>

                        <HowItWorksElectric />

                        <GettingStartedElectric />
                    </div>
                    <Animate />
                    <CheckCampus />
                </div>
                <Footer />
            </div>
        )}
    </>
  )
}

export default ElectricBike
