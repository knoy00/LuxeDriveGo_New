import React from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Ebike from  '../assets/images/bikeBlack.png'
import Hero from '../components/Hero'

function Animate() {
    const ref = useRef(null);
    const {scrollYProgress:scrollYProgress1} = useScroll({
        target: ref,
        offset: ["center center", "end start"]
    })
    const scale = useTransform(scrollYProgress1, [0, 1], [0.5, 30.5]);


    const ref3 = useRef(null);
    const {scrollYProgress:scrollYProgress3} = useScroll({
        target: ref3,
        offset: ["center center", "end start"]
    })
    const scale3 = useTransform(scrollYProgress3, [0, 1], [1, 0.8])
    const borderRadius = useTransform(scrollYProgress3, [0, 1], ['0px', '150px'])
    const blur = useTransform(scrollYProgress3, [0, 1], ['0px', '50px'])

    const ref2 = useRef(null);
    const isInView = useInView(ref2, {once: true});


  return (
    <div className='relative'>
        <div className='absolute left-[20%] text-center'>
            <h1 className='text-5xl font-semibold mb-10'>What Our E-bike Offers</h1>

            <p className='text-[20px] text-[#777]'>
                From getting to class on time to cruising around campus with ease, our e-bikes are built to make student life simpler, faster, and way more fun. <br /> Check out all the cool features that make riding with us a no-brainer.
            </p>
        </div>
        <div ref={ref} className='w-full h-[160vh] flex justify-center items-center overflow-hidden font-helvetica'>
            
            <div className=' flex flex-col space-y-20 w-[500px]'>
                <div className='border-b border-[#ddd] border-r rounded-br-[140px] pr-5 pb-5  h-[500px] flex justify-center items-center text-center'>
                    <div className='px-10'>
                        <h1 className='text-4xl mb-10 text-[#444]'>No Emission</h1>
                        <p className='text-[18px] text-[#777] tracking-wider'>
                            Experience a sustainable future with zero-emission e-mobylettes — eco-friendly technology that delivers green mobility without sacrificing performance.
                        </p>
                    </div>
                    
                </div>
                <div className='border-t border-[#ddd] border-r rounded-tr-[140px] pr-5 pb-5  h-[500px] flex justify-center items-center'>
                    <div className='px-10 text-center'>
                        <h1 className='text-4xl mb-10'>Speed</h1>
                        <p className='tracking-wider text-[18px] text-[#777]'>
                            Navigate the city with ease using our e-bike's nimble and responsive design — built for smooth urban rides, quick commutes, and effortless maneuvering.
                        </p>
                    </div>
                    
                </div>
                
            </div>

            <motion.div className=' z-5 bg-[#000] w-[250px] h-[250px] rounded-[170px] flex justify-center items-center' style={{scale}}>
                <motion.div className='bg-white w-[40px] h-[40px] rounded-4xl'>
                    
                </motion.div>
            </motion.div>

            <div className=' flex flex-col space-y-20 w-[500px]'>
                <div className='border-b border-[#ddd] border-l rounded-bl-[140px] pr-5 pb-5 h-[500px] flex justify-center items-center'>
                    <div className='px-10 text-center'>
                        <h1 className='text-4xl mb-10'>Ride Smart, Pay Less</h1>
                        <p className='text-[18px] text-[#777] tracking-wider'>
                            Enjoy fast, eco-friendly campus rides without the hefty price tag — built for students who value both savings and sustainability.
                        </p>
                    </div>
                    
                </div>
                <div className='border-t border-[#ddd] border-l rounded-tl-[140px] pr-5 pb-5  h-[500px] flex justify-center items-center'>
                    <div className='px-10 text-center'>
                        <h1 className='text-4xl mb-10'>Efortless Commuting</h1>
                        <p className='text-[18px] text-[#777] tracking-wider'>
                            Skip the hassle of walking across campus and glide through your day with our easy-to-ride e-bikes, perfect for quick and convenient trips between classes.
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
        <motion.div className=' bg-black w-full py-5' ref={ref3} style={{scale: scale3, borderRadius, blur}}>
            <div className='max-w-[1400px] mx-auto py-10 rounded-[70px]'>
                <div className='w-full text-center '>
                    <motion.h1 ref={ref2} className='text-white text-[50px] mb-5 font-semibold'
                    initial={{opacity: 0, filter: "blur(50px)"} }
                    animate={isInView ?{opacity: 1, filter: "blur(0px)"} : {}}
                    transition={{duration: .8, ease: 'easeInOut'}}
                    >
                        We're Coming to You Soon
                    </motion.h1>
                    <p className='text-[#888] text-[18px]'>
                        We're starting on campus, but you're definitely not left out. <br /> Our e-bike program is gearing up to roll out to the general public—so get ready to ride with us soon!
                    </p>
                </div>

                <div className='w-full flex justify-center items-center'>
                    <img src={Ebike} alt="Electric Bike" className='w-170'/>
                </div>

                <div className='w-full flex justify-center items-center'>
                    <button className='bg-white px-13 py-6 mt-10 font-regular hover:bg-[#ccc] rounded-[50px] cursor-pointer text-[20px]'>Learn More</button>

                </div>
            </div>
        </motion.div>
        <Hero />
    </div>
    
  )
}

export default Animate
