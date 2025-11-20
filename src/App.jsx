import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Customer from './components/Customer'
import Contact from './components/Contact'
import Footer from './components/Footer'
import toast, { Toaster } from 'react-hot-toast';

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
  return (
    <div className='overflow-hidden dark:bg-gray-950'>
      <Toaster />
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero/>
      <About/>
      <Projects/>
      <Customer/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App