import React from 'react'
import Navbar from '../components/Navbar'
import googleIcon from '../assets/icons/google-small.png';
import appleIcon from '../assets/icons/apple.png'
import { useNavigate } from 'react-router-dom';
function Signin() {
    const navigate = useNavigate();
  return (
    <div className='w-full h-screen'>
        <Navbar signin={{
            label: 'Sign Up', 
            onClick: () => navigate('/Signup')
            }}
        />
        <div className='flex justify-center items-center w-full mt-50'>
            <div className='text-center px-5 flex flex-col w-100'>
                <h1 className='text-3xl mb-7'>Sign In</h1>
                <input type="text" placeholder='Email address' className='w-full bg-gray-100 py-4 px-5 rounded-xl mb-5'/>
                <input type="password" placeholder='Password' className='w-full bg-gray-100 py-4 px-5 rounded-xl mb-5'/>
                <button className='bg-black text-white py-4 px-5 rounded-xl hover:bg-[#222] cursor-pointer'>Sign In</button>
                <div className='flex justify-center items-center gap-x-4 mt-5'>
                    <div className='h-[1px] bg-gray-300 w-50'></div>
                    <div>
                        <p className='font-regular'>or</p>
                    </div>
                    <div className='h-[1px] bg-gray-300 w-50'></div>
                </div>
                    
                <div className='flex justify-center items-center gap-x-3 bg-gray-100 py-4 px-5 rounded-xl mt-5 hover:bg-gray-200 cursor-pointer'>
                    <img src={googleIcon} alt="Google Icon" className='w-7'/>
                    <p>Continue with Google</p>
                </div>
                <div className='flex justify-center items-center gap-x-3 bg-gray-100 py-4 px-5 rounded-xl mt-5 hover:bg-gray-200 cursor-pointer'>
                    <img src={appleIcon} alt="Google Icon" className='w-7'/>
                    <p>Continue with Apple</p>
                </div>

                <p className='text-sm mt-5 text-[#666]'>By continuing, you agree to receive calls, WhatsApp, or SMS/RCS messages — which may be automated — from LuxeDriveGo and its partners at the phone number you provided.</p>
            </div>
        </div>
    </div>
  )
}

export default Signin
