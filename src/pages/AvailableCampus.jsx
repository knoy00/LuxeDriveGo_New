import React from 'react'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

const dockingpoints = [
    {
        id: 1,
        name: "Birchwood University",
        address: "Birchwood, 6th St, San Francisco, CA 94103",
        availableTime: "7:00AM - 9:00PM",
        dockingpoint: {
            one: "Balmine Library",
            two: "Balmine Library",
            three: "Balmine Library",
            four: "Balmine Library",
            five: "Balmine Library"
        },

    },
    {
        id: 2,
        name: "Birchwood University",
        address: "Birchwood, 6th St, San Francisco, CA 94103",
        availableTime: "7:00AM - 9:00PM",
        dockingpoint: {
            one: "Balmine Library",
            two: "Balmine Library",
            three: "Balmine Library",
            four: "Balmine Library",
            five: "Balmine Library"
        },

    },
    {
        id: 3,
        name: "Birchwood University",
        address: "Birchwood, 6th St, San Francisco, CA 94103",
        availableTime: "7:00AM - 9:00PM",
        dockingpoint: {
            one: "Balmine Library",
            two: "Balmine Library",
            three: "Balmine Library",
            four: "Balmine Library",
            five: "Balmine Library"
        },

    },
    {
        id: 4,
        name: "Birchwood University",
        address: "Birchwood, 6th St, San Francisco, CA 94103",
        availableTime: "7:00AM - 9:00PM",
        dockingpoint: {
            one: "Balmine Library",
            two: "Balmine Library",
            three: "Balmine Library",
            four: "Balmine Library",
            five: "Balmine Library"
        },

    },
    {
        id: 5,
        name: "Birchwood University",
        address: "Birchwood, 6th St, San Francisco, CA 94103",
        availableTime: "7:00AM - 9:00PM",
        dockingpoint: {
            one: "Balmine Library",
            two: "Balmine Library",
            three: "Balmine Library",
            four: "Balmine Library",
            five: "Balmine Library"
        },

    },
]

function AvailableCampus() {
    const handleclick = () => {
        console.log("clicked")
    }

    const [isNodeOpen, setIsNodeOpen] = useState(false)
  return (
    <div className='relative flex justify-center items-center w-full h-screen overflow-hidden font-helvetica'>
        <div>
            <motion.div
            onClick={() => setIsNodeOpen(true)}
            className='w-30 h-30 rounded-[60px] bg-black cursor-pointer flex justify-center items-center'
            initial={{scale: 1}}
            animate={{scale: isNodeOpen ? 60 : 1}}
            transition={{duration: 1, ease: 'easeInOut'}}
            >
                <div className='w-10 h-10 rounded-[60px] bg-white'></div>

            </motion.div>
        </div>

        <AnimatePresence>
            {isNodeOpen && (
                
                <motion.div
                className='absolute top-0   z-30 cursor-none py-20 px-20 max-w-[1400px] w-full h-screen'
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{delay: 0.5}}
                >
                    <div className=''>
                        <h1 className='text-black text-[40px] text-center'>Find Your Docking Station</h1>
                    </div>

                    <div className='flex justify-center mt-10 space-x-10'>
                        {dockingpoints.map((dockingpoint, index) => (
                            <div key={index}>
                                <h1 className='text-[#444] text-[25px] border-b border-[#888] w-70 pb-5 text-center'>
                                    {dockingpoint?.name}
                                </h1>

                                <p className='mt-10'>{dockingpoint?.address}</p>

                                <div className='w-full'>
                                    <p className='text-center mt-10 text-[20px] font-semibold'>
                                        Docking Stations
                                    </p>
                                    <div className='flex justify-center items-center '>
                                        <div className='w-10 h-10 flex justify-center items-center rounded-[60px] mt-5 bg-[#555]'>
                                            <ArrowDown color='white'/>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                            </div>
                        ))}

                    </div>

                    

                </motion.div>
            )}
        </AnimatePresence>
        
    </div>
  )
}

export default AvailableCampus
