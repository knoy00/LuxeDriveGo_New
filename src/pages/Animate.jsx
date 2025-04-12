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
        <div ref={ref} className=' relative w-full h-[200vh] flex justify-center items-center overflow-hidden'>
            <div className='absolute left-100 flex flex-col space-y-40 w-[500px]'>
                <div className='border-b border-black border-r rounded-br-4xl pr-5 pb-5 bg-pink-400 h-[500px] flex justify-center items-center'>
                    <div className='px-10'>
                        <h1 className='text-4xl mb-10'>Speed</h1>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur      adipisicing elit. Commodi, dolorem nobis non error molestias ipsam, impedit atque tempore, obcaecati odio sint. Odio quasi minus magnam, suscipit harum illo? Impedit, quisquam.
                        </p>
                    </div>
                    
                </div>
                <div className='border-b border-black border-r rounded-br-4xl pr-5 pb-5 bg-pink-400 h-[500px] flex justify-center items-center'>
                    <div className='px-10'>
                        <h1 className='text-4xl mb-10'>Speed</h1>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur      adipisicing elit. Commodi, dolorem nobis non error molestias ipsam, impedit atque tempore, obcaecati odio sint. Odio quasi minus magnam, suscipit harum illo? Impedit, quisquam.
                        </p>
                    </div>
                    
                </div>
                
            </div>
            <motion.div className=' bg-black w-[150px] h-[150px] rounded-[90px] flex justify-center items-center' style={{scale}}>
                <div className='bg-white w-[50px] h-[50px] rounded-4xl'>
                    
                </div>
            </motion.div>
            <div className='absolute right-100 flex flex-col space-y-40 w-[500px]'>
                <div className='border-b border-black border-r rounded-br-4xl pr-5 pb-5 bg-pink-400 h-[500px] flex justify-center items-center'>
                    <div className='px-10'>
                        <h1 className='text-4xl mb-10'>Speed</h1>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur      adipisicing elit. Commodi, dolorem nobis non error molestias ipsam, impedit atque tempore, obcaecati odio sint. Odio quasi minus magnam, suscipit harum illo? Impedit, quisquam.
                        </p>
                    </div>
                    
                </div>
                <div className='border-t border-black border-l rounded-tl-4xl pr-5 pb-5 bg-pink-400 h-[500px] flex justify-center items-center'>
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
