import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Ebike from  '../assets/images/bikeBlack.png'
import Hero from '../components/Hero'

function Animate() {
    const ref = useRef(null);
    const {scrollYProgress:scrollYProgress1} = useScroll({
        target: ref,
        offset: ["center center", "end start"]
    })
    const scale = useTransform(scrollYProgress1, [0, 1], [0.5, 20.5]);

    
    const {scrollYProgress:scrollYProgress2} = useScroll({
        target: ref,
        offset: ["center center", "end start"]
    })
    const scale2 = useTransform(scrollYProgress2, [0, 1], [0.5, 50.5]);

    const ref3 = useRef(null);
    const {scrollYProgress:scrollYProgress3} = useScroll({
        target: ref3,
        offset: ["center center", "end start"]
    })
    const scale3 = useTransform(scrollYProgress3, [0, 1], [1, 0.8])
    const borderRadius = useTransform(scrollYProgress3, [0, 1], ['0px', '150px'])


  return (
    <div className='relative'>
        <div className='absolute left-[20%] text-center'>
            <h1 className='text-5xl font-semibold mb-10'>What Our E-bike Offers</h1>

            <p className='text-[20px] text-[#777]'>
                From getting to class on time to cruising around campus with ease, our e-bikes are built to make student life simpler, faster, and way more fun. <br /> Check out all the cool features that make riding with us a no-brainer.
            </p>
        </div>
        <div ref={ref} className=' relative w-full h-[200vh] flex justify-center items-center overflow-hidden font-helvetica'>
            
            <div className='absolute left-100 flex flex-col space-y-40 w-[500px]'>
                <div className='border-b border-[#ddd] border-r rounded-br-[140px] pr-5 pb-5  h-[500px] flex justify-center items-center text-center'>
                    <div className='px-10'>
                        <h1 className='text-4xl mb-10'>Speed</h1>
                        <p className='text-[18px] text-[#777]'>
                            Lorem, ipsum dolor sit amet consectetur      adipisicing elit. Commodi, dolorem nobis non error molestias ipsam, impedit atque tempore, obcaecati odio sint. Odio quasi minus magnam, suscipit harum illo? Impedit, quisquam.
                        </p>
                    </div>
                    
                </div>
                <div className='border-t border-[#ddd] border-r rounded-tr-[140px] pr-5 pb-5  h-[500px] flex justify-center items-center'>
                    <div className='px-10'>
                        <h1 className='text-4xl mb-10'>Speed</h1>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur      adipisicing elit. Commodi, dolorem nobis non error molestias ipsam, impedit atque tempore, obcaecati odio sint. Odio quasi minus magnam, suscipit harum illo? Impedit, quisquam.
                        </p>
                    </div>
                    
                </div>
                
            </div>

            <motion.div className='z-5 bg-[#000] w-[350px] h-[350px] rounded-[170px] flex justify-center items-center' style={{scale}}>
                <motion.div style={{scale2}} className='bg-white w-[50px] h-[50px] rounded-4xl'>
                    
                </motion.div>
            </motion.div>

            <div className='absolute right-100 flex flex-col space-y-40 w-[500px]'>
                <div className='border-b border-[#ddd] border-l rounded-bl-[140px] pr-5 pb-5 h-[500px] flex justify-center items-center'>
                    <div className='px-10'>
                        <h1 className='text-4xl mb-10'>Speed</h1>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur      adipisicing elit. Commodi, dolorem nobis non error molestias ipsam, impedit atque tempore, obcaecati odio sint. Odio quasi minus magnam, suscipit harum illo? Impedit, quisquam.
                        </p>
                    </div>
                    
                </div>
                <div className='border-t border-[#ddd] border-l rounded-tl-[140px] pr-5 pb-5  h-[500px] flex justify-center items-center'>
                    <div className='px-10'>
                        <h1 className='text-4xl mb-10'>Speed</h1>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur      adipisicing elit. Commodi, dolorem nobis non error molestias ipsam, impedit atque tempore, obcaecati odio sint. Odio quasi minus magnam, suscipit harum illo? Impedit, quisquam.
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
        <motion.div className=' bg-black w-full py-10' ref={ref3} style={{scale: scale3, borderRadius}}>
            <div className='max-w-[1400px] mx-auto bg-[#000] py-10 rounded-[70px]'>
                <div className='w-full text-center '>
                    <h1 className='text-white text-[40px] mb-5'>
                        We're Coming to You Soon
                    </h1>
                    <p className='text-[#888] text-[18px]'>
                        We're starting on campus, but you're definitely not left out. <br /> Our e-bike program is gearing up to roll out to the general public—so get ready to ride with us soon!
                    </p>
                </div>

                <div className='w-full flex justify-center items-center'>
                    <img src={Ebike} alt="Electric Bike" className='w-170'/>
                </div>

                <button></button>
            </div>
        </motion.div>
        <Hero />
        <Hero />
    </div>
    
  )
}

export default Animate
