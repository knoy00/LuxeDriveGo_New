import React from 'react'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { X } from 'lucide-react'

const dockingpoints = [
    {
        id: 1,
        name: "Birchwood University",
        address: "Birchwood, 6th St, San Francisco, CA 94103",
        availableTime: "7:00AM - 9:00PM",
        dockingLocation: {
            one: "Balmine Library",
            two: "East Gate",
            three: "Central Court",
            four: "Southgate Park",
            five: "Zenith Cafeteria"
        },

    },
    {
        id: 2,
        name: "Westpine University",
        address: "13 Oakridge Avenue, Westpine District, Western Region",
        availableTime: "7:00AM - 9:00PM",
        dockingLocation: {
            one: "Riverbend Commons",
            two: "Maple Dorms",
            three: "West Lecture Theatre",
            four: "Tech Quad",
            five: "Astro Labs"
        },

    },
    {
        id: 3,
        name: "Central University",
        address: "Baroson, 8th Ave, Maple, CA 94103",
        availableTime: "7:00AM - 9:00PM",
        dockingLocation: {
            one: "Tower Entrance",
            two: "Hallman Hall",
            three: "School Cafetaria",
            four: "Pluto Block",
            five: "Administrative Building"
        },

    },
    {
        id: 4,
        name: "Sandwall University",
        address: "GreenVille, 6th St, San Marino, DS 94103",
        availableTime: "7:00AM - 9:00PM",
        dockingLocation: {
            one: "Scholar's Walk",
            two: "Engineering Dome",
            three: "Cedar Cafe",
            four: "Services Center",
            five: "Horizon Amphitheatre"
        },

    },
    {
        id: 5,
        name: "Ridgeview College",
        address: "200 Willow Bend Street, Northlake Town, Northern State",
        availableTime: "7:00AM - 9:00PM",
        dockingLocation: {
            one: "Ridge Plaza",
            two: "Admin Block",
            three: "Sycamore Hall",
            four: "Arts Village",
            five: "Faculty Bridge"
        },

    },
]

function AvailableCampus() {
    
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
                className='absolute top-0   z-30 py-20 px-20 max-w-[1400px] w-full h-screen'
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{delay: 0.5}}
                >
                    <div className=''>
                        <h1 className='text-black text-[40px] text-center'>Find Your Docking Station</h1>
                    </div>

                    <div className='absolute top-[10%] right-0 cursor-pointer w-10 h-10 bg-black rounded-4xl flex justify-center items-center' onClick={() => setIsNodeOpen(false)}>
                        <X color='white'/>
                    </div>

                    <div className='flex justify-center my-10 space-x-10'>
                        {dockingpoints.map((dockingpoint, index) => (
                            <div key={index}>
                                <h1 className='text-[#444] text-[25px] border-b border-[#888] w-70 pb-5 text-center'>
                                    {dockingpoint?.name}
                                </h1>

                                <p className='mt-10 bg-[#eee] h-15 px-3 rounded-xl py-2 text-center'>{dockingpoint?.address}</p>

                                <div className='w-full text-center'>
                                    <p className='text-center mt-10 text-[20px] font-semibold'>
                                        Docking Stations
                                    </p>
                                    <div className='flex justify-center items-center '>
                                        <div className='w-10 h-10 flex justify-center items-center rounded-[60px] mt-5 bg-[#555]'>
                                            <ArrowDown color='white'/>
                                        </div>
                                    </div>
                                    
                                    <p className='mt-10 text-[#777]'>{dockingpoint?.dockingLocation?.one}</p>
                                    <p className='mt-10 text-[#777]'>{dockingpoint?.dockingLocation?.two}</p>
                                    <p className='mt-10 text-[#777]'>{dockingpoint?.dockingLocation?.three}</p>
                                    <p className='mt-10 text-[#777]'>{dockingpoint?.dockingLocation?.four}</p>
                                    <p className='mt-10 text-[#777]'>{dockingpoint?.dockingLocation?.five}</p>
                                </div>
                                
                            </div>
                        ))}

                    </div>

                    <div className='w-full bg-[#0c0c0c] h-30 rounded-3xl flex justify-center items-center px-10'>
                        <p className='text-[#555] text-center'>
                            Use of the campus e-bike service is subject to local regulations and institutional policies. Users must adhere to traffic rules and prioritize safety at all times. By accessing the service, you agree to ride responsibly and park only at designated docking stations
                        </p>

                    </div>

                    

                </motion.div>
            )}
        </AnimatePresence>
        
    </div>
  )
}

export default AvailableCampus
