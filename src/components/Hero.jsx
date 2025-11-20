import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"

const Hero = () => {
  return (
    <div
      id='#' className='max-w-[1440px] mx-auto  text-white flex flex-col items-center gap-4 pt-35 pb-25 max-sm:pt-15 px-4 sm:px-8 lg:px-24 xl:px-40'>

      <img className='absolute object-cover top-0 w-full max-sm:h-120 md:h-150 z-1' src={assets.header_img} alt="" />

      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className='z-2 text-7xl w-4/5 max-sm:leading-14 sm:leading-19 text-center font-extrabold mb-10 max-sm:text-5xl max-sm:w-full max-sm:font-bold'>Explore homes that fit your dreams</motion.p>

      <motion.div
      initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      className='z-2 flex flex-wrap gap-5 items-center'>
        <a className='px-8 py-3 max-sm:px-6 max-sm:py-2 border  rounded-md font-medium border-white' href="#projects">Projects</a>
        <a className='px-8 py-3 max-sm:px-6 max-sm:py-2 rounded-md font-medium bg-[#3b82f6]' href="#contact">Contact us</a>
      </motion.div>

    </div>
  )
}

export default Hero