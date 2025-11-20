import React from 'react'
import Title from './Title'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from "motion/react"


const Customer = () => {
    return (
        <div
            id='testimonials' className='max-w-[1440px] mx-auto flex flex-col items-center max-sm:px-6 max-sm:pt-6  md:pt-15 xl:pt-25 sm:px-12 lg:px-24 xl:px-40 '>

            <Title heading="Customer" subheading="Testimonials" description="Real Stories from Those Who Found Home with Us" />

            <div
                className='grid grid-cols-2 max-sm:grid-cols-1 py-4 sm:pt-15 gap-5 place-items-center px-30  max-sm:px-0'>
                {testimonialsData.map((data, index) => (
                    <div
                        className='flex flex-col items-center shadow-lg border border-gray-200 py-12 px-8 max-sm:px-4 max-sm:py-10 rounded-lg dark:border-0.5 '
                        key={index}>

                        <img className='w-18 h-18 rounded-full mb-4' src={data.image} alt={data.alt} />

                        <h5 className='dark:text-white text-lg font-bold mb-1 text-gray-600'>{data.name}</h5>

                        <h6 className='text-sm mb-4 text-gray-500'>{data.title}</h6>

                        <div className='flex justify-center mb-4 gap-1'>
                            <img src={assets.star_icon} alt="" />
                            <img src={assets.star_icon} alt="" />
                            <img src={assets.star_icon} alt="" />
                            <img src={assets.star_icon} alt="" />
                        </div>

                        <p className='text-center text-sm text-gray-400 font-medium'>{data.text}</p>

                    </div>
                ))}
            </div>

        </div>
    )
}

export default Customer