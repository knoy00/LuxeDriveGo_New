import React from 'react'
import Flyer from '../assets/images/summer_concert.png'

function News() {
  return (
    <div className='w-full bg-[#fff] h-[80vh] font-SFPro'>
      <div className='max-w-[1400px] mx-auto py-10 px-10'>
        <div>
            <h1 className='lg:text-[48px] font-semibold '>News and Updates</h1>
        </div>

        <div className='lg:flex lg:justify-between  lg:gap-x-10 mt-10 w-full'>
            <div>
                <h2 className='lg:text-[30px]'>Summer Concert In The Park</h2>
                <p className='mt-5 text-[#444]'>Feel the heat, catch the beat — it's the ultimate summer concert experience!</p>
                <p className='mt-5 text-[#444]'>Join us under the stars for an unforgettable night of live music, good vibes, and summer magic. Don't miss out — the rhythm of the season awaits!</p>

                <div className='mt-15'>
                    <button className='bg-black text-white py-4 px-10 mt-10 font-semibold hover:bg-[#333] rounded-xl cursor-pointer'>Learn More</button>
                </div>
            </div>
            <div className='lg:max-w-[800px] '>
                <img src={Flyer} alt="Summer Flyer" className='lg:w-full rounded-4xl'/>
            </div>
        </div>

      </div>
    </div>
  )
}

export default News
