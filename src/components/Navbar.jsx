import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/icons/LuxeDrive_white.png'

const Navbar = ({signin, signup, help}) => {
    const navigate = useNavigate();
  return (
    <div className=' bg-black w-full font-helvetica'>
      <div className='max-w-[1400px] mx-auto px-3 py-8'>
        <div className='flex justify-between items-center'>
            <div className='text-white text-2xl cursor-pointer'>
                <Link to='/'>
                    <img src={logo} alt="Logo" className='w-60'/>
                </Link>
            </div>
            <div >
                <ul className='flex justify-center items-center space-x-10 text-white font-regular'>
                    <li className='cursor-pointer'>{help}</li>
                    <li className='cursor-pointer' onClick={() => navigate('/Signin')}>{signin?.label}</li>
                    <li className='cursor-pointer bg-white text-black py-1 px-2 rounded-lg' onClick={() => navigate('/Signup')}>{signup}</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
