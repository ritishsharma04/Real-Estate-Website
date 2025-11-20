import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"
import ThemeToggleButton from './ThemeToggleButton';

const Navbar = ({theme, setTheme}) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = sidebarOpen ? "hidden" : "auto";
    }, [sidebarOpen]);

    return (
        <>
            <div className=' max-w-[1440px] mx-auto flex justify-between items-center px-4 py-4 sm:px-12 lg:px-24 xl:px-40'>
                <img className='z-2' src={assets.logo} alt="logo" />

                <div className={`z-3 flex items-center gap-5 text-white max-sm:text-black  max-sm:bg-white font-medium max-sm:w-screen max-sm:h-screen max-sm:fixed max-sm:top-0 max-sm:left-0 max-sm:right-0 max-sm:flex max-sm:flex-col max-sm:pt-18 max-sm:gap-3 transition-all duration-300 dark:max-sm:text-white dark:max-sm:bg-gray-950
                    ${sidebarOpen ? "translate-x-0" : "max-sm:translate-x-full"}`}>
                    <a onClick={() => setSidebarOpen(false)} href="#">Home</a>
                    <a onClick={() => setSidebarOpen(false)} href="#about">About</a>
                    <a onClick={() => setSidebarOpen(false)} href="#projects">Projects</a>
                    <a onClick={() => setSidebarOpen(false)} href="#testimonials">Testimonials</a>
                    <a onClick={() => setSidebarOpen(false)} href="#contact">Contact</a>
                </div>


                <div className='z-3 flex gap-4'>
               <ThemeToggleButton theme={theme} setTheme={setTheme}/>
                <a className='px-8 py-2 bg-white rounded-full max-sm:hidden ' href="">Sign up</a>
                <img
                    onClick={() => setSidebarOpen(false)}
                    className={`z-2 w-7 h-7 sm:hidden   ${!sidebarOpen ? "max-sm:hidden" : ""}`}
                    src={theme === 'dark' ? assets.cross_icon_light : assets.cross_icon }
                    alt="cross_icon"
                />

                <img
                    onClick={() => setSidebarOpen(true)}
                    className={`z-2 w-7 h-7 sm:hidden ${!sidebarOpen ? "" : "max-sm:hidden"}`}
                    src={assets.menu_icon}
                    alt="menu_icon"
                />

                </div>
            </div>
        </>
    )
}

export default Navbar