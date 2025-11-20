import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets'
import { easeOut, motion } from "motion/react"


const About = () => {
    return (
        <div
        id='about' className='max-w-[1440px] mx-auto flex flex-col items-center max-sm:px-10 max-sm:pt-10 md:pt-15 xl:pt-25 sm:px-12 lg:px-24 xl:px-40'>

            <Title heading="About" subheading="Our Brand" description="Passionate About Properties, Dedicated to Your Vision" />

            <div
            className='flex items-center py-4 sm:pt-15 md:gap-20 max-sm:flex-col'>
                <img src={assets.brand_img} alt="" className="w-full h-full sm:w-1/2 max-w-lg py-3"/>

                    <div className='w-full flex flex-col gap-4 py-3'>

                        <div className='grid grid-cols-2 gap-6'>
                            <div>
                                <p className='font-extrabold text-5xl max-sm:text-3xl mb-1'>20+</p>
                                <p className='text-gray-500'>Years of Excellence</p>
                            </div>
                            <div>
                                <p className='font-extrabold text-5xl max-sm:text-3xl mb-1'>20+</p>
                                <p className='text-gray-500'>Years of Excellence</p>
                            </div>
                            <div>
                                <p className='font-extrabold text-5xl max-sm:text-3xl mb-1'>20+</p>
                                <p className='text-gray-500'>Years of Excellence</p>
                            </div>
                            <div>
                                <p className='font-extrabold text-5xl max-sm:text-3xl mb-1'>20+</p>
                                <p className='text-gray-500'>Years of Excellence</p>
                            </div>
                        </div>

                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                        <a className='w-fit px-10 py-3 max-sm:px-6 max-sm:py-2 rounded-md font-medium text-white bg-[#3b82f6]' href="">Learn more</a>
                    </div>

            </div>

        </div>
    )
}

export default About