import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='max-w-[1440px] mx-auto flex flex-col items-center  max-sm:px-8 max-sm:pt-6 sm:mt-8 pt-10 sm:px-12 lg:px-24 xl:px-40 bg-[#111827] '>
        <div className='grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 max-sm:gap-8 gap-3'>

            <div className='flex flex-col gap-3'>
                <img className='w-30' src={assets.logo_dark} alt="" />
                <p className='text-gray-400 w-5/6 text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
            </div>

            <div className='flex flex-col gap-3'>
                <h6 className='font-extrabold text-white text-md'>Company</h6>
                <div className='flex flex-col gap-3 text-gray-400'>
                    <a className='text-sm' href="#">Home</a>
                    <a className='text-sm' href="#about">About</a>
                    <a className='text-sm' href="#contact">Contact us</a>
                    <a className='text-sm' href="">Privacy policy</a>
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <h6 className='font-extrabold text-white text-md'>Subscribe to our newsletter</h6>
                <p className='text-gray-400'>The latest news, articles, and resources, sent to your inbox weekly.</p>
                <div className='flex flex-col gap-3 max-lg:flex-wrap'>
                    <input className='bg-gray-800 placeholder-gray-400 outline-0 px-4 py-3 rounded-md' type="email" placeholder='Enter your email' />
                    <a className='w-fit px-12 py-2 max-md:px-8 max-md:py-2 rounded-md text-white font-medium bg-[#3b82f6]' href="">Subscribe</a>
                </div>

            </div>
        </div>

        <hr className='border border-gray-600 w-full mt-3' />
        <p className='text-center text-gray-500 my-4'>Copyright 2025 © Ritish_Sharma. All Right Reserved.</p>
        
    </div>
  )
}

export default Footer