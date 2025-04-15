import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/icons/LuxeDrive_white.png'
import { Power } from 'lucide-react'

const Navbar = ({signin, signup, help}) => {
    const navigate = useNavigate();
  return (
    <div className=' bg-black w-full font-SFPro px-5 sticky top-0 z-100'>
      <div className='max-w-[1400px] mx-auto px-3 py-8 md:px-10 lg:px-10'>
        <div className='flex justify-between items-center'>
          <div className='text-white text-2xl cursor-pointer'>
            <Link to='/'>
              <img src={logo} alt="Logo" className='w-48 sm:w-50 md:w-55 lg:w-60'/>
            </Link>
          </div>
          <div className='hidden md:block'>
            <ul className='flex justify-center items-center space-x-10 text-white font-regular'>
              <li className='cursor-pointer'>{help}</li>
              <li className='cursor-pointer' onClick={() => navigate('/Signin')}>{signin}</li>
              <li className='cursor-pointer' onClick={() => navigate('/Signup')}>{signup}</li>
            </ul>
          </div>

          <div className='md:hidden'>
            <Power color='white' size={20}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar

{/* <ul className='flex justify-center items-center space-x-10 text-white font-regular'> */}
