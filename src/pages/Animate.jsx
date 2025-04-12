import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { div } from 'framer-motion/client';

function Animate() {
    const ref = useRef(null);

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["center center", "end start"]
    })

    const scale = useTransform(scrollYProgress, [0, 1], [0.5, 50.5]);
  return (
    <div>
        <div className='text-center'>
            <h1 className='text-5xl font-semibold mb-10'>What Our E-bike Offers</h1>

            <p className='text-[20px] text-[#777]'>From getting to class on time to cruising around campus with ease, our e-bikes are built to make student life simpler, faster, and way more fun. <br /> Check out all the cool features that make riding with us a no-brainer.</p>
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
            <motion.div className='z-5 bg-[#333] w-[350px] h-[350px] rounded-[170px] flex justify-center items-center' style={{scale}}>
                <div className='bg-white w-[50px] h-[50px] rounded-4xl'>
                    
                </div>
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
        <div className='h-[100vh] bg-black'>
                <p className='text-white'>Some Content</p>
        </div>
    </div>
    
  )
}

export default Animate
