import React from 'react'
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';
import Logo from '../assets/icons/LuxeDrive_white.png'
import { FaGlobe } from 'react-icons/fa';
 

const footerLinks = [
    {
        id: 1,
        title: "Company",
        links: [
            {
                id: 1,
                title: "About Us",
                link: "#"
            },
            {
                id: 2,
                title: "Contact Us",
                link: "#"
            },
            {
                id: 3,
                title: "Blog",
                link: "#"
            },
            
        ]
    },
    {
        id: 2,
        title: "Support",
        links: [
            {
                id: 1,
                title: "Help Center",
                link: "#"
            },
            {
                id: 2,
                title: "Safety Center",
                link: "#"
            },
            {
                id: 3,
                title: "Community Guidelines",
                link: "#"
            }
        ]
    },
    {
        id: 3,
        title: "Legal",
        links: [
            {
                id: 1,
                title: "Cookies Policy",
                link: "#"
            },
            {
                id: 2,
                title: "Privacy Policy",
                link: "#"
            },
            {
                id: 3,
                title: "Terms of Service",
                link: "#"
            },
            {
                id: 5,
                title: "Report a Security Issue",
                link: "#"
            }
        ]
    },
    {
        id: 4,
        title: "Install App",
        links: [
            {
                id: 1,
                title: "App Store",
                link: "#"
            },
            {
                id: 2,
                title: "Google Play",
                link: "#"
            }
        ]
    }
]

function Footer() {
  return (
    <div className='w-full bg-black h-[80vh] overflow-hidden font-SFPro '>
      <div className='max-w-[1400px] mx-auto px-10'>
        <div className='lg:flex lg:justify-between md:gap-x-10 lg:h-[35vh] lg:mt-3'>
            {footerLinks.map((footerLink) => (
                <div key={footerLink.id} className='flex flex-col mt-10  w-[200px] h-[200px]'>
                    <h2 className='text-white text-[20px] font-semibold border-b-2 border-[#efefef50] md:pb-2 mb-5 '>{footerLink.title}</h2>
                    <ul className='mt-0 space-y-3'>
                        {footerLink.links.map((link) => (
                            <li key={link.id} className='text-[#999] text-sm cursor-pointer hover:text-gray-400'>{link.title}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>

        <div className='w-full h-[1px] bg-[#efefef50] mt-10'></div> 

        <div className='flex justify-between items-center'>
            <div className='md:flex md:justify-between md:items-center md:mt-10  md:gap-x-10'>
                <a href="https://facebook.com" className='hover:bg-[#333] p-4 rounded-2xl'><FaFacebookF color='white' size={20}/></a>
                <a href="https://twitter.com" className='hover:bg-[#333] p-4 rounded-2xl'><FaTwitter color='white' size={20}/></a>
                <a href="https://instagram.com" className='hover:bg-[#333] p-4 rounded-2xl'><FaInstagram color='white' size={20}/></a>
                <a href="https://youtube.com" className='hover:bg-[#333] p-4 rounded-2xl'><FaYoutube color='white' size={20}/></a>
                <a href="https://tiktok.com" className='hover:bg-[#333] p-4 rounded-2xl'><FaTiktok color='white' size={20}/></a>
            </div>

            <div className='flex justify-center items-center mt-5 gap-x-2  cursor-pointer hover:bg-[#333] p-4 rounded-2xl'>
                <FaGlobe color='white' size={20}/> 
                <span className='text-white text-sm'>English (US)</span>
            </div>

        </div>

        <div className='flex justify-center items-center lg:mt-[12rem]'>
            <img src={Logo} alt="Logo" />
        </div>
      </div>
    </div>
  )
}

export default Footer
