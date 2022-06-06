import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillBehanceCircle } from 'react-icons/ai'
import { SiLeetcode } from 'react-icons/si'
import { GoLocation } from 'react-icons/go'
import { GiTie } from 'react-icons/gi'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Profile from '../public/images/profile.png'

const Sidebar = () => {

  const {theme, setTheme} = useTheme() 

  const changeTheme = () => {
    setTheme(theme==="light"?"dark":"light")
  }

  return (
    <div>
        <Image src={Profile} height="128px" width="128px" layout='intrinsic' alt='avatar'
        className='mx-auto rounded-full' quality="100"
        />
        <h3 className='my-4 text-3xl font-medium tracking-wider font-kaushan'><span className='text-purple-500'>Ashish </span>Mohanty</h3>
        <p className='px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200'>Web Developer</p>
        <p className='px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200'>Game Developer</p>
        <a href='/images/Resume-Ashish Mohanty.pdf' download='Resume-Ashish Mohanty.pdf' className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200'><GiTie className='w-6 h-6'/> Download Resume</a>

        {/* Social icons */}
        <div className='flex justify-around w-9/12 mx-auto my-5 text-purple-600 md:w-full'>
          <a href='https://github.com/Ashuu11' aria-label='Github'>
            <AiFillGithub className='w-8 h-8 cursor-pointer hover:text-purple-800 dark:hover:text-purple-300'/>
          </a>
          <a href='https://www.linkedin.com/in/ashish-mohanty-3b78a519a/' aria-label='Linkedin'>
            <AiFillLinkedin className='w-8 h-8 cursor-pointer hover:text-purple-800 dark:hover:text-purple-300'/>
          </a>
          <a href='https://www.behance.net/ashishmohanty1/projects' aria-label='Behance'>
            <AiFillBehanceCircle className='w-8 h-8 cursor-pointer hover:text-purple-800 dark:hover:text-purple-300'/>
          </a>
          <a href='https://leetcode.com/Ashuu11/' aria-label='Leetcode'>
            <SiLeetcode className='w-8 h-8 cursor-pointer hover:text-purple-800 dark:hover:text-purple-300'/>
          </a>

        </div>
        {/* Address */}
        <div className='py-4 my-5 bg-gray-200 dark:bg-dark-200' style={{ marginLeft: '-1rem', marginRight: '-1rem'}}>
          <div className='flex items-center justify-center space-x-2'>
            <GoLocation/>
            <span>Cuttack, Odisha, India</span>
          </div>
          <p className='my-2'>ashmohanty11@gmail.com</p>
          <p className='my-2'>8917313324</p>
        </div>

        {/* Email Button */}
        <button className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 focus:outline-none' onClick={() => window.open('mailto:ashmohanty11@gmail.com')}>Email Me</button>
        <button className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 focus:outline-none' onClick={changeTheme}>Toggle Theme</button>

    </div>
  )
}

export default Sidebar

