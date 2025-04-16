import React, {useRef} from 'react'
import Flyer from '../assets/images/summer_concert.png'
import { motion, useInView } from 'framer-motion'
function News() {

    const ref = useRef(null);
    const inView = useInView(ref, { once: true });


  return (
    <div className='w-full bg-[#fff] font-SFPro py-10 mt-10'>
      <div className='max-w-[1400px] mx-auto py-10 px-10'>
        <div>
            <motion.h1 className='text-[40px] lg:text-[48px] font-semibold'
            ref={ref}
            initial={{opacity: 0, y: 200, filter: "blur(50px)"} }
            animate={inView ? {opacity: 1, y: 0, filter: "blur(0px)"}: {} }
            transition={{duration: .6, ease: 'easeInOut'}}
            >News and Updates</motion.h1>
        </div>

        <div className='flex flex-col gap-y-10 lg:flex-row lg:justify-between  lg:gap-x-10 mt-10 w-full'>
            <div>
                <motion.h2 className='text-[18px] underline-offset-4 underline lg:text-[30px]'
                initial={{opacity: 0, y: 200, filter: "blur(50px)"}}
                animate={ inView ? {opacity: 1, y: 0, filter: "blur(0px)"} : {} }
                transition={{duration: .8, ease: 'easeInOut'}}
                >
                    Summer Concert In The Park
                </motion.h2>


                <motion.p className='mt-5 text-[#444]'
                initial={{opacity: 0, y: 200, filter: "blur(50px)"}}
                animate={ inView ? {opacity: 1, y: 0, filter: "blur(0px)"} : {} }
                transition={{duration: 1.2, ease: 'easeInOut'}}
                >
                    Feel the heat, catch the beat — it's the ultimate summer concert experience!
                </motion.p>


                <motion.p className='mt-5 text-[#444]'
                initial={{opacity: 0, y: 200, filter: "blur(50px)"}}
                animate={ inView ? {opacity: 1, y: 0, filter: "blur(0px)"} : {} }
                transition={{duration: 1.6, ease: 'easeInOut'}}
                >
                    Join us under the stars for an unforgettable night of live music, good vibes, and summer magic. Don't miss out — the rhythm of the season awaits!
                </motion.p>

                <div className='md:mt-15'>
                    <button className='bg-black text-white py-4 px-10 mt-10 font-semibold hover:bg-[#333] rounded-xl cursor-pointer'>Learn More</button>
                </div>
            </div>
            <div className='lg:w-[1400px] w-full sm:w-[600px] md:w-[650px]  sm:flex sm:justify-center sm:items-center'>
                <img src={Flyer} alt="Summer Flyer" className='w-full lg:w-full rounded-2xl'/>
            </div>
        </div>

      </div>
    </div>
  )
}

export default News
